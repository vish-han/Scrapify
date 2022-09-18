import React from 'react'
import Card from '../components/Card'

const DOD = () => {
  return (

    <div className='flex flex-col box content-center justify-center'>
        <h1 className='text-center m-9 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Price List</h1>
<div className='flex flex-row box  justify-between mb-5 mt-3 flex-wrap'>

<Card pic="https://cdn-icons-png.flaticon.com/512/1504/1504097.png" rewName="Iron: Rs. 250/Kg" />
<Card  pic="https://cdn-icons-png.flaticon.com/512/911/911409.png" rewName="AC: Rs. 3000/Body"/>
<Card pic="https://cdn-icons-png.flaticon.com/512/2603/2603741.png" rewName="Furniture: Rs.2000/Body"/>

</div>
<div className='flex flex-row box  justify-between flex-wrap'>

<Card pic="https://cdn-icons-png.flaticon.com/512/5752/5752804.png" rewName="Copper: Rs. 220/Kg"/>
<Card pic="https://cdn-icons-png.flaticon.com/512/4038/4038710.png" rewName="Aluminum: Rs. 300/Kg"/>
<Card pic="https://cdn-icons-png.flaticon.com/512/3389/3389081.png" rewName="Books and Paper: Rs. 25/Kg"/>

</div>
    </div>
  )
}

export default DOD