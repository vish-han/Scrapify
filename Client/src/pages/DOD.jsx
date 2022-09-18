import React from 'react'
import Card from '../components/Card'

const DOD = () => {
  return (
    <div className='flex flex-col box content-center justify-center'>
        <h1 className='text-center m-9 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Deal of the Day</h1>
<div className='flex flex-row box  justify-between mb-5 mt-3 flex-wrap'>

<Card pic="" rewName="Iron: Rs " />
<Card/>
<Card/>

</div>
<div className='flex flex-row box  justify-between flex-wrap'>

<Card/>
<Card/>
<Card/>

</div>
    </div>
  )
}

export default DOD