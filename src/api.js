// api.js
import axios from 'axios';

const API_KEY = 'ae7cc2378e19484b89b144523241406';
async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}%2Cindia&key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        throw error;
    }
}

export default fetchWeatherData




