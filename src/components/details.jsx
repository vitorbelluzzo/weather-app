import { DropHalf, Wind } from "@phosphor-icons/react";

export function Details() {
  return(
    <div className="flex items-center justify-between py-0 px-5" >
      <div className="col">
      <DropHalf size={24} />
        <div>
          <p>Humidity</p>
          <p>87%</p>
        </div>
      </div>
      <div className="col">
        <Wind size={24} />
        <div>
          <p>Wind Speed</p>
          <p>15 km/h</p>
        </div>
      </div>
    </div>
  )
  
}