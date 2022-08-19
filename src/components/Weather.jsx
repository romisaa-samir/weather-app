import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../store/actions/weatherAction";
import { urlImg } from "../utils/helper";
import SearchInput from "./SearchInput.lap"
export default function Weather() {
  const [show, setShow] = useState(false);
  const [city, setCity] = useState("cairo");

  let dispatch = useDispatch();
  let data = useSelector((store) => store.weather.weather);
  useEffect(() => {
    dispatch(getWeather());
  }, []);
  return (
    data.main && (
      <div>
        <img
          src={`${urlImg}${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].main}
        />
        <p className="xl">{data.weather[0].main}</p>
        <p>{data.name} City</p>
        <p className="xl">{`${data.main?.temp.toFixed()}°C`}</p>
        <div className="sm">
          <span style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
            Change Location
          </span>
          <i
            className="fa-solid fa-location-dot"
            style={{ cursor: "pointer",marginLeft:"5px" }}
            onClick={() => setShow(!show)}
          ></i>
        </div>
        {show && (
          <SearchInput/>
        )}
      </div>
    )
  );
}
