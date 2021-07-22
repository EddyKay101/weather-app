import React from 'react';
import * as fn from './utilities/functions';
const WeatherSummary = (props) => {
    return (
        <div className="weather-summary mt-5">
            <div className="weather-summary__location">
                {props.city && props.country && <h1>{props.city},{props.country}</h1>}
                <h4 className="py-3">{props.description}</h4>
                <h5 className="py-4">
                    <i className={`fa fa-6x ${props.weatherIcon}`}></i>
                </h5>
                {props.temperature && <h1 className="py-2">{props.temperature}&deg;</h1>}
                <div className="weather-summary__temperatures">
                    {fn.minmaxTemp(props.maxTemp, props.minTemp)}
                </div>
            </div>
        </div>
    );
};

export default WeatherSummary;