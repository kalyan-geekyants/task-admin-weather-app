import { WiHumidity, WiStrongWind } from 'weather-icons-react'

interface HumidityWindSpeedProps {
  humidity: number
  windSpeed: number
}

function HumidityWindSpeed({ humidity, windSpeed }: HumidityWindSpeedProps) {
  return (
    <div className='humidity-windspeed-container'>
      <div className='humidity'>
        <WiHumidity size={60} color='#fff' />
        <div className='details pl-1 pt-2'>
          <h3 className='xs:text-xl sm:text-2xl md:text-3xl'>{humidity}%</h3>
          <p>Humidity</p>
        </div>
      </div>
      <div className='windspeed'>
        <WiStrongWind size={60} color='#fff' />
        <div className='details pl-2 pt-2'>
          <h3 className='xs:text-xl sm:text-2xl md:text-3xl'>{windSpeed} km/h</h3>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  )
}

export default HumidityWindSpeed
