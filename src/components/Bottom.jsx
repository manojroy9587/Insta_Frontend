import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Bottom() {
  const [active , setActive] = useState("home")
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
    setActive("profile") // Redirect to About page
  };
  const goToSearch = () => {
    navigate("/search");
    setActive("search") // Redirect to About page
  };
  const goToHome = () => {
    navigate("/home");
    setActive("home") // Redirect to About page
  };
  const goToReels = () => {
    navigate("/reels");
    setActive("reels") // Redirect to About page
  };
  return (
    <div>
          <div className="fixed bottom-0 bg-white p-2 w-[320px] flex justify-around text-xl">
                 <button onClick={goToHome} className="cursor-pointer hover:scale-105 duration-100  flex flex-col items-center"><AiOutlineHome />
                {active==="home"? <p className="bg-red-400 p-1 w-1 h-1 rounded-full"></p>:""}
                 </button>
                  <button onClick={goToSearch} className="cursor-pointer hover:scale-105 duration-100 flex flex-col items-center"><IoIosSearch />   {active==="search"? <p className="bg-red-400 p-1 w-1 h-1 rounded-full"></p>:""}
                  </button>
                  <button onClick={goToReels} className="cursor-pointer hover:scale-105 duration-100 flex flex-col items-center"><MdOutlineSlowMotionVideo />
                  {active==="reels"? <p className="bg-red-400 p-1 w-1 h-1 rounded-full"></p>:""}
                  </button>
                  <button onClick={goToProfile} className="cursor-pointer hover:scale-105 duration-100 flex flex-col items-center"><CgProfile />
                  {active==="profile"? <p className="bg-red-400 p-1 w-1 h-1 rounded-full"></p>:""}
                  </button>
                </div>
    </div>
  )
}

export default Bottom