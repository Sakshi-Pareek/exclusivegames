import React from "react";
import JackpotImg from "../assets/images/webp/jackpot.webp";
import PlataformaBgLayer from "../assets/images/webp/plateform_bg_shade.webp";
import Ezugi from "../assets/images/webp/ezugi.webp";
import Roulette from "../assets/images/webp/roulette.webp";
import LiveBetting from "../assets/images/webp/live-betting.webp";
import WhiteBtnBorder from "../assets/images/webp/transparent_btn_border.webp";
import { DoubleTick } from "./Icon";

const Jackpot = () => {
  const items = [
    {
      id: 1,
      image: Ezugi,
      discription: Ezugi,
    },
    {
      id: 2,
      image: Roulette,
      discription: Roulette,
    },
    {
      id: 3,
      image: LiveBetting,
      discription: LiveBetting,
    },
  ];
  return (
    <>
      <div className="bg-jackpottexture bg-full bg-no-repeat bg-center relative">
        <div className="w-[400px] h-[400px] opacity-90 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[179px] absolute -right-[10%] bottom-[0] z-[-1]"></div>
        <div className="max-w-[1140px] px-3 mx-auto xl:py-20 md:pt-0 md:pb-16 py-10">
          <div className="flex flex-wrap flex-row items-center justify-center md:gap-0 gap-8">
            <div
              className="md:w-6/12 sm:w-10/12 w-10/12 lg:mx-0 mx-auto xl:pr-10 md:pr-7"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              <img
                src={JackpotImg}
                alt="Jackpot"
                className="max-w-[558px] w-full rounded-2xl  hover:scale-[0.98] transition-all duration-300 ease-linear cursor-pointer"
              />
            </div>
            <div
              className="md:w-6/12 sm:w-10/12 w-full"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              <h2 className="text-white xl:text-5xl lg:text-4xl text-3xl font-normal ff_anton lg:leading-[57.60px] lg:mb-4 mb-2">
                Potenciando sus elecciones
              </h2>
              <p className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed xl:mb-6 lg:mb-4 mb-2">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              <ul className="lg:mb-6 mb-3 flex flex-col lg:gap-3 gap-1">
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Tecnología HTML5
                </li>
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Versión PC y móvil
                </li>
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Control de RTP (controlás qué porcentaje pagar)
                </li>
                <li className="xl:pr-20 opacity-80 text-white lg:text-base text-sm font-medium ff_inter lg:leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Bonos editables, happy hours, Jackpots, códigos promocionales.
                </li>
                <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
                  <span>
                    <DoubleTick />
                  </span>
                  Aplicación para android y windows de regalo.
                </li>
              </ul>
              <p className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter lg:leading-relaxed">
                Te reintegramos todo lo invertido en fichas en la moneda que
                elijas.
              </p>
            </div>
          </div>
          <div
            className="max-w-[1043px] mx-auto relative rounded-2xl border border-white border-opacity-50 md:py-24 sm:py-20 py-16 overflow-hidden xl:my-36 lg:my-24 sm:my-16 my-14 group cursor-pointer hover:shadow-gradient_box transition-all duration-300 ease-linear"
            // data-aos="flip-down"
            // data-aos-duration="800"
            // data-aos-delay="300"
            // data-aos-easing="linear"
          >
            <img
              src={PlataformaBgLayer}
              alt="PlataformaTopLeftImg"
              className="absolute left-0 top-0 max-w-[1043px] h-full w-full z-[1] opacity-95 mix-blend-lighten"
            />
            <p className="max-w-[520px] text-center text-white lg:text-5xl sm:text-[40px] text-3xl font-normal ff_anton m-auto !leading-[57.60px] relative z-[2] sm:px-0 px-4 group-hover:scale-[0.9] transition-all duration-300 ease-linear">
              lanza tu propia plataforma en sólo 2 semanas
            </p>
          </div>
          <div>
            <h3
              className="text-center text-white lg:text-5xl sm:text-[40px] text-4xl font-normal ff_anton sm:leading-[57.60px] md:mb-14 mb-8"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              Juegos en vivo
            </h3>
            <div className="flex flex-row flex-wrap mt-1 lg:gap-0 md:gap-14 sm:gap-8 gap-4 lg:justify-between justify-center">
              {items.map((x, index) => (
                <div
                  className="lg:w-4/12 sm:w-5/12 w-11/12 lg:px-3"
                  key={index}
                  data-aos="flip-left"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-easing="linear"
                >
                  <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                    <img
                      src={x.image}
                      alt={x.discription}
                      className="rounded-lg lg:max-w-[364px] w-full"
                    />
                    <div className="w-full h-full bg-black bg-opacity-70 absolute top-0 left-[-100%] flex justify-center items-center group-hover:left-0 transition-all duration-500 ease-in-out">
                      <div className="relative group">
                        <a
                          href=""
                          className="ff_inter text-base font-bold text-white rounded-[41px] border border-white border-solid py-[13px] px-[46px] hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                        >
                          Reproducir ahora
                        </a>
                        <img
                          src={WhiteBtnBorder}
                          alt="WhiteBtnBorder"
                          className="absolute bottom-[-17px] left-[-5px] max-w-[104px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jackpot;
