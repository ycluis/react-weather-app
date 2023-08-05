import { useState } from 'react'
import { TextField, Button, Paper } from '@mui/material'
import Box from '@mui/material/Box'
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
          sx={{
            flexGrow: 1,
            backgroundColor: 'rgba(40, 18, 77, 1)',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            marginRight: '1rem',
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

        <Button
          startIcon={<SearchOutlinedIcon />}
          onClick={getWeather}
          sx={{
            px: 2,
            backgroundColor: 'rgba(40, 18, 77, 1)',
            color: '#ffffff',
            borderRadius: '20px',
          }}
        >
          Search
        </Button>
      </Box>
    </>
  )
}

export default InputForm
