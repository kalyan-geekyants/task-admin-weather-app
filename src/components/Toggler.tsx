import React from 'react'

function Toggler({ isCelcius, setIsCelcius }: { isCelcius: boolean; setIsCelcius: (value: boolean) => void }) {
  return (
    <label className='switch'>
      <input type='checkbox' checked={isCelcius} onChange={() => setIsCelcius(!isCelcius)} />
      <div className='slider round'>
        <span className='celsius'>°C</span>
        <span className='fahrenheit'>°F</span>
      </div>
    </label>
  )
}

export default Toggler
