import React from 'react'
import Card from '../components/Card'
const Rewards = () => {
  return (
    <>    <div className='flex flex-col box  item-center justify-center'>
    <h1 className='text-center m-9 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Your Rewards 🎁</h1>
<div className='flex flex-row box  justify-between mb-5 mt-3 flex-wrap gap-10'>

<Card pic="https://cdn-icons-png.flaticon.com/512/3176/3176294.png" rewName="Enviroment Hero"/>
<Card pic="https://cdn-icons-png.flaticon.com/512/2543/2543351.png" rewName="Recycling Geek"></Card>
<Card pic="https://cdn-icons-png.flaticon.com/512/2543/2543351.png" rewName="Recycling Geek"></Card>
<Card pic="https://cdn-icons-png.flaticon.com/512/2282/2282531.png" rewName="Enviroment Saviour"/>
<Card pic="https://cdn-icons-png.flaticon.com/512/2543/2543351.png" rewName="Recycling Geek"></Card>
<Card pic="https://cdn-icons-png.flaticon.com/512/2282/2282531.png" rewName="Recycling Geek"></Card> 


</div>
</div>
    </>
  )
}

export default Rewards  