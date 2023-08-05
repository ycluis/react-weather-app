import { timeFormat } from '../utils/dataFormat'

const HistoryItem = ({ history, onGetWeatherData, onItemDelete }) => {
  return (
    <li>
      <div>
        {history.city},{history.country} ---- {timeFormat(history.time)}
        <button onClick={() => onGetWeatherData(history.city)}>Search</button>
        <button onClick={() => onItemDelete(history.id)}>Delete</button>
      </div>
    </li>
  )
}

export default HistoryItem
