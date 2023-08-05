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
import CircularProgress from '@mui/material/CircularProgress'
import useMediaQuery from '@mui/material/useMediaQuery'

// MUI dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [geo, setGeo] = useState({})
  const [weather, setWeather] = useState({})
  const [history, setHistory] = useState([])

  const getWeatherData = async (city) => {
    try {
      setIsLoading(true)
      const [locationGeo] = await openWeatherService.getLocationGeo(city)
      const weatherData = await openWeatherService.getWeatherData(locationGeo.lat, locationGeo.lon)

      setGeo(locationGeo)
      setWeather(weatherData)
      setHistory([
        ...history,
        { id: nanoid(), city: locationGeo.name, country: locationGeo.country, time: weatherData.dt },
      ])

      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleHistoryItemDelete = (id) => {
    setHistory(history.filter((item) => item.id !== id))
  }

  const isMobileView = useMediaQuery('(max-width: 894px)')

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ width: '100%', maxWidth: 'none', display: 'flex', flexDirection: 'column' }}>
        <Box p={2} flex={1} marginTop={isMobileView ? 0 : '0.5rem'}>
          <InputForm onGetWeatherData={getWeatherData} />
        </Box>
        {(Object.keys(weather).length !== 0 || history.length > 0) && (
          <Box
            p={isMobileView ? 2 : 4}
            sx={{ marginTop: '1rem', backgroundColor: 'rgba(40, 18, 77, 0.5)', flex: 1, borderRadius: '20px' }}
          >
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Weather geo={geo} weather={weather} />
                <History history={history} onGetWeatherData={getWeatherData} onItemDelete={handleHistoryItemDelete} />
              </>
            )}
          </Box>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
