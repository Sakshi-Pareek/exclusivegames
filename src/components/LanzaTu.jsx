import React from "react";
import LanzatuBgLayer from "../assets/images/webp/lunazatu.webp";
import BtnBorder from "../assets/images/webp/btn_border.webp";

const LanzaTu = () => {
  return (
    <>
      <div
        className="max-w-[1140px] px-3 mx-auto"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-easing="linear"
      >
        <div className="relative flex flex-col justify-center items-center rounded-2xl border border-white border-opacity-50 md:py-[103px] sm:py-20 py-14 overflow-hidden xl:my-36 lg:my-24 sm:my-16 my-14 max-sm:px-4 hover:shadow-gradient_box transition-all duration-300 ease-linear">
          <img
            src={LanzatuBgLayer}
            alt="LanzatuBgLayer"
            className="absolute left-0 top-0 h-full w-full z-[0] opacity-80 mix-blend-lighten"
          />
          <p className="text-white sm:text-[32px] text-3xl text-center font-normal ff_anton leading-[41.60px]">
            lanza tu propia plataforma en sólo 2 semanas
          </p>
          <div className="relative cursor-pointer md:mt-10 mt-7 group">
            <a
              href=""
              className="px-[46px] py-[13px] bg-gradient-to-tl from-sky-400 to-green-300 rounded-[41px] text-slate-950 text-base font-bold ff_inter leading-relaxed inline-block group-hover:shadow-btn_gradient_shadow2 transition-all duration-300 ease-linear"
            >
              Leer más
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

export default LanzaTu;
