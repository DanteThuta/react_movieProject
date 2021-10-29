import React from "react";

//Routing
import { useParams } from "react-router-dom";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components Section
import Spinner from "./Spinner";
import Grid from "./Grid";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";

//Image
import NoImage from "../images/no_image.jpg";
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  // console.log(movie.backdrop_path);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar 
          time={movie.runtime} 
          budget={movie.budget} 
          revenue = {movie.revenue}
       />
    </>
  );
};

export default Movie;
