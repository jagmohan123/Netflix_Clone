import React from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import logo from "../assets/gh.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../services/oprations/authentiApi";
import { setSearchMovieToggle } from "../slice/movieSlice";
function Header() {
  // get the user details
  const { user } = useSelector((state) => state.user);
  const { searchMovieToggle } = useSelector((state) => state.movie);
  // console.log("User inside header", user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchMovieHandler = () => {
    dispatch(setSearchMovieToggle(searchMovieToggle));
  };
  return (
    <div className="relative flex items-center justify-between px-2 bg-gradient-to-t from-blue-950 overflow-x-hidden w-screen">
      <img
        className="w-32 aspect-auto mix-blend-color-burn  rounded-sm"
        src={logo}
        alt="logo"
      />
      {user && (
        <div className=" flex items-center text-white justify-between gap-6 pr-10">
          <div className="flex">
            <MdOutlineArrowDropDownCircle size={28} />
            <h1 className="text-lg font-medium"> {user.fullName}</h1>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              className="bg-red-800 text-white px-3 py-2 rounded-md "
              onClick={() => dispatch(LogoutUser(navigate))}
            >
              Logout
            </button>
            <button
              onClick={searchMovieHandler}
              className="bg-red-800 text-white px-3 py-2  rounded-md"
            >
              {searchMovieToggle ? "Home" : "Search Movies"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
