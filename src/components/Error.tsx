import { ErrorData } from '@/types'
import React from 'react'
import { BiSolidError } from 'react-icons/bi'
import { RiSignalWifiErrorFill } from 'react-icons/ri'

function Error({ error }: { error: ErrorData | null }) {
  return (
   <div className='flex justify-center items-center h-screen relative'>
     <div className='sm:text-xl md:text-2xl absolute inset-0 flex flex-col justify-center items-center'>
      {error?.errorType === 'internet' && <RiSignalWifiErrorFill className='text-white-500' fontSize={80} />}
      {error?.errorType === 'city' && <BiSolidError className='text-yellow-500' fontSize={80} />}
      <div className='pt-4'>{error?.message}</div>
    </div>
   </div>
  )
}

export default Error
