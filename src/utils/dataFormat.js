export const temperatureFormat = (temperature) => {
  return `${(temperature - 273.15).toFixed(2)}\u00B0`
}

export const timeFormat = (time) => {
  const date = new Date(time * 1000) // Convert UNIX timestamp to milliseconds
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()

  // Add leading zeros
  month = month < 10 ? `0${month}` : month
  day = day < 10 ? `0${day}` : day
  minutes = minutes < 10 ? `0${minutes}` : minutes

  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12

  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`
}
