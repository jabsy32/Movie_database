import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovieData } from "../lib/api.js";

const TrendingMovies = ({ movies = [] }) => {
  const navigate = useNavigate();

  const handleOnClick = async (movieTitle) => {
    const data = await fetchMovieData(movieTitle);

    if (!data) return;
    const movie = data.results[0];

    navigate("/MoviePage", { state: { movie } });
  };

  return (
    <div className="trending-container">
      <div className="trending">
        <h2>Trending Movies</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={movie.$id} onClick={() => handleOnClick(movie.title)}>
              <p className="pr-5">{index + 1}</p>
              <img src={movie.poster_url} alt={movie.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TrendingMovies;
