
import React, { useState } from 'react';
import axios from 'axios';

const WeatherSearch = ({ onAddCity }) => {
    const [city, setCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async () => {
        if (city) {
            const apiKey = '5e8f21b70faff8f243a108a0bde750b0'; 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await axios.get(url);
                const { name, main: { temp }, weather } = response.data;
                const weatherData = {
                    name,
                    temp,
                    description: weather[0].description
                };
                onAddCity(weatherData);
                setCity('');
                setErrorMessage('');
            } catch (error) {
                setErrorMessage('City not found. Please enter a valid city name.');
                console.error('Error fetching weather data:', error);
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Search</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default WeatherSearch;
