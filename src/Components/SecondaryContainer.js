import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-gradient-to-b from-black to-gray-900 pb-10">
        {/* Movie Lists */}
        <div className="-mt-64 relative z-20 space-y-8 px-6 pt-10">
          <MovieList title="🎬 Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="🔥 Trending" movies={movies.popularMovies} />
          <MovieList title="⭐ Popular" movies={movies.nowPlayingMovies} />
          <MovieList title="📅 Upcoming" movies={movies.popularMovies} />
          <MovieList title="👻 Horror" movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
