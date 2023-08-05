/* eslint-disable no-unused-vars */
import InputForm from './components/InputForm'
import Weather from './components/Weather'
import History from './components/History'
import useWeatherData from './hooks/useWeatherData'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import useMediaQuery from '@mui/material/useMediaQuery'

// MUI dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const { isLoading, geo, weather, history, error, errorMessage, getWeatherData, removeFromHistory, removeAlert } =
    useWeatherData()
  const isMiddleView = useMediaQuery('(max-width: 894px)')

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ width: '100%', maxWidth: 'none', display: 'flex', flexDirection: 'column' }}>
        {error && (
          <Box p={2} flex={1} marginTop={isMiddleView ? 0 : '0.5rem'} width={'100%'}>
            <Alert severity="error" onClose={removeAlert}>
              {errorMessage}
            </Alert>
          </Box>
        )}
        <Box p={2} flex={1} marginTop={isMiddleView ? 0 : '0.5rem'}>
          <InputForm onGetWeatherData={getWeatherData} />
        </Box>
        {(Object.keys(weather).length !== 0 || history.length > 0) && (
          <Box
            p={isMiddleView ? 2 : 4}
            sx={{ marginTop: '1rem', backgroundColor: 'rgba(40, 18, 77, 0.5)', flex: 1, borderRadius: '20px' }}
          >
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Weather geo={geo} weather={weather} />
                <History history={history} onGetWeatherData={getWeatherData} onItemDelete={removeFromHistory} />
              </>
            )}
          </Box>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
