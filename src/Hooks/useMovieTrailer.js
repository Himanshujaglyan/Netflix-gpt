import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../Components/Constants';
import { addTrailerVideo } from '../Utils/movieSlice';
const useMovieTrailer = (movieId)=>{
    // console.log(movieId)
    const dispatch = useDispatch();
    const trailerMovies = useSelector(store=>store.movies.trailerVideo)
    const getTrailerVideo = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        const trailer = json.results.filter((video)=>video.type == "Trailer");
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer));
    } 
    useEffect(()=>{
        if(!trailerMovies) getTrailerVideo();
    },[])
}
export default useMovieTrailer;