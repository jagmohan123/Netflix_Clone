import React from "react";
import { useSelector } from "react-redux";
import useSearchMovieById from "../usable_hooks/useSearchMovieById";
function BackgroundVideo({ movieId, poPubVide }) {
  const { trailerMovie } = useSelector((state) => state.movie);
  console.log("Trainler", trailerMovie);
  console.log("ID IS ", movieId);
  useSearchMovieById(movieId);
  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${poPubVide ? "w-[100%]" : "w-screen"} aspect-video`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=sZ-Sh2nAROWC6wV2&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export default BackgroundVideo;
