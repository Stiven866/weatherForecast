import { url_base_weather_forecast, api_key } from './../constants/api_url'

const getUrlWeatherForecastByCity = city =>{
    return `${url_base_weather_forecast}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherForecastByCity;