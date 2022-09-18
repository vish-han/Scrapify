import React from 'react'
import banner from "../assets/heroBanner.jpg";
const Card = ({pic,rewName}) => {
  return (
    <>
    <div class="max-w-sm rounded overflow-hidden shadow-lg border-green-400 border pt-2">
  <img class="w-60  " src={pic} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">{rewName}</div>
 
  </div>

</div>
    </>
  )
}

export default Card