import React from 'react'
import PlayIcon from "../img/playIcon.png"
const VideoTitle = ({title,overview}) => {
  return (
    <div className='overflow-x-hidden w-screen aspect-video pt-52 px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='p-6 text-lg w-1/3'>{overview}</p>
       <div className='flex'>
       <button className='px-6 ml-5 flex text-black text-lg font-bold py-2 rounded-sm hover:bg-gray-300 bg-white'><img className='w-4' src={PlayIcon} alt='icon'/> Play</button>
       <button className='px-6 mx-3 text-white font-bold py-2 bg-white  hover:bg-opacity-25 bg-opacity-20'>! More Info</button>
       </div>
    </div>
  )
} 

export default VideoTitle