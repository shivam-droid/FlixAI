import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieTitle';
import Trailer from './Trailer';
import nowPlayingMovies from '../data/nowPlayingMovies';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.playNowMovies);
  //if(!movies)return;
  const {title,overview,id} = nowPlayingMovies[0];
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <MovieTitle title={title} overview={overview} />
        <Trailer id={id}/>
    </div>
  )
}

export default MainContainer