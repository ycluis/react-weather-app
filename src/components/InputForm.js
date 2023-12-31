import { useState } from 'react'
import { TextField, Paper, Box, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const InputForm = ({ onGetWeatherData }) => {
  const [city, setCity] = useState('')

  const getWeather = () => {
    if (city.trim() !== '') {
      onGetWeatherData(city)
      setCity('')
    }
  }

  const handleEnterSubmit = (e) => {
    if (e.key === 'Enter') {
      onGetWeatherData(city)
      setCity('')
    }
  }

  return (
    <Box display={'flex'}>
      <Paper
        elevation={3}
        sx={{
          flexGrow: 1,
          backgroundColor: 'rgba(40, 18, 77, 1)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          label="City"
          variant="filled"
          type="text"
          name="city"
          value={city}
          fullWidth
          onKeyDown={handleEnterSubmit}
          InputProps={{
            sx: {
              backgroundColor: 'rgba(40, 18, 77, 1)',
              color: '#ffffff',
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
  )
}

export default InputForm
