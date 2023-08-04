const InputForm = ({ getWeatherData }) => {
  const getWeather = (e) => {
    e.preventDefault()
    getWeatherData(e.target.city.value)
    e.target.city.value = ''
  }

  return (
    <>
      <h2>Today Weather</h2>
      <form onSubmit={getWeather}>
        <div>
          <input name="city" />
        </div>
        <button>submit</button>
      </form>
    </>
  )
}

export default InputForm
