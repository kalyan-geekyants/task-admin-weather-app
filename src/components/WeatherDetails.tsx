import React from 'react'
import Toggler from './Toggler'
import { WeatherIcon } from './WeatherIcon'

const WeatherDetails = ({
  isCelcius,
  setIsCelcius,
  data,
}: {
  isCelcius: boolean
  setIsCelcius: (value: boolean) => void
  data: any
}) => {
  const convertToDayAndTime = (timestamp: number) => {
    // Convert to milliseconds by multiplying by 1000
    const date = new Date(timestamp * 1000)

    // Get day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayOfWeek = daysOfWeek[date.getDay()]

    // Get hours and minutes
    let hours: any = date.getHours()
    let minutes = date.getMinutes()

    // Convert hours to 12-hour format and determine am/pm
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ?? 12 // handle midnight (0 hours)

    // Add leading zero to minutes if necessary
    // @ts-ignore
    minutes = minutes < 10 ? '0' + minutes : minutes

    // Formatted date string
    return dayOfWeek + ', ' + hours + ':' + minutes + ' ' + ampm
  }

  const toCamelCase = (str: string) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className='weather-details'>
      <WeatherIcon weatherIcon={data?.weather[0]?.icon} />
      <div className='flex flex-row align-center'>
        <h1 className='celsius-foreignheat'>
          {isCelcius ? `${data?.main?.temp}°C` : `${(data?.main?.temp * (9 / 5) + 32).toFixed(2)}°F`}
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
