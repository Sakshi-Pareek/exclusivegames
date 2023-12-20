import React from "react";
import { DoubleTick } from "./Icon";
import Cards777 from "../assets/images/webp/cards777.webp";
import WhiteBtnBorder from "../assets/images/webp/transparent_btn_border.webp";

const Platinum = () => {
  return (
    <>
      <div className="max-w-[1140px] px-3 mx-auto">
        <div className="border border-white border-opacity-50 rounded-2xl bg-silvertexture bg-cover bg-center lg:py-16 py-12 lg:px-10 sm:px-6 px-2">
          <div className="flex flex-wrap-reverse flex-row items-center justify-center md:gap-0 gap-8">
          <div className="md:w-2/5 sm:10/12 w-full">
            <h2 className=" text-white sm:text-[32px] text-2xl font-normal ff_anton leading-[41.60px] sm:mb-4 mb-2">
              Platinum
            </h2>
            <p className="max-w-[364px] opacity-80 text-white text-base font-medium ff_inter leading-relaxed lg:mb-8 sm:mb-4 mb-2">
              Diseño totalmente personalizado. Contáctanos para un presupuesto.
            </p>
            <h3 className="text-white lg:text-5xl text-4xl font-normal ff_anton leading-[57.60px] sm:mb-4 mb-2">
              Consultar precio
            </h3>
            <p className="opacity-80 text-center text-white text-base font-medium ff_inter leading-relaxed flex gap-2 items-center md:mb-10 mb-8">
              <span>
                <DoubleTick />
              </span>
              <span>Personalizable </span>
            </p>
            <div className="relative cursor-pointer">
              <a
                href=""
                className="ff_inter text-base font-bold text-white rounded-[41px] border border-white border-solid py-[13px] px-[46px] inline-block"
              >
                Comprar ahora
              </a>
              <img
                src={WhiteBtnBorder}
                alt="WhiteBtnBorder"
                className="absolute bottom-[-7px] left-[-4px] max-w-[104px]"
              />
            </div>
          </div>
          <div className="md:w-7/12 sm:10/12 w-full">
            <img
              src={Cards777}
              alt="Cards777"
              className="max-w-[602px] w-full"
            />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platinum;
