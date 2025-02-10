import React from 'react'
import MovieList from './MovieList';
import nowPlayingMovies from '../data/nowPlayingMovies.js'
import trendingMovies from '../data/trendingMovies.js'

const SecondaryContainer = () => {
  console.log(nowPlayingMovies[0])
  return (
    <div className="bg-black">
        <div className=" mt-0 md:-mt-36 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Trending"} movies={trendingMovies} />
          <MovieList title={"Popular"} movies={nowPlayingMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={trendingMovies}
          />
          <MovieList title={"Horror"} movies={nowPlayingMovies} />
        </div>
      </div>
  )
}

export default SecondaryContainer;
// 

