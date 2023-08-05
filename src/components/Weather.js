import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { temperatureFormat, timeFormat } from '../utils/dataFormat'

const Weather = ({ geo, weather }) => {
  const isMobileView = useMediaQuery('(max-width: 894px)')
  const isSmallView = useMediaQuery('(max-width: 480px)')

  return (
    <>
      {Object.keys(weather).length !== 0 && Object.keys(geo).length !== 0 && (
        <Box sx={{ width: '100%' }}>
          <Typography variant="subtitle1">Today's Weather</Typography>

          <Typography
            variant={isSmallView ? 'h4' : 'h1'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={isMobileView ? 'space-between' : 'center'}
          >
            {temperatureFormat(weather.main.temp)}{' '}
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
          </Typography>
          <Typography variant="subtitle1" display="inline-block" marginRight={'5px'}>
            H: {temperatureFormat(weather.main.temp_max)}
          </Typography>
          <Typography variant="subtitle1" display="inline-block">
            L: {temperatureFormat(weather.main.temp_min)}
          </Typography>

          {isMobileView ? (
            <Box display="flex" justifyContent={'space-between'} flexDirection={'column'}>
              <Box>
                <Typography variant={isSmallView ? 'subtitle1' : 'h6'} gutterBottom marginRight={'5px'}>
                  {geo.name}, {geo.country}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  {timeFormat(weather.dt)}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Humidity: {weather.main.humidity}%
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {weather.weather[0].main}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box display="flex" justifyContent={'space-between'}>
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
            </Box>
          )}
        </Box>
      )}
    </>
  )
}

export default Weather
