const HistoryItem = ({ item, handleItemDelete, getWeatherData }) => {
  return (
    <li>
      <div>
        {item.city},{item.country} ---- {item.time}
        <button onClick={() => getWeatherData(item.city)}>Search</button>
        <button onClick={() => handleItemDelete(item.id)}>Delete</button>
      </div>
    </li>
  )
}

export default HistoryItem
