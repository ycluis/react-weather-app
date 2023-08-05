import { useState } from 'react'
import { TextField, Paper } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const InputForm = ({ onGetWeatherData }) => {
  const [city, setCity] = useState('')

  const getWeather = () => {
    if (city) {
      onGetWeatherData(city)
      setCity('')
    }
  }

  return (
    <>
      <Box display={'flex'}>
        <Paper
          elevation={3}
          // marginRight={isMobileView ? '10px' : '1rem'}
          sx={{
            flexGrow: 1,
            backgroundColor: 'rgba(40, 18, 77, 1)',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
          }}
        >
          <TextField
            label="City"
            variant="outlined"
            type="text"
            name="city"
            value={city}
            fullWidth
            InputProps={{
              sx: {
                color: '#ffffff',
                borderRadius: '20px',
              },
            }}
            onChange={(e) => setCity(e.target.value)}
          />
        </Paper>

        <IconButton
          aria-label="search"
          onClick={getWeather}
          style={{ margin: '0 1rem' }}
          size="small"
          sx={{
            px: 2,
            backgroundColor: 'rgba(40, 18, 77, 1)',
            color: '#ffffff',
            borderRadius: '20px',
          }}
        >
          <SearchOutlinedIcon />
        </IconButton>
      </Box>
    </>
  )
}

export default InputForm
