import Header from './Header'
import ProfileLogo from "../img/ProfileIcon.jpg"
import { signOut } from 'firebase/auth'
import {auth} from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import usePopularMovies from '../Hooks/usePopularMovies';
import GPTsearchPage from './GPTsearchPage';
import { useEffect, useState } from 'react';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { useDispatch, useSelector } from 'react-redux';
import ShimmerEffect from "./ShimmerUI";
const Browse = () => {
  const [loaded,setloaded] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{setloaded(false)},300);
  },[])
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const GPTSearchValue = useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  const handleSignOut = ()=>{
    signOut(auth).then(()=>{ 
      //sign out success
      navigate("/");
    }).catch(()=>{
      navigate("/error")
    })
  } 
  const handleGptSearchClick =()=>{
      dispatch(toggleGptSearchView());
  }
  return loaded? <ShimmerEffect/>:(
    <div className='flex flex-col'>
      <Header/>
      <button className='py-1 rounded-lg font-medium hover:bg-slate-100 px-4 m-2 absolute z-30 right-16 top-4 bg-white text-black' onClick={()=>{handleGptSearchClick()}}>
        {GPTSearchValue?"Home":"💫GPT Search"}
        </button>
      <img className='w-8 cursor-pointer right-0 mt-5 mr-6 absolute z-30' src={ProfileLogo} alt='ProfileIcon'/>
      <button onClick={()=>{handleSignOut()}} className='absolute z-30 text-white cursor-pointer p-2 font-bold right-0 text-sm mt-12 mr-2'>LogOut</button>

      {
      GPTSearchValue?<GPTsearchPage/>:(
       <>
        <Maincontainer/>
        <SecondaryContainer/>
        <Footer/>
      </>
      )
     }
    </div>
  )
}

export default Browse