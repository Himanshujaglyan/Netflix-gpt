import React from 'react';
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);

    const trailervideo = useSelector((store) => store.movies.trailerVideo);

    if (!trailervideo || trailervideo.length === 0) return <div>Loading...</div>;

    return (
        <div className=''>
            <iframe
                className='w-screen aspect-video bg-gradient-to-b from-black'
                src={`https://www.youtube.com/embed/${trailervideo[0]?.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            >
            </iframe>
        </div>
    );
}

export default VideoBackground;
