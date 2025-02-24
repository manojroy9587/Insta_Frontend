import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { RiThreadsLine } from "react-icons/ri";
import { PiFacebookLogoBold } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";

function ProfileMiddleBox() {
  return (
    <div className="mx-2">
      <div className="  flex items-center gap-2 text-sm">
        <p className="flex items-center">
          {" "}
          <RiThreadsLine /> <span className="text-xs">manojroy1101</span>
        </p>
        <p className="flex items-center">
          {" "}
          <PiFacebookLogoBold />
          <span className="text-xs">manojroy1101</span>
        </p>
      </div>
      <div className="my-3 flex items-center justify-around">
        <button className="text-xs border rounded-md px-7 py-2 cursor-pointer hover:bg-gray-200 duration-100">Edit Profile</button>
        <button className="text-xs border rounded-md px-7 py-2 cursor-pointer hover:bg-gray-200 duration-100 ">Share Profile</button>
        <button className="cursor-pointer hover:bg-gray-200 duration-100 border rounded-md px-2 py-2 text-sm"><IoIosPersonAdd />
        </button>

      </div>
      <div>
        <button className="text-[60px] border rounded-full text-gray-500 cursor-pointer"><IoAdd />

        </button>
      </div>
    </div>
  );
}

export default ProfileMiddleBox;
