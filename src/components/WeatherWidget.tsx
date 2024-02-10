import React, { useState } from 'react'
import SearchBar from './SearchBar'
import WeatherDetails from './WeatherDetails'
import HumidityWindSpeed from './HumidityWindSpeed'
import Loading from './Loading'
import Error from './Error'
import { ErrorData } from '@/types'

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [isCelcius, setIsCelcius] = useState<boolean>(true)
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
  const [error, setError] = useState<ErrorData | null>(null)

  const getWeather = async (city: string) => {
    // weather
    // forecast
    if (!navigator.onLine) {
      setError({ message: 'No internet connection', errorType: 'internet' })
      setIsLoadingData(false)
      return
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`,
      )
      const data = await response.json()

      if (data?.cod === '404') {
        setError({ message: data?.message, errorType: 'city' })
        setIsLoadingData(false)
      } else {
        setWeatherData(data)
      }
    } catch (e) {
      console.log(e)
      setError({ message: 'Server error', errorType: 'server' })
    } finally {
      setIsLoadingData(false)
    }
  }

  const onClickSearchBar = (city: string) => {
    setWeatherData(null)
    setError(null)
    setIsLoadingData(true)
    getWeather(city)
  }

  return (
    <div className='container'>
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
  )
}

export default WeatherWidget
