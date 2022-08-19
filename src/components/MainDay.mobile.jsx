import React from "react";
import { urlImg } from "../utils/helper";
import Humadity from "../assets/humidityM.png";
import Wind from "../assets/windM.png";
export default function MainDay({ current }) {
  return (
    <div className="curr-weather">
      {
        current &&
        <>
          <div>
        <img
          src={`${urlImg}${current.weather[0].icon}@2x.png`}
          alt={current.weather[0].main}
        />
        <span style={{ lineHeight: ".1rem"}}>{current.weather[0].description}</span>
      </div>
      <p className="xxl">
        {current.temp.toFixed()}&deg;
      </p>
      <div className="curr-weather-details sm">
        <div>
          <img src={Wind} style={{ width: "13px"}} />
          <span>{`${current.wind_speed} km/h`}</span>
        </div>
        <div>
          <img src={Humadity} style={{ width: "13px" }} />
          <span>{`${current.humidity} %`}</span>
        </div>
      </div>
      </>
      }
    </div>
  );
}
