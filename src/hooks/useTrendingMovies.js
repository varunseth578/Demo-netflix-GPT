import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const TrendingMovies = useSelector((store) => store.movies.TrendingMovies);

  const getTrendingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        API
      );
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !TrendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
