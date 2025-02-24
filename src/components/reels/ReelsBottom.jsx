import React from "react";
import photo from "../../assets/profile.jpeg";
import { CiMusicNote1 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

function ReelsBottom() {
  return (
    <div className=" absolute bottom-30 left-2 text-white w-full flex items-center justify-between">
      <div className="flex gap-2 ">
        <img src={photo} alt="" className="w-6 h-6 rounded-full" />
        <div>
          <p className="text-xs tex-white  font-semibold">
            manojrot0012
          </p>
          <p className="flex items-center  gap-1">
            <span>
              <CiMusicNote1 />
            </span>
            <span className="text-[9px] ">o Mahi o Mahi</span>
          </p>
        </div>
      
   
        <button className="text-xs px-2 py-1 rounded-md border border-gray-500 hover:bg-black cursor-pointer duration-100">
          Follow
        </button>
        </div>
      
        <span className="mr-5">
          <BsThreeDotsVertical />
        </span>
    
    </div>
  );
}

export default ReelsBottom;
