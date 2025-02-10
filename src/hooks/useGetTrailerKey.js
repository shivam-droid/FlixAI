import React, { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useGetTrailerKey = (id) => {
  const dispatch = useDispatch();
  

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/939243/videos?language=en-US",
      TMDB_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    const video = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    const trailer = video.length != null ? video : json[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(()=>{
    getTrailer();
  },[])
};

export default useGetTrailerKey;
