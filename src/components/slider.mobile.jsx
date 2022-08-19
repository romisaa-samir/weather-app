import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { convertingUTC, getHoursInAmPm, urlImg } from '../utils/helper';
export default function HoursMobile({hourly}) {
    const settings = {
        arrows:false,
        slidesToShow:3,
        speed:900,
        swipeToSlide:true,
        spacebetween:10
    }
  return (
    <div className='wrapper-hoursMobile'>
        <Slider {...settings}>
            {
              hourly &&
              hourly.map(({dt,temp,weather},i)=>{
                let d = convertingUTC(dt);
                let time = getHoursInAmPm(d)
                return( 
                <div key={dt} className={`card ${temp >= 28 ? 'card-hightemp' : 'card-normaltemp'}`} >
                    <p>{time}</p>
                    <div style={{textAlign:"-webkit-center"}}>
                        {
                            weather.map(({main,icon,id})=>{
                                return(
                                    <img key={id} src={`${urlImg}${icon}@2x.png`} alt={`${main}`} />
                                )
                            })
                        }
                    </div>
                    <p className="M">{temp.toFixed()}&deg;</p>
                </div>
                )
            })
            }
        </Slider>
    </div>
  )
}
