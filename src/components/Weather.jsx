const Weather = ( { data, resetData } ) => {
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const convertUnix = (timestamp) => {
    const ts = new Date(timestamp * 1000);
    const hh = ts.getHours().toString().padEnd(2, '0');
    const mm = ts.getMinutes().toString().padEnd(2, '0');
    return `${hh}:${mm}`
  }

  const roundTemperature = (temp) => {
    return Math.round(temp); 
  }

  const capitalizeDescription = (description) => {
    return description
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' ');
  };

  return (
    <div className="Weather-Container">
      <div id='TempInfo'>
        <div id='temp'>
          <h3 id="temp">{roundTemperature(data.main.temp)}°F | {capitalizeDescription(data.weather[0].description)}</h3>
          {/* <h3 id='temp-desc'>{data.weather[0].description}</h3> */}
          {data.weather.icon}
          <img src={iconUrl} alt='Weather Icon' id="Weather-Icon"/>
        </div>
        <div id='City'>
          <h2>{data.name}, {data.sys.country}</h2>
        </div>
      </div>
      <div>
          <h3 id="WeatherD">
            Weather Details
          </h3>
        </div>
      <div id='Weather-details'>
        
        <div>
          <p className="Temp-Details"> Time {convertUnix(data.dt)}</p>
         <img src="/src/assets/clock.png" alt="clock-icon" className="Weather-Details-pictures"></img>
        </div>
        <div>
          <p className="Temp-Details">Humidity {data.main.humidity} %</p>
          <img src="/src/assets/humidity.png" alt="humidity-icon" className="Weather-Details-pictures"></img>
        </div>
        <div>
          <p className="Temp-Details">Wind Speed {data.wind.speed}</p>
          <img src="/src/assets/windy.png" alt="wind-icon" className="Weather-Details-pictures"></img>
        </div>
        <div>
          <p className="Temp-Details">Pressure: {data.main.pressure}</p> 
          <img src="/src/assets/chart.png" alt="Pressure-icon" className="Weather-Details-pictures"></img>
        </div>
        </div>
        <div>
         {/* bonus button */}
         <button id="ResetWeatherButton" onClick={resetData}>Reset</button>
        </div>
     
    </div>
  )
}

export default Weather;