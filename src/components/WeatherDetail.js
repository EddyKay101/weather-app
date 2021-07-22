import React from 'react';

const WeatherDetail = (props) => {
    return (
        <div className=" col-12 weather-detail mt-3">
            <div className="weather-detail__item">
                {props.humidity && <h4 className="py-3">Humidity</h4>}
                {props.humidity && <span>{props.humidity} %</span>}

            </div>
            <div className="weather-detail__item">
                {props.windSpeed && <h4 className="py-3">Wind Speed</h4>}
                {props.windSpeed && <span>{props.windSpeed} <small>mph</small></span>}
            </div>
            <div className="weather-detail__item">
                {props.feelsLike && <h4 className="py-3">Feels Like</h4>}
                {props.feelsLike && <span>{props.feelsLike}&deg;</span>}
            </div>
            <div className="weather-detail__item">
                {props.rainVolume && <h4 className="py-3">Rain Volume (1h)</h4>}
                {props.rainVolume && <span>{props.rainVolume}mm</span>}
            </div>
        </div>
    );
};

export default WeatherDetail;