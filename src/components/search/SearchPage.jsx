import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import SearchMiddle from "./SearchMiddle";
import ProfileSearch from "./ProfileSearch";
import { RxCross2 } from "react-icons/rx";
import photo from "../../assets/profile.jpeg"
import { FaSearch } from "react-icons/fa";

function SearchPage() {
  return (
    <div className="w-[320px]">
      <div>
        <div className="text-sm flex items-center gap-2 px-2 mt-5 mb-2">
          <span>
            <FaArrowLeft />
          </span>
          <input
            type="text"
            placeholder="Search Photography"
            className="w-full bg-gray-200 text-xs rounded-2xl px-3 py-2"
          />
        </div>
        <div className="flex text-xs px-2 gap-1">
          <div className="rounded-sm px-2 py-1 bg-gray-200 cursor-pointer">
            good morning reels
          </div>
          <div className="rounded-sm px-2 py-1 bg-gray-200 cursor-pointer">
            21 february
          </div>
          <div className="rounded-sm px-2 py-1 bg-gray-200 cursor-pointer">
            birthday song
          </div>
        </div>
      </div>
      <SearchMiddle/>
      <ProfileSearch/>
      <ProfileSearch/>
         <div className='my-5 px-3 text-gray-600 flex items-center justify-between '>
              <div className='flex items-center gap-2'><FaSearch />

              <div className=''><p className='text-sm font-semibold'>Ratan Maghi</p>
             </div></div>
              <span className='text-sm text-gray-800 cursor-pointer'><RxCross2 />
              </span>
          </div>
    </div>
  );
}

export default SearchPage;
