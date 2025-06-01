import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    // const randomIndex = Math.floor(Math.random() * Math.min(20, movies.length));
  //if we want ke her baar 1-19 tak index khud change ho put instead of index -->randomIndez
    const mainMovie = movies[1];
    const {original_title,overview,id} = mainMovie;
    
    
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div> 
  ) 
}

export default Maincontainer