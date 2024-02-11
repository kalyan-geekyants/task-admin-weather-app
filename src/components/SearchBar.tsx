import React from 'react'
import { LuSearch } from 'react-icons/lu'

function SearchBar({ getWeather, isLoadingData }: { getWeather: (city: string) => void; isLoadingData: boolean }) {
  const [city, setCity] = React.useState('')

  const handleOnChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    getWeather(city)
  }

  return (
    <form className='search_form' onSubmit={handleOnSubmit}>
      <input type='text' placeholder='Enter city..' name='city' onChange={handleOnChangeCity} required />
      <button type='submit' className='search_button'>
        <LuSearch />
      </button>
    </form>
  )
}

export default SearchBar
