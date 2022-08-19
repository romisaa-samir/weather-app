import {getWeatherData, getWeatherInEveryHour} from '../../api/weather'

export const WEATHER = "WEATHER";
export const WEATHERDAY = "WEATHERDAY";

export const weather = (payload)=>{
    return{
        type:WEATHER,
        payload
    }
}

export const weatherDay = (payload)=>{
    return{
        type:WEATHERDAY,
        payload
    }
}

export const getWeather = (city)=>{
    return (dispatch)=>{
        getWeatherData(city).then(data=>{
            dispatch(weather(data.data))
        })
    }
}

export const getWeatherDay = (lat,lon)=>{
    return (dispatch)=>{
        getWeatherInEveryHour(lat,lon).then(data=>{
            dispatch(weatherDay(data.data))
        })
    }
}