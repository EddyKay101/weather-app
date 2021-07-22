import React from "react"
export function minmaxTemp(max, min) {
    if (max && min) {
        return (
            <h3>
                <span className="px-4">H:{max}&deg;</span>
                <span className="px-4">L:{min}&deg;</span>
            </h3>
        );
    }

}

export function toCelsius(temp) {
    return Math.floor(temp - 273.15);

}

export function toMilesPerHour(speed) {
    return Math.floor(speed * 2.237);
}

export function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please do not leave the field(s) empty
        </div>
    );
}
