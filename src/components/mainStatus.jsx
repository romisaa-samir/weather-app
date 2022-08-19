import React, { useEffect, useState } from "react";
import Humadity from "../assets/humidity.png";
import Wind from "../assets/wind.png";
import Rainy from "../assets/rainy.png";
import Pressure from "../assets/pressure.png";
import { useSelector } from "react-redux";
export default function MainStatus() {
  let data = useSelector((store) => store.weather.weather);

  const [infoData , setInfoData]=useState([])

  useEffect(()=>{
    if(data?.main){
      setInfoData([
        {
          id:1,
          p: "Humidity",
          c: data?.main.humidity + "%",
          icon: Humadity,
        },
        {
          id:2,
          p: "Air Pressure",
          c: data?.main.pressure + " PS",
          icon: Pressure,
        },
        {
          id:3,
          p: "Chance of Rain",
          c: 0 + "%",
          icon: Rainy,
        },
        {
          id:4,
          p: "Wind Speed",
          c: data?.wind.speed + "km/h",
          icon: Wind,
        },
      ])
    }
  },[data])
 

  return (
    <>
 {
     data &&
     <div>
       {infoData?.map((w) => {
         return (
             <div key={w.id} style={{display:"grid", gridTemplateColumns :"1fr 1fr",gap:"15px"}}>
               <img src={w.icon} style={{placeSelf:"center",marginLeft:"auto",width:"20px"}}/>
               <div>
                 <p className="sm">{w.p}</p>
                 <p className="M">{w.c}</p>
               </div>
             </div>
         );
       })}
     </div>
 }
    </>
  );
}
