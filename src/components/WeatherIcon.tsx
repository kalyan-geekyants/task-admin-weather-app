import * as React from 'react'
import {
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiDaySunny,
  WiDayRainWind,
  WiHail,
  WiDayThunderstorm,
  WiDaySnow,
  WiFog,
} from 'weather-icons-react'

interface WeatherIconProps {
  weatherIcon: string
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherIcon: name }) => {
  const renderWeatherIcon = (icon: string) => {
    switch (icon) {
      case '01d':
      case '01n':
        return <WiDaySunny size={150} color='#fff' />
      case '02d':
      case '02n':
        return <WiDayCloudy size={150} color='#fff' />
      case '03d':
      case '03n':
        return <WiCloud size={150} color='#fff' />
      case '04d':
      case '04n':
        return <WiCloudy size={150} color='#fff' />
      case '09d':
      case '09n':
        return <WiHail size={150} color='#fff' />
      case '10d':
      case '10n':
        return <WiDayRainWind size={150} color='#fff' />
      case '11d':
      case '11n':
        return <WiDayThunderstorm size={150} color='#fff' />
      case '13d':
      case '13n':
        return <WiDaySnow size={150} color='#fff' />
      case '50d':
      case '50n':
        return <WiFog size={150} color='#fff' />
      default:
        return <WiDayCloudy size={150} color='#fff' />
    }
  }

  return <div>{renderWeatherIcon(name)}</div>
}
