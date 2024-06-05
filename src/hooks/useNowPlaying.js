import { API } from '../utils/constants';
import { useDispatch} from 'react-redux';
import { addNowPlaying} from "../utils/moviesSlice";
import  { useEffect } from 'react';


const useNowPlaying = () =>{
    const dispatch = useDispatch();
  const getNowPlaying = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API);
    const json = await data.json();
   
   dispatch(addNowPlaying(json.results));
  };
  useEffect(()=>{
    getNowPlaying();

  },[])

}
export default useNowPlaying;