import React from 'react';
import * as fn from './utilities/functions';
const WeatherForm = (props) => {
    return (
        <div className="container">
            <div>{props.error && fn.error()}</div>
            <form onSubmit={props.getWeather}>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="city" placeholder="City" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>

        </div>
    )
}


export default WeatherForm;