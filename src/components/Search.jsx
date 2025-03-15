import React from 'react'

const Search = ({userInput, setUserInput, setCity}) => {
  return (
    <div className='Search-container'>
      <h1 className='MainHeader'>Weather App</h1>
      <img src='/src/assets/weather.png' alt='weather icon' id="WeatherPicture"></img>

      <h2 className='searchNavHeader'>Find Weather of a City</h2>
      <div>
      <label htmlFor='city-name' className='labelSearch'>
          <input 
            id='city-name'
            className='SearchNav'
            name='cityName'
            placeholder='City'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
        />
      </label>
      <button className="SearchWeatherButton" onClick={() => {setCity(userInput)}}>Search</button>
   </div>

    </div>
  )
}

export default Search