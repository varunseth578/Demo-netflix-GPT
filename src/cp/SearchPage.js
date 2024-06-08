import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSug from './GptMovieSug';
import {BGIMG } from "../utils/constants"

function  SearchPage() {
  return (
    <div>
     <div className="absolute -z-10">
        
        <img src=  {BGIMG }/>
      </div>
      <GptSearchBar/>
      <GptMovieSug/>
    </div>
  )
}

export default SearchPage;