import React, { useEffect } from 'react'
import { TMDB_API_URL,TMDB_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/movieSlice';

const useGetMovie = () => {

    const dispatch = useDispatch();

    const getPlayNowMovies = () =>{
        fetch(TMDB_API_URL, TMDB_OPTIONS)
        .then((res) => res.json())
        .then((json) => dispatch(addMovies(json.results)))
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getPlayNowMovies();
        }, []);


};




export default useGetMovie