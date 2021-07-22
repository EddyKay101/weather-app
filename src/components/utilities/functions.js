import React from "react"
export function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        );
    }

}

export function calCelsius(temp) {
    let celcius = Math.floor(temp - 273.15);
    return celcius;
}

export function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please do not leave the field(s) empty
        </div>
    );
}
