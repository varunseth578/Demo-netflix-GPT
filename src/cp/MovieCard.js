import React from "react";
import { IMG } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 pr-4">
      <img alt="Movie Card" src={IMG + posterPath} />
    </div>
  );
};

export default MovieCard;
