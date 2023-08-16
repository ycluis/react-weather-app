import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HistoryItem from './HistoryItem'

const History = ({ history, onGetWeatherData, onItemDelete, onClearAllHistory }) => {
  // create a shallow copy of the original history array and then reverse it to display history item in desc order
  const reverseHistoryArr = history.slice(0).reverse()

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'rgba(40, 18, 77, 0.5)',
        padding: '1rem',
        marginTop: '25px',
        borderRadius: '15px',
      }}
    >
      <Box display="flex" justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="h6" display="inline-block" gutterBottom>
          Search History
        </Typography>
        {history.length > 0 && (
          <Button variant="outlined" color="error" style={{ marginLeft: '1rem' }} onClick={onClearAllHistory}>
            CLEAR ALL
          </Button>
        )}
      </Box>
      {history.length === 0 ? (
        <Typography variant="overline" display="block" gutterBottom>
          No previous weather history available.
        </Typography>
      ) : (
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          {reverseHistoryArr.map((historyItem) => (
            <HistoryItem
              key={historyItem.id}
              history={historyItem}
              onGetWeatherData={onGetWeatherData}
              onItemDelete={onItemDelete}
            />
          ))}
        </ul>
      )}
    </Box>
  )
}

export default History
