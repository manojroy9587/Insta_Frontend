import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { RiThreadsLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";

function ProfileTop() {
  return (
    <div className="flex items-center justify-between px-2 my-2">
      <div className="flex items-center gap-1 text-[15px] font-semibold">
        <h1>Manojroy111</h1>
        <span>
          <FaChevronDown />
        </span>
      </div>
      <div className="text-xl flex gap-2 text-gray-700">
        <RiThreadsLine />
        <CgAddR />
        <VscThreeBars />
      </div>
    </div>
  );
}

export default ProfileTop;
