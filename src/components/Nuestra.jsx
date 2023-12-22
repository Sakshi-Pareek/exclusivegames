import React from "react";
import PokerWithFriend from "../assets/images/webp/PokerWithFriend.webp";
import Aviator from "../assets/images/webp/aviator.webp";
import { RightArrow } from "./Icon";

const Nuestra = () => {
  return (
    <>
      <div className="relative" id="mision">
        <div className="w-[400px] h-[400px] opacity-90 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[179px] absolute -right-[10%] -bottom-[70%] z-[-1]"></div>
        <div className="w-[100px] h-[100px] opacity-95 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[100px] absolute top-1/2 left-1/2 z-[-1]"></div>
        <div className="w-[400px] h-[400px] opacity-70 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[180px] absolute z-[-1] top-7 left-[-200px]"></div>
        <div className="max-w-[1140px] px-3 mx-auto lg:mb-24 md:my-16 my-10">
          <div className="flex flex-row flex-wrap sm:justify-between justify-center sm:gap-0 gap-10">
            <div
              className="sm:w-1/2 sm:pr-8"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              <div className="h-full flex flex-col justify-between">
                <img
                  src={PokerWithFriend}
                  alt="PokerWithFriend"
                  className="rounded-2xl sm:mb-[60px] mb-8 w-full max-w-[538px] hover:scale-[0.98] transition-all duration-300 ease-linear cursor-pointer"
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
            <div
              className="sm:w-1/2 sm:pl-8"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              <div className="h-full flex flex-col justify-between">
                <img
                  src={Aviator}
                  alt="Aviator"
                  className="rounded-2xl sm:mb-[60px] mb-8 w-full max-w-[538px] max-sm:mx-auto bolck sm:hidden  hover:scale-[0.98] transition-all duration-300 ease-linear cursor-pointer"
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
                  className="rounded-2xl mt-[60px] w-full max-w-[538px] max-sm:mx-auto sm:block hidden  hover:scale-[0.98] transition-all duration-300 ease-linear cursor-pointer"
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
