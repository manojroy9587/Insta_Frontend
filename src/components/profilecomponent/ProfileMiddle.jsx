import React from "react";
import photo from "../../assets/profile.jpeg";

function ProfileMiddle() {
  return (
    <div className="my-4 flex items-center ">
      <div className="mx-4">
        <img src={photo} className="w-20 rounded-full " />
      </div>
      <div className="w-full">
        <p className=" my-1 text-sm font-semibold text-gray-950">Manojroy1101</p>
        <div className="flex justify-between text-xs">
          <div>
            <p className="text-gray-900 font-semibold">0</p>
            <p className="text-gray-700">posts</p>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">89</p>
            <p className="text-gray-700">followers</p>
          </div>
          <div className="mr-2">
            <p className="text-gray-900 font-semibold">24</p>
            <p className="text-gray-700">follower</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMiddle;
