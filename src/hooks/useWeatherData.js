import { useState } from 'react'
import { nanoid } from 'nanoid'
import openWeatherService from '../services/weatherService'

const useWeatherData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [geo, setGeo] = useState({})
  const [weather, setWeather] = useState({})
  const [history, setHistory] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const getWeatherData = async (city) => {
    try {
      setIsLoading(true)
      const [locationGeo] = await openWeatherService.getLocationGeo(city)
      const weatherData = await openWeatherService.getWeatherData(locationGeo.lat, locationGeo.lon)

      setGeo(locationGeo)
      setWeather(weatherData)

      // append to history
      addToHistory(locationGeo, weatherData)

      setError(false)
      setErrorMessage('')
      setIsLoading(false)
    } catch (err) {
      setError(true)
      setErrorMessage(`Invalid input`)
      console.log(err)
      setIsLoading(false)
    }
  }

  const addToHistory = (locationGeo, weatherData) => {
    setHistory((prevHistory) => [
      ...prevHistory,
      { id: nanoid(), city: locationGeo.name, country: locationGeo.country, time: weatherData.dt },
    ])
  }

  const removeFromHistory = (id) => {
    setHistory((prevHistory) => prevHistory.filter((item) => item.id !== id))
  }

  const removeAlert = () => {
    setError(false)
    setErrorMessage('')
  }

  return { isLoading, geo, weather, history, error, errorMessage, getWeatherData, removeFromHistory, removeAlert }
}

export default useWeatherData
