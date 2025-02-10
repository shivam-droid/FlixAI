import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div>
      <h1 className='text-gray-300 font-bold text-2xl py-4'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        
        <div className='flex gap-3 '>
          {movies.map(movie=> <MovieCard poster={movie.poster_path}/> )}          
        </div>
      </div>
    </div>
  )
}

export default MovieList