import React from 'react';

const Weather = () => {

    const data = { temperature: 25, conditions: "Sunny" };
    const tempColor = data.temperature > 20 ? 'red' : 'blue';

    return (
        <div className='weather-container'>
            <h2>Weather Report</h2>
            <p>Temperature: <span style={{color:tempColor}}>{data.temperature}</span></p>
            <p>Conditions: {data.conditions}</p>
        </div>
    )
}


export default Weather;
