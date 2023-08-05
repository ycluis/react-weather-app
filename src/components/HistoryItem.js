import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import useMediaQuery from '@mui/material/useMediaQuery'

import { timeFormat } from '../utils/dataFormat'

const HistoryItem = ({ history, onGetWeatherData, onItemDelete }) => {
  const isMobileView = useMediaQuery('(max-width: 894px)')
  // const isSmallView = useMediaQuery('(max-width: 480px)')

  return (
    <li>
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgba(40, 18, 77, 0.5)',
          padding: '0.75rem',
          marginTop: '1rem',
          borderRadius: '15px',
        }}
      >
        {isMobileView ? (
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                {history.city}, {history.country}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {timeFormat(history.time)}
              </Typography>
            </Box>
            <Box>
              <IconButton
                aria-label="search"
                onClick={() => onGetWeatherData(history.city)}
                style={{ margin: '0 5px' }}
                size="small"
                sx={{
                  backgroundColor: 'rgba(40, 18, 77, 1)',
                  color: '#ffffff',
                  border: '1px solid #ffffff',
                }}
              >
                <SearchRoundedIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => onItemDelete(history.id)}
                size="small"
                sx={{
                  backgroundColor: 'rgba(40, 18, 77, 1)',
                  color: '#ffffff',
                  border: '1px solid #ffffff',
                }}
              >
                <DeleteRoundedIcon />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" display="inline-block" gutterBottom>
              {history.city}, {history.country}
            </Typography>
            <div>
              <Typography variant="h6" display="inline-block" gutterBottom>
                {timeFormat(history.time)}
              </Typography>
              <IconButton
                aria-label="search"
                onClick={() => onGetWeatherData(history.city)}
                style={{ margin: '0 1rem' }}
                size="small"
                sx={{
                  backgroundColor: 'rgba(40, 18, 77, 1)',
                  color: '#ffffff',
                  border: '1px solid #ffffff',
                }}
              >
                <SearchRoundedIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => onItemDelete(history.id)}
                size="small"
                sx={{
                  backgroundColor: 'rgba(40, 18, 77, 1)',
                  color: '#ffffff',
                  border: '1px solid #ffffff',
                }}
              >
                <DeleteRoundedIcon />
              </IconButton>
            </div>
          </Box>
        )}
      </Box>
    </li>
  )
}

export default HistoryItem
