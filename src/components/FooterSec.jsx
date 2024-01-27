import React from "react";
import WebLogo from "../assets/images/webp/WebLogo.webp";
import { Facebook, Instagram, Linkedin, Message, TellIcon } from "./Icon";

const FooterSec = () => {
  return (
    <>
      <div className="bg-black relative">
        <div className="w-[170px] h-[170px] lg:opacity-90 opacity-50 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[100px] absolute left-[-7%] bottom-[-10%] z-[0]"></div>
        <div className="w-[170px] h-[170px] lg:opacity-90 opacity-50 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[100px] absolute lg:right-[-7%] right-[-25%] bottom-[25%] z-[0]"></div>
        <div className="max-w-[1140px] px-3 mx-auto md:py-16 py-12 ">
          <div className="flex flex-row flex-wrap justify-between">
            <div className="lg:w-4/12 sm:w-6/12 w-full">
              <a href="">
                <img
                  src={WebLogo}
                  alt="WebLogo"
                  className="w-full h-[43px] max-w-[210px]"
                />
              </a>
              <p className="max-w-[369px] opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed mt-4 mb-6">
                En Exclusive Games somos un equipo apasionado de personas
                dedicadas al desarrollo de multiplataformas para juegos de azar
              </p>
              <ul className="flex gap-3 items-center">
                <li className="hover:-translate-y-2 transition-all duration-300 ease-linear">
                  <a href="http://www.instagram.com" target="_blank">
                    <Instagram />
                  </a>
                </li>
                <li className="hover:-translate-y-2 transition-all duration-300 ease-linear">
                  <a href="http://www.facebook.com" target="_blank">
                    <Facebook />
                  </a>
                </li>
                <li className="hover:-translate-y-2 transition-all duration-300 ease-linear">
                  <a href="http://www.linkedin.com" target="_blank">
                    <Linkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-2/12 md:w-4/12 sm:w-5/12 w-full flex lg:justify-center sm:mt-2.5 mt-10">
              <ul className="flex flex-col gap-3 lg:pl-10">
                <li className="text-white sm:text-base text-sm font-bold ff_inter mb-1 leading-relaxed">
                  Menú principal
                </li>
                <li className="opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear group">
                  <a
                    href=""
                    className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    Hogar
                  </a>
                </li>
                <li className="opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear group">
                  <a
                    href=""
                    className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    Misión
                  </a>
                </li>
                <li className="opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear group">
                  <a
                    href=""
                    className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    Tragamonedas
                  </a>
                </li>
                <li className="opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear group whitespace-nowrap">
                  <a
                    href=""
                    className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li className="opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear group">
                  <a
                    href=""
                    className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    Ofertas
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12 sm:w-6/12 w-full flex lg:justify-center lg:mt-2.5 mt-10">
              <ul className="flex flex-col gap-3">
                <li className="text-white sm:text-base text-sm font-bold ff_inter mb-1 leading-relaxed">
                  Atención al cliente
                </li>
                <li className="opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear group">
                  <a
                    href=""
                    className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    ¿Necesitas ayuda?
                  </a>
                </li>
                <li className="opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear group">
                  <a
                    href=""
                    className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    política de privacidad
                  </a>
                </li>
                <li className="opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear group">
                  <a
                    href=""
                    className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    Términos de servicios
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12 md:w-4/12 sm:w-5/12 w-full flex lg:justify-center lg:mt-2.5 mt-10">
              <ul className="flex flex-col gap-3">
                <li className="text-white sm:text-base text-sm font-bold ff_inter mb-1 leading-relaxed">
                  Ponerse en contacto
                </li>
                <li className="group flex gap-2 items-center">
                  <span>
                    <Message />
                  </span>
                  <a
                    href="mailto:juegosexclusivos@gmail.com"
                    className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear"
                  >
                    juegosexclusivos@gmail.com
                  </a>
                </li>
                <li className="group flex gap-2 items-center">
                  <span>
                    <TellIcon />
                  </span>
                  <a
                    href="tel:(101)342-7873"
                    className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out opacity-80 text-white sm:text-base text-sm font-medium ff_inter leading-relaxed hover:opacity-100 transition-all duration-200 ease-linear"
                  >
                    (101)342-7873
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="w-full h-[0px] opacity-10 border border-white" />
        <p className="max-sm:px-2 py-5 opacity-50 text-center text-white sm:text-base text-sm font-medium ff_inter leading-relaxed">
          © Juegos exclusivos - Todos los derechos reservados 2023
        </p>
      </div>
    </>
  );
};

export default FooterSec;
