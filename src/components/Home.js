import React from 'react'
import Slider from './Slider'
import { IIT_ROPAR } from '../assets'
import { Boha_logo } from '../assets'
const Home = () => {
  return (
    <div id= "home" className='md:h-[100vh] w-full flex flex-col'>
      <Slider />
      <div className='flex mt-4 items-center justify-center'>
            <img src={Boha_logo} alt="" className='rounded-full h-[80px] w-[80px] mr-4' />
            <span className='font-bold text-2xl text-white'>Board of Hostel Affairs, IIT ROPAR</span>
      </div>
    </div>
  )
}

export default Home
