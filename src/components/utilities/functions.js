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

export function farenheittoCelsius(temp) {
    return Math.floor(temp - 273.15);

}

export function speedToMilesPerHour(speed) {
    return Math.floor(speed * 2.237);
}
