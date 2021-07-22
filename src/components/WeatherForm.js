import React from 'react';
import * as fn from './utilities/functions';
const WeatherForm = (props) => {
    return (
        <div className="container">
            <div>{props.error && fn.error()}</div>

            <div className="row">
                <div className="col-12 d-md-flex flex-column weather-form">
                    <form onSubmit={props.getWeather}>
                        <input type="text" className="form-control" name="city" placeholder="City" autoComplete="off" />
                        <input type="text" className="form-control" name="country" placeholder="Country" autoComplete="off" />
                        <button className="mt-5 col-sm-12">Get Weather</button>
                    </form>
                </div>
            </div>


        </div>
    )
}


export default WeatherForm;