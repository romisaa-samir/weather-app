import React from 'react'
import {  getDayFromUTC, Today } from '../utils/helper';


export default function Days({daily}) {
    const today = Today()

  return (
    <div className='days-wrapper'>
        {
          daily &&daily?.slice(0,3).map((day,i)=>{
            let d = getDayFromUTC(day.dt);
            return (<p key={i}>{d.split(",")[0] === today ? "Today" : d}</p>)
        })
        }
    </div>
  )
}
