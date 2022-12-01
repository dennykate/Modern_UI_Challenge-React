import React, { useEffect, useState } from "react";
import Face from "../assets/face.webp";
import Laugh from "../assets/laugh.webp";
import Relax from "../assets/relax.webp";
import CameraPremium from "../assets/cameraPremium.webp";
import CameraBasic from "../assets/cameraBasic.webp";
import CameraColorful from "../assets/cameraColorful.webp";
import HeadphonePremium from "../assets/headphonePremium.webp";
import HeadphoneBasic from "../assets/headphoneBasic.webp";
import HeadphoneColorful from "../assets/headphoneColorful.webp";
import MicPremium from "../assets/micPremium.webp";
import MicBasic from "../assets/micBasic.webp";
import MicColorful from "../assets/micColorful.webp";

let face = [Laugh, Face, Relax];

const RightSide = ({ arr, color, isChangeface, circelId }) => {
  return (
    <div className="h-full lg:w-2/3 w-full px-10">
      <div className="w-full h-[100px] flex justify-end items-center ">
        <div
          className={`${arr[color]} w-[50px] h-[50px] rounded-full p-2 overflow-hidden`}
        >
          <img
            src={face[color]}
            alt="emotion"
            className={` w-full h-full rounded-full transition-all duration-300 ease-in-out 
          ${
            isChangeface
              ? "translate-x-20 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
          />
        </div>
      </div>

      <div className="lg:w-10/12 w-full ml-auto h-[100px]">
        <h1 className=" font-mono text-black text-4xl font-semibold">
          My <br /> storehouse
        </h1>

        <div className="sm:w-[500px] w-[300px] flex justify-between items-center my-5">
          <h1 className=" font-mono text-black text-lg font-semibold">
            Product
          </h1>
          <h1 className=" font-mono text-black text-lg font-semibold">No</h1>
        </div>

        <div className="sm:w-[500px] w-[300px] px-1 h-[240px] relative overflow-hidden">
          <div className="w-full absolute top-0 h-[240px]">
            <div className="w-full h-[80px] bg-gray-200"></div>
            <div className="w-full h-[80px] bg-white"></div>
            <div className="w-full h-[80px] bg-gray-200"></div>
          </div>

          <div
            className={`sm:w-[500px] w-[300px] h-[240px] absolute transition-all duration-500 ease-in-out delay-500
          ${circelId == 1 ? "translate-x-0" : "translate-x-[500px]"}`}
          >
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-gray-200 flex justify-between items-center px-5">
              <h1 className=" font-mono text-black  sm:text-lg text-sm font-semibold">
                Camera (Premium)
              </h1>
              <img src={CameraPremium} alt="camera" className="h-[60px]" />
            </div>
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-white flex justify-between items-center px-5">
              <h1 className=" font-mono text-black  sm:text-lg text-sm font-semibold">
                Camera (Colorful)
              </h1>
              <img src={CameraColorful} alt="camera" className="h-[60px]" />
            </div>
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-gray-200 flex justify-between items-center px-5">
              <h1 className=" font-mono text-black  sm:text-lg text-sm font-semibold">
                Camera (Basic)
              </h1>
              <img src={CameraBasic} alt="camera" className="h-[60px]" />
            </div>
          </div>

          <div
            className={`sm:w-[500px] w-[300px] h-[240px] absolute transition-all duration-500 ease-in-out delay-500
          ${circelId == 2 ? "translate-x-0" : "translate-x-[500px]"}`}
          >
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-gray-200 flex justify-between items-center px-5">
              <h1 className=" font-mono text-black sm:text-lg text-sm font-semibold">
                Headphone (Premium)
              </h1>
              <img src={HeadphonePremium} alt="camera" className="h-[60px]" />
            </div>
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-white flex justify-between items-center px-5">
              <h1 className=" font-mono text-black  sm:text-lg text-sm font-semibold">
                Headphone (Colorful)
              </h1>
              <img src={HeadphoneColorful} alt="camera" className="h-[60px]" />
            </div>
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-gray-200 flex justify-between items-center px-5">
              <h1 className=" font-mono text-black  sm:text-lg text-sm font-semibold">
                Headphone (Basic)
              </h1>
              <img src={HeadphoneBasic} alt="camera" className="h-[60px]" />
            </div>
          </div>

          <div
            className={`sm:w-[500px] w-[300px] h-[240px] absolute transition-all duration-500 ease-in-out delay-500
          ${circelId == 3 ? "translate-x-0" : "translate-x-[500px]"}`}
          >
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-gray-200 flex justify-between items-center px-5">
              <h1 className=" font-mono text-black  sm:text-lg text-sm font-semibold">
                Mic (Premium)
              </h1>
              <img src={MicPremium} alt="camera" className="h-[60px]" />
            </div>
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-white flex justify-between items-center px-5">
              <h1 className=" font-mono text-black  sm:text-lg text-sm font-semibold">
                Mic (Colorful)
              </h1>
              <img src={MicColorful} alt="camera" className="h-[60px]" />
            </div>
            <div className="sm:w-[500px] w-[300px] h-[80px] bg-gray-200 flex justify-between items-center px-5">
              <h1 className=" font-mono text-black  sm:text-lg text-sm font-semibold">
                Mic (Basic)
              </h1>
              <img src={MicBasic} alt="camera" className="h-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
