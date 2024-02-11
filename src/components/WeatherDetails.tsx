import React from 'react'
import Toggler from './Toggler'
import { WeatherIcon } from './WeatherIcon'
import { convertCelciusToFahrenheit, convertToDayAndTime, toCamelCase } from '@/utils'

const WeatherDetails = ({
  isCelcius,
  setIsCelcius,
  data,
}: {
  isCelcius: boolean
  setIsCelcius: (value: boolean) => void
  data: any
}) => {
  return (
    <div className='weather-details'>
      <WeatherIcon weatherIcon={data?.weather[0]?.icon} dataType='today' />
      <div className='flex flex-row align-center'>
        <h1 className='celsius-foreignheat'>
          {isCelcius ? `${data?.main?.temp}°C` : `${convertCelciusToFahrenheit(data?.main?.temp)}°F`}
        </h1>
        <div className='toggle_container'>
          <Toggler isCelcius={isCelcius} setIsCelcius={setIsCelcius} />
        </div>
      </div>
      <h3 className='city-name'>{data?.name}</h3>
      <p className='weather-status'>{toCamelCase(data?.weather[0]?.description)}</p>
      <p className='day-time'>{data?.dt ? convertToDayAndTime(data?.dt) : null}</p>
    </div>
  )
}

export default WeatherDetails
