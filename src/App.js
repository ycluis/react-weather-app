import { useState } from 'react'
import { nanoid } from 'nanoid'
import InputForm from './components/InputForm'
import Weather from './components/Weather'
import History from './components/History'

import openWeatherService from './services/weatherService'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [geo, setGeo] = useState({})
  const [weather, setWeather] = useState({})
  const [history, setHistory] = useState([])

  const getWeatherData = async (city) => {
    const locationGeo = await openWeatherService.getLocationGeo(city)
    const weatherData = await openWeatherService.getWeather(locationGeo[0].lat, locationGeo[0].lon)

    setGeo(locationGeo[0])
    setWeather(weatherData)
    setHistory([
      ...history,
      { id: nanoid(), city: locationGeo[0].name, country: locationGeo[0].country, time: weatherData.dt },
    ])
  }

  const handleItemDelete = (id) => {
    setHistory(history.filter((item) => item.id !== id))
  }

  return (
    <div>
      <InputForm getWeatherData={getWeatherData} />
      <Weather geo={geo} weather={weather} />
      <History history={history} handleItemDelete={handleItemDelete} getWeatherData={getWeatherData} />
    </div>
  )
}

export default App
