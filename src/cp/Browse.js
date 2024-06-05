
import React from 'react'

import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying"
import usePopularMovies from "../hooks/usePopularMovies"
import { MainContainer } from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = ()=> {
 
  useNowPlaying();
  usePopularMovies();
  
  
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