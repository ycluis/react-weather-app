import HistoryItem from './HistoryItem'

const History = ({ history, handleItemDelete, getWeatherData }) => {
  const reverseArr = history.slice(0).reverse()

  return (
    <ul>
      {reverseArr.map((item) => (
        <HistoryItem key={item.id} item={item} handleItemDelete={handleItemDelete} getWeatherData={getWeatherData} />
      ))}
    </ul>
  )
}

export default History
