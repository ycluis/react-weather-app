import { useState } from 'react'
import { nanoid } from 'nanoid'
import InputForm from './components/InputForm'
import Weather from './components/Weather'
import History from './components/History'

import openWeatherService from './services/weatherService'

function App() {
  const [geo, setGeo] = useState({})
  const [weather, setWeather] = useState({})
  const [history, setHistory] = useState([])

  const getWeatherData = async (city) => {
    try {
      const [locationGeo] = await openWeatherService.getLocationGeo(city)
      const weatherData = await openWeatherService.getWeatherData(locationGeo.lat, locationGeo.lon)

      setGeo(locationGeo)
      setWeather(weatherData)
      setHistory([
        ...history,
        { id: nanoid(), city: locationGeo.name, country: locationGeo.country, time: weatherData.dt },
      ])
    } catch (err) {
      console.log(err)
    }
  }

  const handleHistoryItemDelete = (id) => {
    setHistory(history.filter((item) => item.id !== id))
  }

  return (
    <div>
      <InputForm onGetWeatherData={getWeatherData} />
      <Weather geo={geo} weather={weather} />
      <History history={history} onGetWeatherData={getWeatherData} onItemDelete={handleHistoryItemDelete} />
    </div>
  )
}

export default App
