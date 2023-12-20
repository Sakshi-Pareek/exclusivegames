import React from "react";
import Mass777 from "../assets/images/webp/mass777.webp";
import { Clientes, Disponibles, Paginas } from "./Icon";

const Mass = () => {
  return (
    <>
      <div className="max-w-[1140px] px-3 mx-auto lg:my-24 lg:pb-10 md:my-16 my-12">
        <div className="flex flex-row flex-wrap justify-center md:gap-0 gap-8">
          <div className="md:w-1/2 sm:w-10/12 w-full lg:pr-5">
            <img
              src={Mass777}
              alt="Mass777"
              className="rounded-2xl md:max-w-[558px] w-full"
            />
          </div>
          <div className="md:w-1/2 sm:w-10/12 w-full lg:pl-5 md:pl-7">
            <h2 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-normal ff_anton lg:leading-[57.60px] xl:mb-12 lg:mb-8 mb-5">
              Más razones para elegirnos
            </h2>
            <ul className="flex flex-col xl:gap-6 gap-4 md:max-w-[374px]">
              <li className="rounded-2xl bg-gradient-to-tl from-sky-400 to-green-300">
               <div className="px-14 xl:py-6 lg:py-4 py-2.5  flex items-center gap-9 rounded-2xl bg-silvertexture bg-cover bg-center bg-[#00141B] m-[2px]">
               <div className="lg:w-[68px] w-[60px] lg:h-[68px] h-[60px] flex justify-center items-center bg-green-300 bg-opacity-10 rounded-[73px] ">
                  <Paginas />
                </div>
                <div>
                  <h3 className="text-white lg:text-[32px] text-xl font-normal lg:leading-[41.60px] ff_anton">
                    200
                  </h3>
                  <p className="text-white lg:text-base text-sm font-medium leading-relaxed ff_inter">
                    Páginas creadas
                  </p>
                </div>
               </div>
              </li>
              <li className="rounded-2xl bg-gradient-to-tl from-sky-400 to-green-300">
                <div className="px-14 xl:py-6 lg:py-4 py-2.5  flex items-center gap-9 rounded-2xl bg-silvertexture bg-cover bg-center bg-[#00141B] m-[2px]">
                <div className="lg:w-[68px] w-[60px] lg:h-[68px] h-[60px] flex justify-center items-center bg-green-300 bg-opacity-10 rounded-[73px]">
                  <Clientes />
                </div>
                <div>
                  <h3 className="text-white lg:text-[32px] text-xl font-normal lg:leading-[41.60px] ff_anton">
                    98%
                  </h3>
                  <p className="text-white lg:text-base text-sm font-medium leading-relaxed ff_inter whitespace-nowrap">
                    Clientes Satisfechas
                  </p>
                </div>
                </div>
              </li>
              <li className="rounded-2xl bg-gradient-to-tl from-sky-400 to-green-300">
                <div className="px-14 xl:py-6 lg:py-4 py-2.5  flex items-center gap-9 rounded-2xl bg-silvertexture bg-cover bg-center bg-[#00141B] m-[2px]">
                <div className="lg:w-[68px] w-[60px] lg:h-[68px] h-[60px] flex justify-center items-center bg-green-300 bg-opacity-10 rounded-[73px]">
                  <Disponibles />
                </div>
                <div>
                  <h3 className="text-white lg:text-[32px] text-xl font-normal lg:leading-[41.60px] ff_anton">
                    200
                  </h3>
                  <p className="text-white lg:text-base text-sm font-medium leading-relaxed ff_inter whitespace-nowrap">
                    Divisas Disponibles
                  </p>
                </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mass;
