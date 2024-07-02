import React from 'react';

const Dashboard = ({ cities, onRemoveCity }) => {
    const getCustomIcon = (description) => {
        const descriptionMap = {
            'clear sky': 'clear_sky.png',
            'few clouds': 'few_clouds.png',
            'scattered clouds': 'scattered_clouds.png',
            'broken clouds': 'broken_clouds.png',
            'overcast clouds': 'broken_clouds.png',
            'light intensity drizzle': 'shower_rain.png',
            'drizzle': 'shower_rain.png',
            'heavy intensity drizzle': 'shower_rain.png',
            'light intensity drizzle rain': 'shower_rain.png',
            'drizzle rain': 'shower_rain.png',
            'heavy intensity drizzle rain': 'shower_rain.png',
            'shower rain and drizzle': 'shower_rain.png',
            'heavy shower rain and drizzle': 'shower_rain.png',
            'shower drizzle': 'shower_rain.png',
            'light rain': 'rain.png',
            'moderate rain': 'rain.png',
            'heavy intensity rain': 'rain.png',
            'very heavy rain': 'rain.png',
            'extreme rain': 'rain.png',
            'freezing rain': 'snow.png',
            'light intensity shower rain': 'shower_rain.png',
            'shower rain': 'shower_rain.png',
            'heavy intensity shower rain': 'shower_rain.png',
            'ragged shower rain': 'shower_rain.png',
            'thunderstorm with light rain': 'thunderstorm.png',
            'thunderstorm with rain': 'thunderstorm.png',
            'thunderstorm with heavy rain': 'thunderstorm.png',
            'light thunderstorm': 'thunderstorm.png',
            'thunderstorm': 'thunderstorm.png',
            'heavy thunderstorm': 'thunderstorm.png',
            'ragged thunderstorm': 'thunderstorm.png',
            'thunderstorm with light drizzle': 'thunderstorm.png',
            'thunderstorm with drizzle': 'thunderstorm.png',
            'thunderstorm with heavy drizzle': 'thunderstorm.png',
            'light snow': 'snow.png',
            'snow': 'snow.png',
            'heavy snow': 'snow.png',
            'sleet': 'snow.png',
            'light shower sleet': 'snow.png',
            'shower sleet': 'snow.png',
            'light rain and snow': 'snow.png',
            'rain and snow': 'snow.png',
            'light shower snow': 'snow.png',
            'shower snow': 'snow.png',
            'heavy shower snow': 'snow.png',
            'mist': 'mist.png',
            'smoke': 'mist.png',
            'haze': 'mist.png',
            'sand/dust whirls': 'mist.png',
            'fog': 'mist.png',
            'sand': 'mist.png',
            'dust': 'mist.png',
            'volcanic ash': 'mist.png',
            'squalls': 'mist.png',
            'tornado': 'mist.png',
            // Add more mappings as needed
        };
        console.log(`Weather description: ${description}`); // Log the weather description to check if it's correct
        return descriptionMap[description.toLowerCase()] || 'default.png'; // default.png for any unmapped description
    };

    return (
        <div>
            <h5>Dashboard</h5>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>
                        <div className="city-info">
                            <img
                                className="weather-icon"
                                src={`${process.env.PUBLIC_URL}/icons/${getCustomIcon(city.description)}`}
                                alt={city.description}
                                onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/icons/default.png`; }} // Fallback to default image
                            />
                            <span className="city-name">{city.name}</span>
                            <span className="city-temp">{city.temp}°C</span>
                            <span className="city-description">{city.description}</span>
                        </div>
                        <button className="remove-button" onClick={() => onRemoveCity(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
