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
            {`${(weather.main.temp_min - 273.15).toFixed(2)}\u00B0C`} ~{' '}
            {`${(weather.main.temp_max - 273.15).toFixed(2)}\u00B0C`}
          </p>
          <p>{weather.main.humidity}%</p>
          <p>
            {new Date(1691201759 * 1000)
              .toLocaleString([], {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })
              .replaceAll('/', '-')
              .replaceAll(',', '')}
          </p>
        </>
      )}
    </>
  )
}

export default Weather

// weather[0].main
// weather[0].description
// main.tempmin & main.tempmax
// main.huminity
// dt
