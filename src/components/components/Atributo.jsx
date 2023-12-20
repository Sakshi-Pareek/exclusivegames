import React from "react";
import { Innovación, Inteligencia, Proactividad } from "./Icon";
import GradientArrowTop from "../assets/images/webp/gradient_arrow_top.webp";
import GradientArrowBottom from "../assets/images/webp/gradient_arrow_bottom.webp";
import JetX from "../assets/images/webp/jetX.webp";
import FaceDesign from "../assets/images/webp/face_design.webp";
import Jarvis from "../assets/images/webp/jrrvis2023.webp";
import LuckeyFoetune from "../assets/images/webp/luckeyFortune.webp";
import Delight from "../assets/images/webp/delight.webp";
import Cashing from "../assets/images/webp/cashingRPG.webp";
import BtnBorder from "../assets/images/webp/btn_border.webp";
import WhiteBtnBorder from "../assets/images/webp/transparent_btn_border.webp";

const Atributo = () => {
  const data = [
    {
      id: 1,
      image: JetX,
      discription: JetX,
    },
    {
      id: 2,
      image: FaceDesign,
      discription: FaceDesign,
    },
    {
      id: 3,
      image: Jarvis,
      discription: Jarvis,
    },
    {
      id: 4,
      image: LuckeyFoetune,
      discription: LuckeyFoetune,
    },
    {
      id: 5,
      image: Delight,
      discription: Delight,
    },
    {
      id: 6,
      image: Cashing,
      discription: Cashing,
    },
  ];
  return (
    <>
      <div className="md:bg-atributotexture xl:bg-full md:bg-cover max-md:bg-white md:bg-no-repeat">
        <div className="max-w-[1140px] px-3 mx-auto lg:py-60 md:py-40 sm:py-16 py-12">
          <div className="md:mb-36 sm:mb-28 mb-20">
            <h2 className="text-slate-950 md:text-5xl sm:text-4xl text-3xl font-normal ff_anton md:leading-[57.60px] text-center lg:mb-14 md_mb-10 mb-8">
              Nuestros Atributos de Marca
            </h2>
            <div className="flex flex-wrap flex-row md:justify-between justify-center pt-1 relative md:gap-0 gap-10">
              <img
                src={GradientArrowTop}
                alt="GradientArrowTop"
                className="absolute xl:max-w-[273px] lg:max-w-[200px] md:max-w-[170px] max-w-[150px] w-full xl:left-[19%] lg:left-[22%] left-[20%] top-[7%] md:block hidden"
              />
              <img
                src={GradientArrowBottom}
                alt="GradientArrowBottom"
                className="absolute xl:max-w-[273px] lg:max-w-[200px] md:max-w-[170px] max-w-[150px] w-full xl:right-[19%] lg:right-[22%] top-[23%] md:right-[20%] md:block hidden"
              />
              <div className="md:w-3/12">
                <div className="text-center">
                  <div className="w-[100px] h-[100px] pl-[25.50px] pr-[26.50px] py-[26px] bg-green-300 bg-opacity-10 rounded-[73px] justify-center items-center inline-flex mb-4">
                    <Inteligencia />
                  </div>
                  <h3 className="text-center text-slate-950 sm:text-xl text-lg font-normal ff_anton leading-relaxed mb-2.5">
                    Inteligencia
                  </h3>
                  <p className="max-w-[263px] mx-auto opacity-80 text-center text-slate-950 sm:text-base text-sm font-medium ff_inter leading-relaxed">
                    Comprendemos a la perfección los gustos de las personas y el
                    mundo del gaming.
                  </p>
                </div>
              </div>
              <div className="md:w-3/12">
                <div className="text-center">
                  <div className="w-[100px] h-[100px] pl-[25.50px] pr-[26.50px] py-[26px] bg-green-300 bg-opacity-10 rounded-[73px] justify-center items-center inline-flex mb-4 group">
                    <Proactividad />
                  </div>
                  <h3 className="text-center text-slate-950 sm:text-xl text-lg font-normal ff_anton leading-relaxed mb-2.5">
                    Proactividad
                  </h3>
                  <p className="max-w-[263px] mx-auto opacity-80 text-center text-slate-950 sm:text-base text-sm font-medium ff_inter leading-relaxed">
                    Somos creadores de cambios que exploran nuevas formas de
                    entretenimiento.
                  </p>
                </div>
              </div>
              <div className=" md:w-3/12">
                <div className="text-center">
                  <div className="w-[100px] h-[100px] pl-[25.50px] pr-[26.50px] py-[26px] bg-green-300 bg-opacity-10 rounded-[73px] justify-center items-center inline-flex mb-4">
                    <Innovación />
                  </div>
                  <h3 className="text-center text-slate-950 sm:text-xl text-lg font-normal ff_anton leading-relaxed mb-2.5">
                    Innovación
                  </h3>
                  <p className="max-w-[263px] mx-auto opacity-80 text-center text-slate-950 sm:text-base text-sm font-medium ff_inter leading-relaxed">
                    Pensamos fuera de la caja para estar siempre un paso
                    adelante.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-center text-slate-950 md:text-5xl sm:text-4xl text-3xl font-normal ff_anton md:leading-[57.60px] mb-4">
              Slots
            </h4>
            <p className="max-w-[904px] opacity-80 text-center text-slate-950 sm:text-base text-sm font-medium ff_inter leading-relaxed mx-auto sm:mb-10 mb-8">
              En Exclusive Games, ofrecemos una selección de más de 600 juegos
              de los principales desarrolladores, como Aristocrat, Amatic, EGT,
              Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
              trabaja incansablemente para innovar y ampliar nuestra oferta de
              experiencias, garantizando la máxima seguridad con operaciones
              protegidas por cifrado SSL de 256 bits.
            </p>
            <div className="flex flex-row flex-wrap sm:justify-between justify-center">
              {data.map((a, index) => (
                <div
                  className="md:w-4/12 sm:w-6/12 w-full md:p-3 p-2"
                  key={index}
                >
                  <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                    <img
                      src={a.image}
                      alt={a.discription}
                      className="rounded-lg sm:max-w-[364px] w-full"
                    />
                    <div className="w-full h-full bg-black bg-opacity-70 absolute top-0 left-[-100%] flex justify-center items-center group-hover:left-0 transition-all duration-500 ease-in-out">
                      <div className="relative">
                        <a
                          href=""
                          className="ff_inter text-base font-bold text-white rounded-[41px] border border-white border-solid py-[13px] px-[46px]"
                        >
                          Jugar
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
            <div className="relative cursor-pointer sm:mt-8 mt-4">
              <a
                href=""
                className="px-[46px] py-[13px] bg-gradient-to-tl from-sky-400 to-green-300 rounded-[41px] text-slate-950 text-base font-bold ff_inter leading-relaxed inline-block"
              >
                Mostrar más
              </a>
              <img
                src={BtnBorder}
                alt="BtnBorder"
                className="absolute max-w-[100px] w-100 bottom-[-7px] left-[-4px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Atributo;
