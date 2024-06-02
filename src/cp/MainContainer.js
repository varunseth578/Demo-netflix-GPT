import React from 'react'
import { useSelector } from 'react-redux'
import { VideoBack } from './VideoBack'
import VideoTitle from './VideoTitle'

export const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlaying);
    //if (!movies) return;
    if (movies === null ) return;  //early return ---program not move to next line if this line is fails
    const mainMovie =movies[2];
    
    const {original_title,overview , id}= mainMovie;
  return (
    <div>
    <VideoTitle title={ original_title} overview ={overview}/>
    <VideoBack movieId ={id}/>
    





    </div>
  )
}
