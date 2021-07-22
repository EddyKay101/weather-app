import React from 'react';
import WeatherDetail from './WeatherDetail';
import WeatherForm from './WeatherForm';
import * as fn from './utilities/functions';
const API_KEY = "95bf197a8cbfb46c8422aaa2a7ba9fa1";
export default class Weather extends React.Component {

    constructor() {
        super();
        this.state = {
            city: undefined,
            icon: undefined,
            main: undefined,
            temperature: undefined,
            maxTemp: undefined,
            minTemp: undefined,
            description: "",
            feelsLike: undefined,
            humidity: undefined,
            error: false
        }

        this.weatherIcon = {
            Storm: "fa-thunderstorm",
            Drizzle: "fa-cloud-rain",
            Rain: "fa-cloud-showers-heavy",
            Snow: "fa-snowflake",
            Atmosphere: "fa-smog",
            Sun: "fa-sun",
            Clouds: "fa-cloud"
        }
    }

    handleGetWeatherIcon(icons, series) {
        switch (true) {
            case series >= 200 && series <= 232:
                this.setState({ icon: this.weatherIcon.Storm });
                break;
            case series >= 300 && series <= 331:
                this.setState({ icon: this.weatherIcon.Drizzle });
                break;
            case series >= 500 && series <= 531:
                this.setState({ icon: this.weatherIcon.Rain });
                break;
            case series >= 600 && series <= 622:
                this.setState({ icon: this.weatherIcon.Snow });
                break;
            case series >= 700 && series <= 781:
                this.setState({ icon: this.weatherIcon.Atmosphere });
                break;
            case series === 800:
                this.setState({ icon: this.weatherIcon.Sun });
                break;
            case series >= 801 && series <= 804:
                this.setState({ icon: this.weatherIcon.Clouds });
                break;
            default:
                this.setState({ icon: this.weatherIcon.Clouds });
        }
    }

    handleGetWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;

        if (city) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

            const response = await api_call.json();
            this.setState((prevState) => ({
                city: prevState.city = response.name,
                temperature: prevState.temperature = fn.calCelsius(response.main.temp),
                maxTemp: prevState.maxTemp = fn.calCelsius(response.main.temp_max),
                minTemp: prevState.maxTemp = fn.calCelsius(response.main.temp_min),
                description: prevState.description = response.weather[0].description,
                error: false
            }));
            this.handleGetWeatherIcon(this.weatherIcon, response.weather[0].id)
            console.log(response);
        } else {
            this.setState({
                error: true
            })
        }
    };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <WeatherForm
                        getWeather={this.handleGetWeather}
                        error={this.state.error}
                    />
                    <WeatherDetail
                        city={this.state.city}
                        temperature={this.state.temperature}
                        maxTemp={this.state.maxTemp}
                        minTemp={this.state.minTemp}
                        description={this.state.description}
                        weatherIcon={this.state.icon}
                    />
                </div>

            </div>
        );
    }

};


