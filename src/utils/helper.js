import * as yup from "yup";

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();

export const day = weekday[d.getDay()];

export const urlImg = `http://openweathermap.org/img/wn/`

export const convertingUTC = (dt) => {
    
    let unix_timestamp = dt
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();

    return hours
}
export const getDayFromUTC = (dt) => {
    let unix_timestamp = dt
    let date = new Date(unix_timestamp * 1000);
    let day = date.toLocaleDateString("en-us",{
        weekday:"short",
        month:"short",
        day:"numeric"
    })
    return day
}
export const getHoursInAmPm =(hour)=>{

    let AmOrPm = hour >= 12 ? 'PM' : 'AM';
    let r = (hour % 12) || 12;

    let hoursInAmPm = r + AmOrPm;

    return hoursInAmPm
    
}

export const hours12 = (hour) => {
    let ampm = hour.getHours() >= 12 ? 'PM' : 'AM';
    let now =`${(hour.getHours() % 12  || 12)}${ampm}`
    return now
};

let dt = new Date();
let now = dt.getHours();
export const dd = getHoursInAmPm(now)

//get today
export const Today =()=>{
    let date = new Date()
    let today = date.toString().split(" ")[0]
    return today
}
export const schema = yup
.object()
.shape({
  search: yup
    .string()
    .required("This field is required")
    .matches(/^[A-Za-z/\s/]+$/, "English letters only!!"),
})
.required();