import { useState } from 'react'
import { nanoid } from 'nanoid'
import { getLocationGeo, getOpenWeatherData } from '../services/weatherService'

const useWeatherData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [geo, setGeo] = useState({})
  const [weather, setWeather] = useState({})
  const [history, setHistory] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const validateInput = (data) => {
    const regex = /[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/
    return regex.test(data)
  }

  const getWeatherData = async (city) => {
    setIsLoading(true)

    if (validateInput(city)) {
      setError(true)
      setErrorMessage(`Invalid input`)
    } else {
      try {
        const [locationGeo] = await getLocationGeo(city)
        const weatherData = await getOpenWeatherData(locationGeo.lat, locationGeo.lon)

        setGeo(locationGeo)
        setWeather(weatherData)

        // append to history
        addToHistory(locationGeo, weatherData)

        setError(false)
        setErrorMessage('')
      } catch (err) {
        setError(true)
        setErrorMessage(`Invalid input`)
        console.log(err)
      }
    }

    setIsLoading(false)
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

  const clearAllHistory = () => {
    setHistory([])
  }

  const removeAlert = () => {
    setError(false)
    setErrorMessage('')
  }

  return {
    isLoading,
    geo,
    weather,
    history,
    error,
    errorMessage,
    getWeatherData,
    removeFromHistory,
    clearAllHistory,
    removeAlert,
  }
}

export default useWeatherData
