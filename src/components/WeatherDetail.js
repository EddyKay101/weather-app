import React from 'react';
import * as fn from './utilities/functions';
const WeatherDetail = (props) => {
    return (
        <div className="cards">
            <h1>{props.city}</h1>
            <h5 className="py-4">
                <i className={`fa fa-6x ${props.weatherIcon}`}></i>
            </h5>

            {props.temperature ? (<h1 className="py-2">{props.temperature}&deg;</h1>) : null}

            {/** show max and min temp */}
            {fn.minmaxTemp(props.maxTemp, props.minTemp)}

            <h4 className="py-3">{props.description}</h4>
        </div>
    );
};

export default WeatherDetail;