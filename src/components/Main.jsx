import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <>
            <Navbar/>
            <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-bold text-3xl my-5'>The Beginning After the End...</p>
                <img className='w-2/4 drop-shadow-md' src="/Travelling collage with famous sights.png" alt="" />
                <p className='font-bold text-3xl'>Kickstart your Journey and travel around the world in 50 Days...</p>
                <button className='font-semibold text-xl bg-amber-500 p-2 rounded-md text-center my-7' ><Link to="/form"> Click here to books tickets</Link></button>
                <div className='bg-black my-5 h-1 w-full'></div>
            </div>
            <div className='flex gap-7 justify-between' >
                <div className='flex '>
                    <div id='about' className='w-4/5 mx-14 bg-amber-300 p-4 drop-shadow-md rounded-md font-bold text-lg '>Embark on a whimsical journey through time and space, where cobblestone streets whisper secrets of ancient civilizations, and sunsets paint the sky in hues of magic. Pack your curiosity, leave behind the ordinary, and let adventure be your compass. We provide you to book a flight from our side, with minimalist approach and not much hassle. Fill the contact form which is on the right side if you have any issues while booking. <p className='my-2'>~ Regards, TravelleRizz</p>
                    </div>
                </div>
                <div >
                    <form id='contact' className='flex flex-col bg-orange-400 font-semibold p-4 pb-10 rounded-lg mx-14 drop shadow-md'>
                        <label className='font-bold text-lg' > Name</label>
                        <input className='rounded-md' type="text" />
                        <label className='font-bold text-lg' > Email</label>
                        <input className='rounded-md' type="text" />
                        <label className='font-bold text-lg' > Number</label>
                        <input className='rounded-md' type="text" />
                        <button className='bg-teal-700 my-3 rounded-md text-white font-bold'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='font-bold text-xl my-5 text-center underline'>Made with Love for YOU ✈️ </div>
        </>
    )
}
export default Main