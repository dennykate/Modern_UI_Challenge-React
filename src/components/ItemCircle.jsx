import React from "react";
import Picture from "../assets/picture.webp";
import Camera from "../assets/camera.webp";
import Video from "../assets/video.webp";
import Music from "../assets/music.webp";
import Headphone from "../assets/headphone.webp";
import Play from "../assets/play.webp";
import Noti from "../assets/noti.webp";
import Mic from "../assets/mic.webp";
import Flash from "../assets/flash.webp";

const ItemCircle = ({ circleRotate, circelId }) => {
  return (
    <div className="rotate-45 sm:w-[400px] sm:h-[400px] w-[320px] h-[320px] absolute -top-[10px] -left-[100px]">
      <div
        className={`sm:w-[400px] sm:h-[400px] w-[320px] h-[320px] top-0 transition-all duration-[1500ms] ease-in-out absolute
        ${circelId == 1 ? "opacity-100 " : "opacity-0"}
           rounded-[60px] `}
        style={{ transform: `rotate(${circleRotate}deg)` }}
      >
        <div
          className="sm:w-[360px] w-[300px] sm:h-[360px] h-[300px]  top-0 
        sm:-left-[100px] -left-[80px] -rotate-[180deg]  relative"
        >
          <img
            src={Picture}
            alt="picture"
            className="sm:w-[120px] w-[100px] absolute bottom-0 left-0"
          />
          <img
            src={Camera}
            alt="picture"
            className="sm:w-[250px] w-[220px] absolute bottom-0 right-0"
          />
          <img
            src={Video}
            alt="picture"
            className="sm:w-[120px] w-[100px] absolute top-0 right-0"
          />
        </div>
      </div>

      <div
        className={`sm:w-[400px] sm:h-[400px] w-[320px] h-[320px] top-0 transition-all duration-[1500ms] ease-in-out absolute
            ${circelId == 2 ? "opacity-100 " : "opacity-0"}
           rounded-[60px] `}
        style={{ transform: `rotate(${circleRotate - 130}deg)` }}
      >
        <div
          className="sm:w-[360px] w-[300px] sm:h-[360px] h-[300px]  top-0 
        sm:-left-[100px] -left-[80px] -rotate-[180deg]  relative"
        >
          <img
            src={Music}
            alt="picture"
            className="sm:w-[120px] w-[100px] absolute bottom-0 left-0"
          />
          <img
            src={Headphone}
            alt="picture"
            className="sm:w-[250px] w-[220px] absolute bottom-0 right-0"
          />
          <img
            src={Play}
            alt="picture"
            className="sm:w-[120px] w-[100px] absolute top-0 right-0"
          />
        </div>
      </div>

      <div
        className={`sm:w-[400px] sm:h-[400px] w-[320px] h-[320px] top-0 transition-all duration-[1500ms] ease-in-out absolute
            ${circelId == 3 ? "opacity-100 " : "opacity-0"}
           rounded-[60px] `}
        style={{ transform: `rotate(${circleRotate - 260}deg)` }}
      >
        <div
          className="sm:w-[360px] w-[300px] sm:h-[360px] h-[300px]  top-0 
        sm:-left-[100px] -left-[80px] -rotate-[180deg]  relative"
        >
          <img
            src={Flash}
            alt="picture"
            className="sm:w-[120px] w-[100px] absolute bottom-0 left-0"
          />
          <img
            src={Mic}
            alt="picture"
            className="sm:w-[250px] w-[220px] absolute bottom-0 right-0"
          />
          <img
            src={Noti}
            alt="picture"
            className="sm:w-[120px] w-[100px] absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCircle;
