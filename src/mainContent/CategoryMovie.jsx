import React from "react";
import SingleMovieCard from "./SingleMovieCard";

function CategoryMovie({ movie, title }) {
  console.log("Category me movie ", movie);
  return (
    <div className=" w-screen pl-6 pr-6 mt-6">
      <h1 className="pl-10 mt-2 text-white text-3xl mb-6">{title}</h1>
      <div className=" flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center gap-2 ">
          {movie?.map((singleMovie) => (
            <SingleMovieCard
              key={singleMovie.id}
              singleMovie={singleMovie}
              ImageUrl={singleMovie?.poster_path}
              movieId={singleMovie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryMovie;
