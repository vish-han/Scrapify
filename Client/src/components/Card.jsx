import React from 'react'
import banner from "../assets/heroBanner.jpg";
const Card = () => {
  return (
    <>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={banner} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>

</div>
    </>
  )
}

export default Card