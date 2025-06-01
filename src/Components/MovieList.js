import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-16'>
            <h1 className='text-white text-2xl py-4'>{title}</h1>
            <div className='flex overflow-x-scroll overflow-hidden'>
                <div className='flex'>
                    {movies?.length > 0 ? (
                        movies.map(movie => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))
                    ) : (
                        <p className='text-white'>No Movies Available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
