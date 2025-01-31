import { useLocation } from "react-use";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MoviePage = () => {
  const location = useLocation();
  const data = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return <p className="text-white">Movie not found</p>;
  }

  const movie = data.usr.movie;

  return (
    <div className="flex flex-col min-h-screen w-[90vw] md:w-[80vw] lg:w-[70vw] items-center justify-center mx-auto">
      <div className="text-white flex flex-row items-center justify-start w-full pt-10">
        <Link to={"/"}>
          <img src="public/home.png" alt="home icon" width="30" height="30" />
        </Link>
        <h1 className="right-5">{movie.title}</h1>
      </div>
      <div className="pb-5">
        {movie.video ? (
          <video width="600" controls>
            <source src={movie.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "/no-movie.png"
            }
            alt={movie.title}
            className="min-h-0"
          />
        )}
      </div>

      <p className="text-white p-5">{movie.overview}</p>
      <div className="text-white flex flex-row gap-4 pb-5">
        <p>Original Language: {movie.original_language}</p>
        <p>Release date: {movie.release_date} </p>
      </div>
      <div className=" text-white flex flex-row gap-4 pb-5">
        <p>Voted: {movie.vote_average.toFixed(1)} out of 10</p>
      </div>
    </div>
  );
};
export default MoviePage;
