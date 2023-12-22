import React from "react";
import { DoubleTick } from "./Icon";
import BtnBorder from "../assets/images/webp/btn_border.webp";
import Coin from "../assets/images/webp/coin.webp";
import CardWithBreak from "../assets/images/webp/cardwithbreak.webp";
import CardWithheart from "../assets/images/webp/cardwithheart.webp";
import Dice from "../assets/images/webp/dice.webp";

const Luxury = () => {
  return (
    <>
      <div className="max-w-[1140px] px-3 mx-auto">
        <div
          className="border border-white border-opacity-50 rounded-2xl bg-luxurytexture bg-cover bg-center py-12 lg:px-10 sm:px-6 px-2 lg:mb-16 md:mb-16 mb-12 flex flex-col justify-center items-center relative"
          data-aos="flip-down"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          <img
            src={Coin}
            alt="Coin"
            className="lg:max-w-[78px] max-w-[50px] w-full absolute top-28 xl:left-48 lg:left-36 left-20  md:block hidden element"
          />
          <img
            src={CardWithBreak}
            alt="CardWithBreak"
            className="xl:max-w-[176px] lg:max-w-[140px] max-w-[100px] w-full absolute bottom-24 xl:left-32 lg:left-20 left-8 md:block hidden element"
          />
          <img
            src={CardWithheart}
            alt="CardWithheart"
            className="xl:max-w-[150px] lg:max-w-[120px] max-w-[100px] w-full absolute top-24 lg:right-20 right-14  md:block hidden element"
          />
          <img
            src={Dice}
            alt="Dice"
            className="max-w-[67px] w-full absolute bottom-32 lg:right-40 right-20 md:block hidden element"
          />
          <h2 className="text-center text-white text-[32px] font-normal ff_anton leading-[41.60px] mb-4">
            Luxury
          </h2>
          <p className="max-w-[391px] opacity-80 text-center text-white text-base font-medium ff_inter leading-relaxed mb-8">
            lleva tu experiencia de juego al siguiente nivel. Con todas las
            características de la versión Silver y la potencia adicional de la
            tecnología React .
          </p>
          <h3 className="text-center text-white text-5xl font-normal ff_anton leading-[57.60px] mb-4">
            $9000
          </h3>
          <ul className="lg:mb-9 mb-6 flex flex-col lg:gap-3 gap-1 text-center max-w-[419px] mx-auto">
            <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
              <span>
                <DoubleTick />
              </span>
              <span className="max-w-[387px] mx-auto">
                Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                Cargas manuales
              </span>
            </li>
            <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
              <span>
                <DoubleTick />
              </span>
              <span className="max-w-[387px] mx-auto">
                Control de RTP (controlás qué porcentaje pagar)
              </span>
            </li>
            <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
              <span>
                <DoubleTick />
              </span>
              <span className="max-w-[388px] mx-auto">
                Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales
                Regalo
              </span>
            </li>
            <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter lg:leading-relaxed flex gap-2 items-start">
              <span>
                <DoubleTick />
              </span>
              <span className="max-w-[387px] mx-auto">
                Aplicación para Android y Windows de regalo.
              </span>
            </li>
            <li className="opacity-80 text-white lg:text-base text-sm font-medium ff_inter leading-relaxed flex gap-2 items-start">
              <span>
                <DoubleTick />
              </span>
              <span className="max-w-[386px] mx-auto">
                Tiempo de creación 2 a 3 semanas
              </span>
            </li>
          </ul>
          <div className="relative cursor-pointer group">
            <a
              href=""
              className="px-[46px] py-[13px] bg-gradient-to-tl from-sky-400 to-green-300 rounded-[41px] text-slate-950 text-base font-bold ff_inter leading-relaxed inline-block group-hover:shadow-btn_gradient_shadow2 transition-all duration-300 ease-linear"
            >
              Comprar ahora
            </a>
            <img
              src={BtnBorder}
              alt="BtnBorder"
              className="absolute max-w-[100px] w-100 bottom-[-7px] left-[-4px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Luxury;
