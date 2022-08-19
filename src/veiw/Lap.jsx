import React from "react";
import MainStatus from "../components/mainStatus";
import Hours from "../components/slider";
import Weather from "../components/Weather";

export default function Lap() {

  return (
    <div className="container">
      <div
        style={{
          background: "linear-gradient(45deg, #00000054, transparent)",
          height: "100vh",
        }}
      >
        <div className="weather-wrapper">
          <div>
            <Weather />
          </div>
          <div className="mainStatus-wrapper">
            <MainStatus />
          </div>
        </div>
        <div>
          <Hours />
        </div>
      </div>
    </div>
  );
}
