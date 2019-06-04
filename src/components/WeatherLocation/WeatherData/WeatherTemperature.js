import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weather';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [DRIZZLE]: "day-showers",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
}
const getWeatherIcon = weatherState => {
    const sizeIcon = "4x";
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else
    return <WeatherIcons className="wicon" name="day-sunny" size="2x"/>
};
const WeatherTemperature = ({ temperature, weatherState }) =>(
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span> 
        <span className="temperatureType">{`°C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;