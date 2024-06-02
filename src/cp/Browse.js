
import React from 'react'

import Header from "../cp/Header";
import useNowPlaying from "../cp/hooks/useNowPlaying"
import { MainContainer } from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = ()=> {

  useNowPlaying();
  
  
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