const axios = require('axios');

class WeatherService {
     convertKelvinToCelsius(Kelvin) {
        return Math.round(Kelvin - 273.15) + '°';
    }

    async getWeather(city) {
        const request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4018b5d34e471c5c55ebe094d4edb10f`)
            .catch(function (err) {
                console.log(err);
            });

        const data = request.data;

        const weather = {
               temperature: this.convertKelvinToCelsius(data.main.temp),
               temp_min: this.convertKelvinToCelsius(data.main.temp_min),
               temp_max: this.convertKelvinToCelsius(data.main.temp_max)
        }

        const wind = {
            speed: data.wind.speed,
            deg: data.wind.deg
        }

        const clouds = data.clouds.all;

        const response = {
            weather: weather,
            wind: wind,
            clouds: clouds
        }

        return response;
    }
}

module.exports = new WeatherService();