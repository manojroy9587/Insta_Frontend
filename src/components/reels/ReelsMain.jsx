import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdPhotoCamera } from "react-icons/md";
import photo from "../../assets/profile.jpeg"
import { FaRegHeart } from "react-icons/fa";
import ReelsBottom from "./ReelsBottom";
import video from "../../assets/ratan.mp4"
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";


function ReelsMain() {
  return (
    <div>
      <div className="relative h-screen w-[320px] bg-gray-900 text-gray-50">
        {/*top */}
        <div className="w-full flex items-center justify-between mt-5 px-2 absolute top-2 text-xl">
          <div className="flex items-center gap-2">
            <span>Reels</span>
            <span>
              <FaAngleDown />
            </span>
          </div>
          <span><MdPhotoCamera />
          </span>
        </div>
        {/*image */}
        <div className="h-full flex items-center justify-center">   <video
        className="w-full h-auto  shadow-lg"
      
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video></div>
        <div className="absolute right-1 bottom-50">
            <div className="flex flex-col items-center my-2" >
                <span><FaRegHeart />
                </span><span>124k</span>
            </div>
            <div className="flex flex-col items-center my-2">
                <span> <FaRegComment />
                </span><span>124k</span>
            </div>
            <div className="flex flex-col items-center my-2 ">
                <span><PiShareFat />
                </span><span>124k</span>
            </div>
        </div>
        <ReelsBottom/>
      </div>
    </div>
  );
}

export default ReelsMain;
