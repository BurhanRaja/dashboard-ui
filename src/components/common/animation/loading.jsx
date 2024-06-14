import React from 'react'
import { FaCircle } from "react-icons/fa";

const Loading = () => {
  return (
    <>
        <span className='grid grid-cols-3 gap-1 text-white'>
        <FaCircle className='text-[0.4rem] animate-bounce' />
        <FaCircle className='text-[0.4rem] animate-bounce delay-100' />
        <FaCircle className='text-[0.4rem] animate-bounce delay-200' />
        </span>
    </>
  )
}

export default Loading