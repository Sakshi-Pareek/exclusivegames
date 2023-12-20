import React from "react";
import BtnBorder from "../assets/images/webp/btn_border.webp";
import CasinoNight from "../assets/images/webp/casino-night.webp";

const Elegirnos = () => {
  return (
    <div className="md:bg-portexture xl:bg-full md:bg-cover max-md:bg-white md:bg-no-repeat">
      <div className="max-w-[1140px] px-3 mx-auto lg:py-64 md:py-48 sm:py-16 py-12">
        <div className="flex flex-wrap-reverse flex-row items-center md:justify-between justify-center md:gap-0 gap-8">
          <div className="md:w-1/2 sm:w-10/12 w-full xl:pr-0 md:pr-10">
            <h2 className="text-slate-950 lg:text-5xl sm:text-4xl text-3xl font-normal ff_anton md:leading-[57.60px] lg:mb-4 mb-3">
              Por qué elegirnos
            </h2>
            <p className="max-w-[526px] opacity-80 text-slate-950 lg:text-base text-sm font-medium ff_inter leading-relaxed lg:mb-6 mb-4 ">
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              todo lo invertido en fichas en la moneda que elijas. En Exclusive
              Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              interactivos que más pide la gente. Con Exclusive Games empezás a
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
            <div className="relative cursor-pointer">
              <a
                href=""
                className="px-[46px] py-[13px] bg-gradient-to-tl from-sky-400 to-green-300 rounded-[41px] text-slate-950 text-base font-bold ff_inter leading-relaxed inline-block"
              >
                Aprende más
              </a>
              <img
                src={BtnBorder}
                alt="BtnBorder"
                className="absolute max-w-[100px] w-100 bottom-[-7px] left-[-4px]"
              />
            </div>
          </div>
          <div className="md:w-1/2 sm:w-10/12 w-full">
            <img
              src={CasinoNight}
              alt="CasinoNight"
              className="rounded-2xl md:max-w-[558px] w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elegirnos;
