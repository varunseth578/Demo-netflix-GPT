
import React from 'react'

import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying"
import usePopularMovies from "../hooks/usePopularMovies"
import useHorrorMovies from "../hooks/useHorrorMovies"
import useTrendingMovies from "../hooks/useTrendingMovies"

import { MainContainer } from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = ()=> {
 
  useNowPlaying();
  usePopularMovies();
  useHorrorMovies();
  useTrendingMovies();
  
  
  return (
    <div>
    <Header />
    <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
    
    
    </div>
  );
};

export default Browse;