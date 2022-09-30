import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Success = () => {
  const { width, height } = useWindowSize()
  return (
    <>
    <Confetti
    width={width}
    height={height}
  />
    <div className='flex flex-col justify-center items-center m-12'>
        <img src="https://cdn-icons-png.flaticon.com/512/294/294432.png" alt=""  className='w-24'/>
        <h1 className='text-3xl'>Thanks for Chossing Scrapify</h1>

</div>
 </> )
}

export default Success