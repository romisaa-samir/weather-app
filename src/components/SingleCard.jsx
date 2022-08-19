import React from "react";
import { convertingUTC, dd, getHoursInAmPm } from "../utils/helper";

export default function SingleCard({ time }) {
  let hour = convertingUTC(time.dt);
  let H = getHoursInAmPm(hour);

  return (
    <div className="singleCard" style={{boxShadow:dd ===H ? "0px 0px 10px 1px #0000004f" : "none"}}>
      <p className="sm">{H}</p>
      <p className="xl">{time.temp.toFixed() + "°C"}</p>
      {dd === H ? <p>Feels like {time.feels_like.toFixed() + "°C"}</p> : null}
    </div>
  );
}
