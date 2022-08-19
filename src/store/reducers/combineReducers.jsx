import { combineReducers } from "redux"
import WeatherReducer from "./weatherReducer"

export default combineReducers ({
    weather:WeatherReducer
})