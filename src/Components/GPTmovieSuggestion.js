import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"


const GPTmovieSuggestion = () => {
  const gpt = useSelector(store=>store.gpt)
  const {movieResult,movieName} = gpt;
  if(!movieName) return null;
  return (
    <div className='p-4 m-4 bg-black text-white'>
        <div>
          {movieName.map((movieName,index)=> <MovieList key={movieName} title={movieName}  movies={movieResult[index]}/>)}
         
        </div> 
    </div>
  )
  
}

export default GPTmovieSuggestion