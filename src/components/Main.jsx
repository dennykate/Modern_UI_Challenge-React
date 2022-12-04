import React, { useState, useEffect } from "react";
import { BiRuler } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import ItemCircle from "./ItemCircle";
import WhiteRing from "../assets/whiteRing.webp";
import HalfEgg from "../assets/halfEgg.webp";
import Chain from "../assets/chain.webp";

import RightSide from "./RightSide";

let arr = ["bg-[#f5af19]", "bg-[#8E2DE2]", "bg-[#D76D77]"];

const Main = () => {
  const [rotate, setRotate] = useState(0);
  const [circleRotate, setCircleRotate] = useState(0);
  const [circelId, setCircleId] = useState(0);
  const [color, setColor] = useState(0);
  const [isChangeface, setIsChangeface] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      handleRotate();
      handleCircleRotate();
    }, 300);
  }, []);

  const handleRotate = () => {
    setRotate(rotate + 90);

    setIsChangeface(true);
    setTimeout(() => {
      setIsChangeface(false);
    }, 500);

    if (color > 1) {
      setColor(0);
      return;
    }

    setColor(color + 1);
  };

  const handleCircleRotate = () => {
    if (circelId >= 3) {
      setCircleId(1);
      setCircleRotate(circleRotate + 100);
      return;
    }
    setCircleId(circelId + 1);

    setCircleRotate(circleRotate + 130);
  };

  return (
    <div
      className="md:w-[1100px] sm:w-[650px] w-[500px] min-h-[550px] relative shadow-2xl flex 
    sm:mx-10 mx-2"
    >
      <div
        className="w-full lg:h-[550px] h-[1000px] relative top-0 left-0 overflow-hidden lg:rounded-r-3xl bg-white
      flex gap-1 lg:flex-row flex-col"
      >
        <div className="lg:w-1/3 w-full lg:h-[550px] md:h-[900px] h-[700px] relative">
          <div className=" rotate-[25deg] absolute -top-[70px] -left-[90px]">
            <div
              className={`sm:w-[400px] sm:h-[400px] w-[320px] h-[320px] ${
                rotate != 0 && "transition-all duration-1000 ease-in-out"
              }
          ${arr[color]} rounded-[60px] `}
              style={{ transform: `rotate(${rotate}deg)` }}
            ></div>
          </div>

          <div
            className="w-[300px] h-[70px] rounded-full bg-white shadow-2xl absolute lg:bottom-5 bottom-0 right-5 
          flex justify-between items-center px-5"
          >
            <BiRuler color="black" size={23} />
            <HiPencil color="black" size={23} />
            <div className="flex gap-1">
              <GrUserWorker color="black" size={23} />
              <IoMdArrowDropdown color="black" size={20} />
            </div>
            <button
              className="w-[55px] h-[55px] bg-black rounded-md flex justify-center items-center
            hover:bg-opacity-100 bg-opacity-90"
              onClick={() => {
                handleRotate();
                handleCircleRotate();
              }}
            >
              <BsArrowRight color="white" size={20} />
            </button>
          </div>
        </div>

        <RightSide
          arr={arr}
          color={color}
          isChangeface={isChangeface}
          circelId={circelId}
        />
      </div>

      <div className="absolute top-0 left-0 sm:w-[400px] sm:h-[400px] w-[320px]  z-10">
        <img
          src={WhiteRing}
          alt="White Ring"
          className="sm:w-[100px] w-[80px] absolute right-24"
        />
        <img
          src={Chain}
          alt="White Ring"
          className="sm:w-[60px] w-[40px] absolute sm:-left-8 -left-2 top-0 -rotate-45"
        />
        <img
          src={HalfEgg}
          alt="White Ring"
          className="sm:w-[100px] w-[60px] absolute left-0 sm:bottom-24 sm:top-auto top-40 
          bottom-auto -rotate-45"
        />
      </div>

      <ItemCircle circelId={circelId} circleRotate={circleRotate} />
    </div>
  );
};

export default Main;
