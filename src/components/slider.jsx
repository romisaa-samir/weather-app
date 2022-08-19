import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getWeatherDay } from "../store/actions/weatherAction";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import SingleCard from "./SingleCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { day} from "../utils/helper";
export default function Hours() {
  let dispatch = useDispatch();
  const { coord } = useSelector((state) => state.weather.weather);
  const { hourly } = useSelector((state) => state.weather.weatherDay);

  const settings = {
    arrows: true,
    speed: 900,
    swipToSlide: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const lon = coord?.lon;
  const lat = coord?.lat;
  useEffect(() => {
    dispatch(getWeatherDay(lat,lon));
  }, [coord]);

  return (
    hourly &&
    <div style={{marginLeft: "2rem"}}>
      <h3><i className="fa-solid fa-chevron-left"></i>{day}</h3>
      <div style={{width:"90%"}}>
        <Slider {...settings}>
          {hourly?.map((hour, i) => {
            return <SingleCard key={i} time={hour} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
