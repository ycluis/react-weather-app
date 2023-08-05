/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { nanoid } from 'nanoid'
import InputForm from './components/InputForm'
import Weather from './components/Weather'
import History from './components/History'

import openWeatherService from './services/weatherService'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

// MUI dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container fixed style={{ display: 'flex', flexDirection: 'column' }}>
        <Box p={4} style={{ margin: '1rem', flex: 1 }}>
          <InputForm onGetWeatherData={getWeatherData} />
        </Box>
        {history.length > 0 && (
          <Box
            p={4}
            style={{ margin: '1rem', backgroundColor: 'rgba(40, 18, 77, 0.5)', flex: 1, borderRadius: '20px' }}
          >
            <Weather geo={geo} weather={weather} />
            {/* <History history={history} onGetWeatherData={getWeatherData} onItemDelete={handleHistoryItemDelete} /> */}
          </Box>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
