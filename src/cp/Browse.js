
import React from 'react'

import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying"
import usePopularMovies from "../hooks/usePopularMovies"
import useHorrorMovies from "../hooks/useHorrorMovies"
import useTrendingMovies from "../hooks/useTrendingMovies"
import GptSearch from './SearchPage';

import { MainContainer } from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';



const Browse = ()=> {
 const showGptSearch =useSelector(store => store.gpt.showGptSearch);

  useNowPlaying();
  usePopularMovies();
  useHorrorMovies();
  useTrendingMovies();
  
  
  return (
    <div>
    <Header />
{
  showGptSearch ? ( <GptSearch />):(<>
   
   <MainContainer/>
   <SecondaryContainer/>
   </>)
}


    
    
    
    </div>
  );
};

export default Browse;