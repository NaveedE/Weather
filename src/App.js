import React, { useState } from 'react';
import WeatherSearch from './components/WeatherSearch';
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => {
    const [cities, setCities] = useState([]);

    const addCity = (city) => {
        setCities([...cities, city]);
    };

    const removeCity = (index) => {
        const newCities = [...cities];
        newCities.splice(index, 1);
        setCities(newCities);
    };

    return (
        <div className="container">
            <h1 className="heading">WEATHER DASHBOARD</h1>
            <WeatherSearch onAddCity={addCity} />
            <Dashboard cities={cities} onRemoveCity={removeCity} />
        </div>
    );
};

export default App;
