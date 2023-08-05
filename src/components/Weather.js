import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { temperatureFormat, timeFormat } from '../utils/dataFormat'

const Weather = ({ geo, weather }) => {
  return (
    <>
      {Object.keys(weather).length !== 0 && Object.keys(geo).length !== 0 && (
        <Box sx={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" display="block" gutterBottom>
              Today's Weather
            </Typography>
          </div>
          <Typography variant="h1" gutterBottom display={'flex'} alignItems={'center'}>
            {temperatureFormat(weather.main.temp)}{' '}
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
          </Typography>
          <Typography variant="h6" display="inline-block" gutterBottom marginRight={'5px'}>
            H: {temperatureFormat(weather.main.temp_max)}
          </Typography>
          <Typography variant="h6" display="inline-block" gutterBottom>
            L: {temperatureFormat(weather.main.temp_min)}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" gutterBottom marginRight={'5px'}>
              {geo.name}, {geo.country}
            </Typography>
            <Typography variant="h6" gutterBottom marginRight={'5px'}>
              {timeFormat(weather.dt)}
            </Typography>
            <Typography variant="h6" gutterBottom marginRight={'5px'}>
              Humidity: {weather.main.humidity}%
            </Typography>
            <Typography variant="h6" gutterBottom marginRight={'5px'}>
              {weather.weather[0].main}
            </Typography>
          </div>
        </Box>
      )}
    </>
  )
}

export default Weather
