import React from "react";
import { API } from "./constants";
import { useEffect } from "react";

export const VideoBack = () => {
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/653346/videos?language=en-US",
      API
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData[0];
    console.log(trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Kdr5oedn7q8?si=SjOy87udL0O3xvpn"
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
       
      ></iframe>
    </div>
  );
};

//*const filterData = json.results.filter(video => video.type=== "Trailer");
//const trailer = filterData.length ? filterData[0] : json.results[0];

//console.log(trailer);

//src={"https://www.youtube.com/embed/"+trailer.key}
