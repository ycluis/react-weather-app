## React Weather App
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)<br />

This Weather App is a simple React application that allows users to input a city name and retrieve the current weather data using the [OpenWeather API](https://openweathermap.org/api). It also displays a list of search history for the previously searched cities.

### Features

- User-friendly interface for entering the city name and searching for weather data.
- Real-time data retrieval from the OpenWeather API for the current weather conditions.
- Display of temperature, weather icon, humidity, and other relevant weather information.
- Search history functionality that saves the previously searched cities.
- Ability to delete individual search history items.

### Live Demo
Check out the live demo of the Weather App [here](https://idyllic-pie-7be2c7.netlify.app/).

### Getting Started

To run the Weather App locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/ycluis/react-weather-app.git
```

2. Navigate to the project directory:

```bash
cd react-weather-app
```

3. Install the dependencies:

```bash
npm install
```

4. Obtain an API key from OpenWeather API by signing up on their website: https://openweathermap.org/api

5. Rename the `.env.sample` to `.env` in the root of the project and add your API key:

```plaintext
REACT_APP_API_KEY=your_openweather_api_key
```

6. Start the development server:

```bash
npm start
```

7. The application will be running at `http://localhost:3000`.