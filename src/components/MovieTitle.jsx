import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

const MovieTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold my-3'>{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
        <div className='mt-10'>
            <button className="btn font-bold w-28 text-black"><CiPlay1 /> Play</button>
            <button className="btn  mx-4 w-36 bg-gray-700 opacity-80  text-white font-bold border-none"><IoIosInformationCircleOutline/> More Info</button>
        </div>
    </div>
  )
}

export default MovieTitle