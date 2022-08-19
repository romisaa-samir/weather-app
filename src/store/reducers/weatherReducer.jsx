import {WEATHER, WEATHERDAY } from "../actions/weatherAction"

const INITIAL_STATE  = {
    weather:{},
    weatherDay:{}
}
export default function WeatherReducer(state = INITIAL_STATE,action) {

    switch(action.type){
        case WEATHER:
            return {
                ...state,
                weather:{...action.payload}
            }
        case WEATHERDAY:
            return {
                ...state,
                weatherDay:{...action.payload}
            }

        default:
            return state
    }
}
