import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Days from "../components/Days.mobile";
import HoursMobile from "../components/slider.mobile";
import MainDay from "../components/MainDay.mobile";
import { getWeatherDay } from "../store/actions/weatherAction";
import SearchInput from "../components/SearchInput.mobile";

export default function Mobile() {
  let dispatch = useDispatch();
  let data = useSelector((store) => store.weather.weatherDay);
  const { coord } = useSelector((state) => state.weather.weather);
  let temp = data?.current?.temp?.toFixed();
  const lon = coord?.lon;
  const lat = coord?.lat;
  useEffect(() => {
    dispatch(getWeatherDay(lat, lon));
  }, [coord]);
  let arr = data?.timezone?.split("/");
  let city = arr?.[1];
  return (
    <>
      {data && (
        <div
          className="container-mobile"
          style={{ background: temp >= 28 ? "#F7C293" : "#71D6F8" }}
        >
          <div className="nav">
            <div className="navItem">
              <i className="fa-solid fa-location-dot" style={{fontSize:"22px"}}></i>
              {city && <p style={{ fontSize: "1.3rem" }}>{city}</p>}
            </div>
            <SearchInput/>
          </div>
          <MainDay current={data.current} />
          <Days daily={data.daily} />
          <HoursMobile hourly={data.hourly} />
        </div>
      )}
    </>
  );
}
