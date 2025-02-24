import React from "react";
import { MdOutlineBrokenImage } from "react-icons/md";
import { RiFileVideoLine } from "react-icons/ri";

function ProfileBottom() {
  return (
    <div>
      <div className="my-3 w-full flex justify-around text-2xl border-b-gray-800">
        <div className=" border-b-gray-500 ">
          <MdOutlineBrokenImage />
        </div>
        <div>
          <RiFileVideoLine />
        </div>
        <div>
          <RiFileVideoLine />
        </div>
      </div>
    </div>
  );
}

export default ProfileBottom;
