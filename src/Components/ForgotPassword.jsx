import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { ResetTokenForPassword } from "../services/oprations/authentiApi";

function ForgotPassword() {
  const { isemailSend } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  console.log(email);
  const dispatch = useDispatch();
  const navigateHandler = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  };

  const handleSumbitHandler = (event) => {
    event.preventDefault();
    console.log(email);
    if (email === " ") {
      toast.error("Enter your email");
    }

    dispatch(ResetTokenForPassword(email));
  };
  return (
    <div className="w-full mx-auto">
      <Header />
      <div className=" w-[508px] h-[448px] flex flex-col justify-center items-center bg-slate-200 mt-4 mx-auto rounded-md">
        <div className="w-[80%] text-center">
          <h1 className="text-4xl text-richblack-5 font-semibold">
            {!isemailSend ? "Reset Your Password" : "Check Your Email"}
          </h1>
          <p className="mt-4 text-richblack-300 font-lg leading-6 flex text-center">
            {" "}
            {!isemailSend
              ? " Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try  account recovery"
              : `We have sent the reset email to ${email}
               `}
          </p>
        </div>

        <div className="flex flex-col w-[80%] mt-4 items-center justify-center">
          {!isemailSend && (
            <form onSubmit={handleSumbitHandler}>
              <div>
                <label className="w-full mt-8">
                  <p className="text-[0.9rem] text-richblack-5 mb-1 leading-[1.385rem]">
                    Email address
                    <sup className=" text-pink-500 font-extrabold font-2xl">
                      *
                    </sup>
                  </p>
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email id"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full px-20 py-[0.5rem] text-black"
                  />
                </label>
              </div>

              {/* button */}
              <div className="mt-7">
                {!isemailSend && (
                  <button
                    type="submit"
                    className=" w-full text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold
                         shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
                             bg-red-600 text-white 
                             hover:scale-95 transition-all duration-200 hover:shadow-none
                             max-lg:flex items-center justify-center mx-auto text-center"
                  >
                    Reset Password
                  </button>
                )}

                {isemailSend && (
                  <button
                    type="submit"
                    className=" w-full text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold
                         shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
                             bg-red-600 text-white 
                             hover:scale-95 transition-all duration-200 hover:shadow-none
                             max-lg:flex items-center justify-center mx-auto text-center"
                  >
                    Resend email
                  </button>
                )}
              </div>

              <div className="max-sm:mt-8 text-richblack-5 mt-2 flex flex-row gap-3 max-sm:items-center max-sm:justify-center items-center">
                {/* <FaArrowLeftLong /> */}
                <button onClick={navigateHandler}>Back to login</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
