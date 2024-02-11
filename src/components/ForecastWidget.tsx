import React from 'react'
import { WeatherIcon } from './WeatherIcon'
import { convertCelciusToFahrenheit, getTime } from '@/utils'

type Props = {
  date: string
  forecastData: any
  isCelcius: boolean
  dateIndex?: number
}

const ForecastWidget = ({ date, forecastData, dateIndex, isCelcius }: Props) => {
  return (
    <>
      <div className='weather_widget_container forecast' key={date}>
        <div className='text-center text-2xl mb-4'> {dateIndex === 0 ? 'Today' : date}</div>
        {/* @ts-ignore */}
        {forecastData[date] && 
          forecastData[date]?.map((data: any, index: number) => (
            <div key={index} className='flex justify-between items-center md:mx-0 md:my-1 sm:mx-0 sm:my-1 xs:mx-0 sm:my-1'>
              <div className='sm:text-xl'>{getTime(data?.dt)}</div>
              <WeatherIcon weatherIcon={data?.weather[0]?.icon} dataType='forecast' />
              <div className='sm:text-xl'>{isCelcius ? `${data?.main?.temp}°C` : `${convertCelciusToFahrenheit(data?.main?.temp)}°F`}</div>
            </div>
          ))}
      </div>
    </>
  )
}

export default ForecastWidget
