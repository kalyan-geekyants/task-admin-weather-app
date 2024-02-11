import React, { useState } from 'react'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'
import HumidityWindSpeed from './HumidityWindSpeed'
import Loading from './Loading'
import Error from './Error'
import { ErrorData } from '@/types'
import { WeatherIcon } from './WeatherIcon'
import ForecastWidget from './ForecastWidget'
import { convertForcastDataToDaily } from '@/utils'

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [isCelcius, setIsCelcius] = useState<boolean>(true)
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
  const [error, setError] = useState<ErrorData | null>(null)

  const getWeather = async (city: string) => {
    if (!navigator.onLine) {
      setError({ message: 'No internet connection', errorType: 'internet' })
      setIsLoadingData(false)
      return
    }

    try {
      const cityWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`,
      )
      const cityWeatherData = await cityWeatherResponse.json()

      if (cityWeatherData?.cod === '404') {
        setError({ message: cityWeatherData?.message, errorType: 'city' })
      } else {
        const cityForecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`,
        )
        const cityForecaseData = await cityForecastResponse.json()
        const forecastDataToDaily = convertForcastDataToDaily(cityForecaseData?.list)
        setWeatherData(cityWeatherData)
        setForecastData(forecastDataToDaily as any)
      }
    } catch (e) {
      console.error(e);
      setError({ message: 'Something went wrong', errorType: 'server' })
    } finally {
      setIsLoadingData(false)
    }
  }

  const clearData = () => {
    setWeatherData(null)
    setForecastData(null)
    setError(null)
  }

  const onClickSearchBar = (city: string) => {
    clearData()
    setIsLoadingData(true)
    getWeather(city)
  }

  return (
    <div className='container'>
      <div className='weather_widget_container'>
        <SearchBar getWeather={onClickSearchBar} isLoadingData={isLoadingData} />
        {isLoadingData && <Loading />}
        {!!error && !isLoadingData && <Error error={error} />}
        {!!weatherData && !isLoadingData && (
          <>
            <div>
              <WeatherDetails isCelcius={isCelcius} setIsCelcius={setIsCelcius} data={weatherData} />
            </div>
            {/* @ts-ignore */}
            <HumidityWindSpeed humidity={weatherData?.main?.humidity} windSpeed={weatherData?.wind?.speed} />
          </>
        )}
      </div>
      {forecastData &&
        !isLoadingData &&
        Object.keys(forecastData)?.map((date: string, currentIndex) => (
          <ForecastWidget
            date={date}
            forecastData={forecastData}
            key={date}
            dateIndex={currentIndex}
            isCelcius={isCelcius}
          />
        ))}
    </div>
  )
}

export default WeatherWidget
