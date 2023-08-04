import { useState } from 'react'
import InputForm from './components/InputForm'
import Weather from './components/Weather'

import openWeatherService from './services/weatherService'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [weather, setWeather] = useState({})

  const getWeatherData = async (city) => {
    const locationGeo = await openWeatherService.getLocationGeo(city)
    const weatherData = await openWeatherService.getWeather(locationGeo[0].lat, locationGeo[0].lon)

    console.log(weatherData)
  }

  return (
    <div>
      <InputForm getWeatherData={getWeatherData} />
      <Weather />
    </div>
  )
}

export default App
