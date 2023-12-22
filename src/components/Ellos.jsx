import React from "react";
import Girosgratis from "../assets/images/webp/girosgratis.webp";
import European from "../assets/images/webp/european.webp";
import Happyhours from "../assets/images/webp/happyhours.webp";
import WhiteBtnBorder from "../assets/images/webp/transparent_btn_border.webp";

const Ellos = () => {
  const cards = [
    {
      id: 1,
      image: Girosgratis,
      discription: Girosgratis,
    },
    {
      id: 2,
      image: European,
      discription: European,
    },
    {
      id: 3,
      image: Happyhours,
      discription: Happyhours,
    },
  ];
  return (
    <>
      <div className="max-w-[1140px] px-3 mx-auto xl:my-36 lg:my-24 sm:my-16 my-14">
        <h2
          className="text-center text-white md:text-5xl sm:text-4xl text-3xl font-normal ff_anton sm:leading-[57.60px] md:mb-16 mb-8"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          Ellos eligieron apostar con nosotros
        </h2>
        <div className="flex flex-row flex-wrap mt-1 lg:gap-0 md:gap-14 sm:gap-8 gap-5 lg:justify-between justify-center">
          {cards.map((e, index) => (
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
                  src={e.image}
                  alt={e.discription}
                  className="rounded-lg lg:max-w-[364px] w-full"
                />
                <div className="w-full h-full bg-black bg-opacity-70 absolute top-0 left-[-100%] flex justify-center items-center group-hover:left-0 transition-all duration-500 ease-in-out">
                  <div className="relative group">
                    <a
                      href=""
                      className="ff_inter text-base font-bold text-white rounded-[41px] border border-white border-solid py-[13px] px-[46px] hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                    >
                      Rcasinovip
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
        <p
          className="max-w-[883px] mx-auto text-center text-white sm:text-base text-sm font-semibold ff_inter leading-relaxed mb-5 sm:mt-9 mt-5"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
          de emocionantes experiencias de juego. Ahora, la próxima apuesta está
          en tus manos.
          <br /> Elige ganar. Elige exclusive game.
        </p>
      </div>
    </>
  );
};

export default Ellos;
