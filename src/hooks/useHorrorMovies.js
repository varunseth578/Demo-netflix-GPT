import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const HorrorMovies = useSelector((store) => store.movies.HorrorMovies);

  const getHorrorMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API
      );
      const json = await data.json();
      dispatch(addHorrorMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !HorrorMovies && getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
