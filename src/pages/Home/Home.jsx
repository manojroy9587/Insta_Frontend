import React from "react";
import photo from "../../assets/profile.jpeg";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

import HomePost from "../../components/home/HomePost";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <div className="p-1 w-[320px] bg-gray-50 h-screen">
        {/* top section */}
        <div className=" flex item-center justify-between">
          <span>Instagram</span>
          <div className="flex item-center justify-center gap-1 p-1 text-xl">
            <span>
              <FaRegHeart />
            </span>
            <span>
              <FaFacebookMessenger />
            </span>
          </div>
        </div>
        {/*status section */}
        <div className="">
          <div className="my-2 flex overflow-x item-center">
            <div className="relative bg-gray-600 rounded-full p-1 mx-1">
              <img src={photo} className="w-10 h-10 rounded-full " />
              <span className="absolute bottom-1 right-0 text-white rounded-full border-gray-600 text-xl bg-black cursor-pointer">
                {" "}
                <IoIosAddCircle />
              </span>
            </div>
            <div className="flex overflow-x-auto gap-1">
              <div className="bg-red-500 rounded-full p-1">
                <Link to={"/video"}><img src={photo} className="w-10 h-10 rounded-full " /></Link>
              </div>
              <div className="bg-red-500 rounded-full p-1">
              <Link to={"/video"}><img src={photo} className="w-10 h-10 rounded-full " /></Link>
              </div>
              <div className="bg-red-500 rounded-full p-1">
              <Link to={"/video"}><img src={photo} className="w-10 h-10 rounded-full " /></Link>
              </div>
              <div className="bg-red-500 rounded-full p-1">
              <Link to={"/video"}><img src={photo} className="w-10 h-10 rounded-full " /></Link>
              </div>
            </div>
          </div>
        </div>
        {/*post */}
        <HomePost/>
        <HomePost/> <HomePost/> <HomePost/> <HomePost/>
        {/*fixed components */}
      
      </div>
    </div>
  );
}

export default Home;
