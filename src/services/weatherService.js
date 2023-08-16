import axios from 'axios'

const openWeatherGeo = 'https://api.openweathermap.org/geo/1.0/direct'
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

export const getLocationGeo = async (city) => {
  const req = await axios.get(`${openWeatherGeo}?q=${city}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
  return req.data
}

export const getOpenWeatherData = async (lat, lon) => {
  const req = await axios.get(`${openWeatherUrl}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
  return req.data
}
