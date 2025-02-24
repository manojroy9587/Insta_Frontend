import React from "react";
import video from "../../assets/ratan.mp4"
const VideoComponent = () => {
  return (
    <div className="w-[320px] flex justify-center items-center h-screen bg-gray-900">
      <video
        className="w-full h-auto shadow-lg"
        controls
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
