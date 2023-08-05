import { temperatureFormat, timeFormat } from '../utils/dataFormat'

const Weather = ({ geo, weather }) => {
  return (
    <>
      {Object.keys(weather).length !== 0 && Object.keys(geo).length !== 0 && (
        <>
          <h2>WeatherData</h2>
          <h3>
            {geo.name}, {geo.country}
          </h3>
          <h3>{weather.weather[0].main}</h3>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
          <p>{weather.weather[0].description}</p>
          <p>
            {temperatureFormat(weather.main.temp_min)} ~ {temperatureFormat(weather.main.temp_max)}
          </p>
          <p>{weather.main.humidity}%</p>
          <p>{timeFormat(weather.dt)}</p>
        </>
      )}
    </>
  )
}

export default Weather
