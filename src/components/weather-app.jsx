import { Drop, MagnifyingGlass, Wind } from "@phosphor-icons/react";
import { useState } from "react";

import clear from "../assets/clear.png";
import cloud from "../assets/clouds.png";
import drizzle from "../assets/drizzle.png";
import mist from "../assets/mist.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";

export function WeatherApp() {
  const apiKey = "64251d6558dc7a158beb189685615aae";
  const [wicon, setWicon] = useState(cloud);

  const search = async () => {
    const element = document.getElementById("cityInput");
    if (element.value === "") {
      alert("Please enter a country name");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const humidity = document.getElementById("humidity-percent");
      const windSpeed = document.getElementById("wind-speed");
      const temp = document.getElementById("weather-temp");
      const location = document.getElementById("weather-location");
      console.log(data);
      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWicon(clear);
      } else if (
        data.weather[0].icon === "02d" ||
        data.weather[0].icon === "02n"
      ) {
        setWicon(cloud);
      } else if (
        data.weather[0].icon === "03d" ||
        data.weather[0].icon === "03n"
      ) {
        setWicon(drizzle);
      } else if (
        data.weather[0].icon === "04d" ||
        data.weather[0].icon === "04n"
      ) {
        setWicon(mist);
      } else if (
        data.weather[0].icon === "09d" ||
        data.weather[0].icon === "09n"
      ) {
        setWicon(rain);
      } else if (
        data.weather[0].icon === "10d" ||
        data.weather[0].icon === "10n"
      ) {
        setWicon(rain);
      } else if (
        data.weather[0].icon === "13d" ||
        data.weather[0].icon === "13n"
      ) {
        setWicon(snow);
      } else {
        setWicon(clear);
      }

      humidity.textContent = data.main.humidity + "%";
      windSpeed.textContent = data.wind.speed + " km/h";
      temp.textContent = data.main.temp + "°C";
      location.textContent = data.name;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div
      id="container"
      className="p-10 w-11/12 max-w-[500px] mx-auto mt-20 rounded-xl bg-gradient-to-t from-teal-500 to-teal-600"
    >
      <div id="top-bar" className="flex justify-center gap-4">
        <input
          type="text"
          id="cityInput"
          placeholder="Search City, Country..."
          className="font-normal placeholder:text-teal-900/40 text-lg text-teal-950 p-3 flex w-9/12 bg-teal-100 border-none outline-none rounded-full"
        />
        <button
          onClick={() => {
            search();
          }}
          className="bg-teal-100 p-5 rounded-2xl cursor-pointer"
        >
          <MagnifyingGlass size={24} className="text-teal-950/60" />
        </button>
      </div>
      <img src={wicon} className="mx-auto mt-7" />
      <span
        id="weather-temp"
        className="mx-auto flex justify-center text-7xl font-semibold text-teal-50"
      >
        22°C
      </span>
      <span
        id="weather-location"
        className="mx-auto flex justify-center text-4xl mt-4 text-teal-50"
      >
        São Paulo
      </span>

      <div className="flex justify-between mt-12 text-lg text-teal-50">
        <div className="flex">
          <Drop size={60} />
          <div>
            <p id="humidity-percent" className="text-">
              64%
            </p>
            <p>humidity</p>
          </div>
        </div>

        <div className="flex">
          <Wind size={60} />
          <div>
            <p id="wind-speed" className="text-xl">
              18 km/h
            </p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
