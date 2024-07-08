import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    
      <div className='flex justify-between '>
        <Link to="/">
        <div className='flex'>
          <img className='w-9 h-9  m-7' src="/src/assets/logo.png" alt="img" />
          <p className='my-8 font-bold text-2xl '>TravelleRizz</p>
        </div>
        </Link>
        <ul className='flex gap-4 my-8 px-6'>
          <button className='list-none font-semibold text-xl bg-amber-500 p-2 rounded-md text-center' ><a href="#about">About</a></button>
          <button className='list-none font-semibold text-xl bg-amber-500 p-2 rounded-md text-center'><a href="#contact">Contact</a></button>
        </ul>
      </div>
      
    </>
  )
}

export default Navbar