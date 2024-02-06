import { Details } from "./details";

export function Info() {
  return(
    <div >
      <img 
        src="../weather-app-img/images/rain.png" 
        className="w-44 mt-8 mx-auto"
       />
      <h1 className="text-[5rem] font-medium">23°C</h1>
      <h2 className="text-[2.8rem] font-medium -mt-3">São Paulo</h2>
      <Details />
    </div>
  )
}