import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import photo from "../../assets/profile.jpeg";
function HomePost() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="relative">
              {" "}
              <div className="">
                <img src={photo} className="w-full" />
              </div>
              <div className=" absolute top-2 left-2 text-white w-full flex items-center justify-between">
                <div className="flex gap-2 text-black">
                  <img src={photo} alt="" className="w-6 h-6 rounded-full" />
                  <div>
                    <p className="text-xs tex-white font-semibold">
                      manojrot0012
                    </p>
                    <p className="flex items-center  gap-1">
                      <span>
                        <CiMusicNote1 />
                      </span>
                      <span className="text-[9px] tet-gray-200">
                        o Mahi o Mahi
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="text-xs px-2 py-1 rounded-md border border-gray-500 hover:bg-black cursor-pointer duration-100">
                    Follow
                  </button>
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
            </div>
            {/*like , comment , share */}
            <div className="flex item-center m-2 gap-3 font-semibold text-[15px]">
              <div className="flex items-center justify-center gap-1">
                <span>
                  {" "}
                  <FaRegHeart />
                </span>
                <span>42k</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span>
                  {" "}
                  <FaRegComment />
                </span>
                <span>30</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span>
                  {" "}
                  <PiShareFat />
                </span>
                <span>531</span>
              </div>
            </div>
            {/*describtion and date */}
            <div className="text-[11px]">
              <p className="text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                mollitia ...
              </p>
              <p className="text-gray-500">6 january</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePost;
