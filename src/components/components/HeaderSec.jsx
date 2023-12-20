import React, { useState } from "react";
import MeniIcon from "../assets/images/png/menu_icon.png";
import WebLogo from "../assets/images/webp/WebLogo.webp";
import BtnBorder from "../assets/images/webp/btn_border.webp";
import WhiteBtnBorder from "../assets/images/webp/transparent_btn_border.webp";

const HeaderSec = () => {
  const [nav, setNav] = useState(false);
  if (nav === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg-heropattern bg-cover bg-no-repeat bg-center min-h-screen flex flex-col overflow-hidden">
        <div className="bg-white bg-opacity-10 backdrop-blur-[52px] relative z-10">
          <nav className=" max-w-[1140px] px-3 py-4 mx-auto">
            <div className="flex justify-between items-center">
              <a href="">
                <img
                  src={WebLogo}
                  alt="WebLogo"
                  className="w-full h-[43px] sm:max-w-[210px] max-w-[170px]"
                />
              </a>
              <div
                className={`${
                  nav ? "max-lg:left-0" : "max-lg:left-full"
                } max-lg:fixed z-50 max-lg:w-full max-lg:top-0 max-lg:min-h-screen max-lg:bg-black max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:z-10 transition-all duration-300 ease-linear]`}
              >
                <div
                  className="lg:hidden max-lg:absolute max-lg:top-4 max-lg:right-8 text-white no-underline text-2xl font-bold cursor-pointer max-lg:flex-col"
                  onClick={() => setNav(false)}
                >
                  X
                </div>
                <ul className="flex max-lg:flex-col gap-7 items-center mb-0 ps-0">
                  <li onClick={() => setNav(false)}>
                    <a
                      href=""
                      className="ff_inter text-base font-medium text-white opacity-[0.8] hover:opacity-100 transition-all duration-300 ease-in-out"
                    >
                      Hogar
                    </a>
                  </li>
                  <li onClick={() => setNav(false)}>
                    <a
                      href=""
                      className="ff_inter text-base font-medium text-white opacity-[0.8] hover:opacity-100 transition-all duration-300 ease-in-out"
                    >
                      Misión
                    </a>
                  </li>
                  <li onClick={() => setNav(false)}>
                    <a
                      href=""
                      className="ff_inter text-base font-medium text-white opacity-[0.8] hover:opacity-100 transition-all duration-300 ease-in-out"
                    >
                      Tragamonedas
                    </a>
                  </li>
                  <li onClick={() => setNav(false)}>
                    <a
                      href=""
                      className="ff_inter text-base font-medium text-white opacity-[0.8] hover:opacity-100 transition-all duration-300 ease-in-out"
                    >
                      Por qué elegirnos
                    </a>
                  </li>
                  <li onClick={() => setNav(false)}>
                    <a
                      href=""
                      className="ff_inter text-base font-medium text-white opacity-[0.8] hover:opacity-100 transition-all duration-300 ease-in-out"
                    >
                      Ofertas
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative hidden lg:block">
                <a
                  href=""
                  className="ff_inter text-base font-bold text-white rounded-[41px] border border-white border-solid py-[13px] px-[46px]"
                >
                  Acceso
                </a>
                <img
                  src={WhiteBtnBorder}
                  alt="WhiteBtnBorder"
                  className="absolute bottom-[-17px] left-[-5px] max-w-[104px]"
                />
              </div>
              <div
                className="lg:hidden text-white mb-0"
                onClick={() => setNav(true)}
              >
                <img
                  src={MeniIcon}
                  alt="MeniIcon"
                  className="max-w-[40px] max-h-[40px] cursor-pointer"
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="flex-grow flex justify-center items-center flex-col max-w-[1140px] px-3 mx-auto">
          <h1 className="max-w-[505px] text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-normal ff_anton uppercase !leading-[120%] mb-4">
            Exclusive Games. Pasión por ganar
          </h1>
          <p className="max-w-[727px] opacity-80 text-center text-white sm:text-base text-sm font-medium ff_inter leading-relaxed mb-10">
            En Exclusive Games somos un equipo apasionado de personas dedicados
            al desarrollo de multiplataformas para juegos de azar. A lo largo de
            nuestra vida consumimos todo tipo de juegos hasta que un día
            decidimos crear los propios.
          </p>
          <div className="relative">
            <a
              href=""
              className="px-[46px] py-[13px] bg-gradient-to-tl from-sky-400 to-green-300 rounded-[41px] text-slate-950 text-base font-bold ff_inter leading-relaxed"
            >
              Empezar
            </a>
            <img
              src={BtnBorder}
              alt="BtnBorder"
              className="absolute max-w-[100px] w-100 bottom-[-16px] left-[-6px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSec;
