import React from "react";
import PokerWithFriend from "../assets/images/webp/PokerWithFriend.webp";
import Aviator from "../assets/images/webp/aviator.webp";
import { RightArrow } from "./Icon";

const Nuestra = () => {
  return (
    <>
      <div className="relative">
        {/* <div className="max-w-[484px] max-h-[484px] opacity-50 w-full bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[179.9499969482422px] absolute left-0 top-10 z-[2]" />
        <div className="w-[100px] h-[100px] opacity-70 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[131px] absolute" />
        <div className="w-[484px] h-[484px] opacity-50 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[359.90px] absolute " /> */}
        <div className="max-w-[1140px] px-3 mx-auto lg:mb-24 md:my-16 my-10">
          <div className="flex flex-row flex-wrap sm:justify-between justify-center sm:gap-0 gap-10">
            <div className="sm:w-1/2 sm:pr-8">
              <div className="h-full flex flex-col justify-between">
                <img
                  src={PokerWithFriend}
                  alt="PokerWithFriend"
                  className="rounded-2xl sm:mb-[60px] mb-8 w-full max-w-[538px]"
                />
                <h2 className="text-white sm:text-5xl text-2xl font-normal ff_anton leading-[57.60px] mb-4 ">
                  Nuestra Visión
                </h2>
                <p className="max-w-[444px] opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed mb-6">
                  Nuestra visión es ser líderes indiscutibles en la industria de
                  los juegos de azar y llevar nuestra pasión por el
                  entretenimiento más allá de las fronteras. Imagina un mundo
                  donde la emoción y la diversión no tengan límites, y ese es el
                  mundo que queremos crear contigo.
                </p>
                <a href="" className="group">
                  <RightArrow />
                </a>
              </div>
            </div>
            <div className="sm:w-1/2 sm:pl-8">
              <div className="h-full flex flex-col justify-between">
                <img
                  src={Aviator}
                  alt="Aviator"
                  className="rounded-2xl sm:mb-[60px] mb-8 w-full max-w-[538px] max-sm:mx-auto bolck sm:hidden "
                />
                <h2 className="text-white sm:text-5xl text-2xl font-normal ff_anton leading-[57.60px] mb-4">
                  Nuestra Misión
                </h2>
                <p className="max-w-[444px] opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed mb-6">
                  Nuestra misión es simple pero poderosa: proporcionarte la más
                  amplia gama de soluciones de entretenimiento de alta calidad y
                  rentabilidad. Estamos comprometidos a elevar tus expectativas
                  y brindarte experiencias inigualables.
                </p>
                <a href="" className="group">
                  <RightArrow />
                </a>
                <img
                  src={Aviator}
                  alt="Aviator"
                  className="rounded-2xl mt-[60px] w-full max-w-[538px] max-sm:mx-auto sm:block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nuestra;
