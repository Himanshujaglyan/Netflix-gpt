import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { addPopularMovies } from '../Utils/movieSlice';
import {API_OPTIONS} from "../Components/Constants"

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularmovies = useSelector(store=>store.movies.popularMovies)
    useEffect(()=>{
      if(!popularmovies) getPopularMovies();
    },[])
const getPopularMovies = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS); 
  const json = await data.json();
  // console.log(json.results); 
  dispatch(addPopularMovies(json.results))
}
}
export default usePopularMovies;
