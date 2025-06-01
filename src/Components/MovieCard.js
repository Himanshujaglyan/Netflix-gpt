import React from 'react'
import {IMG_CDN} from "./Constants";
const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 py-2 pr-3 px-2'>
        <img className='transition-transform duration-200 border border-l-4 rounded-lg hover:scale-110 hover:border-y-2 cursor-pointer' src={IMG_CDN + posterPath} alt="card"/>
    </div>
  ) 
}

export default MovieCard