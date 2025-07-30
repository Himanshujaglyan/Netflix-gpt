import Header from './Header';
import ProfileLogo from "../img/ProfileIcon.jpg";
import { signOut } from 'firebase/auth';
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
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
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoaded(false), 5000);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const GPTSearchValue = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  // if (loaded) return <ShimmerEffect />;

  return loaded? <ShimmerEffect />: (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* GPT Search / Home Toggle Button */}
      <button
        className={`py-1.5 px-4 rounded-md text-sm font-semibold absolute right-24 top-4 z-30 transition duration-200
        ${GPTSearchValue ? "bg-red-600 text-white hover:bg-red-700" : "bg-white text-black hover:bg-slate-200"}`}
        onClick={handleGptSearchClick}
      >
        {GPTSearchValue ? "🏠 Home" : "💫 GPT Search"}
      </button>

      {/* Profile + Logout Dropdown */}
      <div className="absolute top-4 right-6 z-30 group">
        <img
          className="w-10 h-10 rounded-md cursor-pointer border border-white"
          src={ProfileLogo}
          alt="ProfileIcon"
        />
        <div className="absolute top-12 right-0 bg-black bg-opacity-90 text-white text-sm rounded-md px-3 py-2 hidden group-hover:block">
          <button onClick={handleSignOut} className="hover:underline">Log Out</button>
        </div>
      </div>

      {/* Content */}
      {
        GPTSearchValue ? <GPTsearchPage /> : (
          <>
            <Maincontainer />
            <SecondaryContainer />
            <Footer />
          </>
        )
      }
    </div>
  );
};

export default Browse;
