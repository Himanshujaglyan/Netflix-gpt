import React, { useRef } from "react";
import lang from "../Utils/LanguageConstant";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {GOOGLE_API} from "./Constants" 
import {API_OPTIONS} from "./Constants"
import {addGptMovieResult} from "../Utils/gptSlice"
import { useDispatch } from "react-redux";

const GPTsearchBar = () => {
  const langSelect = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const API_KEY = GOOGLE_API; // 🔴 Apni Google Gemini API key yahan daalo
  const dispatch = useDispatch();
  //find result for each movie on TMDB(the movie data base)
  const SearchMovieOnTMDB = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me the names of 5 movies, comma-separated like this example: Gadar, Koi Mil Gaya, Sholay, Don, Pushpa 2.";

    try {
      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const text = response.text();
      // console.log(text); // Console me response check karne ke liye
      const GPTmoviesList = text.split(",");
      console.log(GPTmoviesList);
      const promiseArray = GPTmoviesList.map((movie)=>SearchMovieOnTMDB(movie));
      // Now this above line give me the list of promsise like[promise,promise,promise,promise,promise]
      //now we collect this all promise at once using promise.all()
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieName:GPTmoviesList, movieResult:tmdbResults}));
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
    }
  };

  return ( 
    <div className="pt-[10%] flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} className="w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          ref={searchText}
          className="p-2 pl-3 focus:outline-none m-4 col-span-9 rounded-2xl"
          type="text"
          placeholder={lang[langSelect].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
          {lang[langSelect].search}
        </button>
      </form>
    </div>
  );
};

export default GPTsearchBar;
