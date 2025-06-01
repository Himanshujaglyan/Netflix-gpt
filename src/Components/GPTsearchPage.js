import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import GPTmovieSuggestion from './GPTmovieSuggestion'
import netFlixGPT from "../img/netflixGPT.webp"
import {SUPPORTED_LANGUAGES} from "./Constants"
import { useDispatch } from 'react-redux'
import {changeLanguage} from "../Utils/ConfigSlice"
const GPTsearchPage = () => {
  const dispatch = useDispatch();  
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <>

    <div className='flex p-2 absolute right-40 mt-5 border rounded-lg z-30 bg-black '>🌐 
      <select className='bg-black focus:outline-none text-white cursor-pointer' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
      </select>
    </div>

    <div> 
      <div className='absolute -z-10'>
      <div className="relative w-screen h-screen">
      <img className="w-full h-full object-cover fixed" src={netFlixGPT} alt="background" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      </div>
      <GPTsearchBar/>
      <GPTmovieSuggestion/>  
    </div>
    </>
  )
}

export default GPTsearchPage;     