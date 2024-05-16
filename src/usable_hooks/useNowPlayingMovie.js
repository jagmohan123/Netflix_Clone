import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIE_API } from "../utils/Constant";
import { options } from "../utils/Constant";
import { getNowPlayMovies } from "../slice/movieSlice";
import axios from "axios";
import { useEffect } from "react";
export const useNowPlayingMovie = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getNowPlayMovie() {
      try {
        const response = await axios.get(NOW_PLAYING_MOVIE_API, options);
        console.log("Now Playing movie api response", response);

        // movieSlice se getNowPlaying movie ko dispatch karenge
        dispatch(getNowPlayMovies(response?.data?.results));
      } catch (error) {
        console.log("error occured of calling playing api movie", error);
      }
    }
    getNowPlayMovie();
  }, []);
};

export default useNowPlayingMovie;
