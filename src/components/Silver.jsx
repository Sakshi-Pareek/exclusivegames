import React from "react";
import SliverCardImg from "../assets/images/webp/game_circle.webp";
import { DoubleTick } from "./Icon";
import WhiteBtnBorder from "../assets/images/webp/transparent_btn_border.webp";
import CircleShade from "../assets/images/webp/shadow.webp";

const Silver = () => {
  return (
    <>
      <div className="max-w-[1140px] px-3 mx-auto" id="Ofertas">
        <h2
          className="text-center text-white text-5xl font-normal ff_anton sm:leading-[57.60px] mb-4"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          Nuestras ofertas
        </h2>
        <p
          className="text-center text-white text-base font-medium ff_inter leading-relaxed"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          Te ofrecemos las mejores experiencias de juegos para tus clientes.
        </p>
        <div
          className="border border-white border-opacity-50 rounded-2xl bg-silvertexture bg-cover bg-center pt-14 pb-8 lg:px-10 px-6 lg:mt-14 lg:mb-16 md:mb-16 md:mt-10 mb-12 mt-6"
          data-aos="flip-down"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          <div className="flex flex-wrap flex-row items-center md:justify-between justify-center md:gap-0 gap-10">
            <div className="lg:w-7/12 md:w-6/12 sm:w-10/12 relative">
              <div className="w-[100px] h-[100px] opacity-75 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[30px] absolute left-[20%] top-0 z-[-1]"></div>
              <img
                src={SliverCardImg}
                alt="SliverCardImg"
                className="max-w-[650px] w-full mb-6 drop-shadow-2xl"
              />
              <img
                src={CircleShade}
                alt="CircleShade"
                className="w-full relative z-[-1] pr-10 mix-blend-multiply bg-blend-multiply opacity-[0.1] blur-[12px] bg-black mx-auto"
              />
            </div>
            <div className="lg:w-5/12 md:w-6/12 sm:w-10/12">
              <h3 className="text-white text-[32px] font-normal ff_anton lg:leading-[41.60px] lg:mb-4">
                Silver
              </h3>
              <p className="max-w-[401px] opacity-80 text-white lg:text-base text-sm font-medium ff_inter lg:leading-relaxed lg:mb-8 mb-4">
                Diseño predeterminado, atractivo y fácil de navegar, tecnología
                HTLM5.
              </p>
              <h4 className="text-white lg:text-5xl md:text-3xl text-3xl font-normal ff_anton lg:leading-[57.60px] lg:mb-4 mb-2">
                $5000
              </h4>
              <ul className="lg:mb-10 mb-7 flex flex-col lg:gap-3 gap-1">
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                  Cargas manuales
                </li>
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Control de RTP (controlás qué porcentaje pagar)
                </li>
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales
                  Regalo
                </li>
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter lg:leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Aplicación para Android y Windows de regalo.
                </li>
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Tiempo de creación 2 a 3 semanas
                </li>
              </ul>
              <div className="relative cursor-pointer ml-1 group">
                <a
                  href=""
                  className="ff_inter text-base font-bold text-white rounded-[41px] border border-white border-solid py-[13px] px-[46px] inline-block group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Silver;
