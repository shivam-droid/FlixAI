import React from 'react'

const MovieCard = ({poster}) => {
  console.log(poster);
  return (
    <div className='w-52'>
      <img alt='poster'
      src={"https://image.tmdb.org/t/p/w500"+poster} />
    </div>
  )
}

export default MovieCard