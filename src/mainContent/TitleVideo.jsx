import React from "react";
import { PiPlayThin } from "react-icons/pi";
import { PiInfoFill } from "react-icons/pi";

function TitleVideo({ overview, title }) {
  return (
    <div className="absolute w-[vw] aspect-video">
      <div className=" w-full mx-auto  lg:pt-[20%] md:pt-20 ">
        <div className="flex flex-col items-center gap-2 sticky">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="text-white w-1/3 mt-3">{overview} </p>
        </div>

        <div className="flex gap-4 items-center justify-center mt-10">
          <div className=" flex items-center justify-center text-center gap-2 bg-white px-6 py-2 font-medium rounded-md hover:bg-opacity-65">
            <PiPlayThin size={29} />
            <button>Play</button>
          </div>
          <div className=" flex items-center justify-center text-center bg-slate-200 px-6 py-2 font-medium rounded-md opacity-70 hover:opacity-50">
            <PiInfoFill size={29} />

            <button>Watch more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleVideo;
