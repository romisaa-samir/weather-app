import axios from 'axios';

// const city = "cairo";
// const lon = "31.2497";
// const lat = "30.0626";
const APIkey = '5d38958843e34c51ff0b6899b466d2e0';
export const getWeatherData = async (city = 'cairo') => {
    try {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        return data
    } catch (error) {
        alert(error.response.data.message);
    }
}
export const getWeatherInEveryHour = async (lat="30.0626",lon="31.2497") => {
    try {
        const WeatherInEveryHour = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=chourly,alerts&appid=${APIkey}&units=metric`)
        return WeatherInEveryHour
    } catch (error) {
        alert(error.response.data.message);
    }
}
