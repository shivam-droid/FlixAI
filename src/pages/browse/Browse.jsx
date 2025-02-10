import React, { useEffect } from "react";
import Header from "../home/Header";
import useGetMovie from "../../hooks/useGetMovie";
import MainContainer from "../../components/MainContainer";
import SecondaryContainer from "../../components/SecondaryContainer";

const Browse = () => {

  // useGetMovie();

  return (
    <div  className="w-screen relative overflow-x-hidden">
      <Header />
      {/* 
        MainContainer
          - Trailer
          - Movie Titel
        SecondaryContainer
          - movielist * n
            - cards * n
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
