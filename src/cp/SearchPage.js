import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSug from './GptMovieSug';

function  SearchPage() {
  return (
    <div>
      <GptSearchBar/>
      <GptMovieSug/>
    </div>
  )
}

export default SearchPage;