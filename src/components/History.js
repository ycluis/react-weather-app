import HistoryItem from './HistoryItem'

const History = ({ history, onGetWeatherData, onItemDelete }) => {
  // create a shallow copy of the original history array and then reverse it to display history item in desc order
  const reverseHistoryArr = history.slice(0).reverse()

  return (
    <ul>
      {reverseHistoryArr.map((historyItem) => (
        <HistoryItem
          key={historyItem.id}
          history={historyItem}
          onGetWeatherData={onGetWeatherData}
          onItemDelete={onItemDelete}
        />
      ))}
    </ul>
  )
}

export default History
