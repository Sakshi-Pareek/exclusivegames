import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "./Icon";

const Frecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accor = [
    {
      title:
        "¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?",
    },
    {
      title: "¿Cómo garantizan la seguridad de las operaciones en sus juegos?",
    },
    {
      title:
        "¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?",
    },
    {
      title: "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?",
    },
    {
      title: "¿Qué métodos de pago aceptan?",
    },
    {
      title: "¿Puedo probar sus juegos antes de comprometerme?",
    },
  ];
  return (
    <>
      <div className="max-w-[1140px] px-3 mx-auto relative">
        <div className="w-[300px] h-[300px] opacity-70 bg-gradient-to-tl from-sky-400 to-green-300 rounded-full blur-[179px] absolute left-[-40%] top-[-20%] z-[-1]"></div>
        <h2
          className="text-center text-white lg:text-5xl md:text-4xl text-3xl font-normal ff_anton uppercase leading-[57.60px] lg:mb-14 md:mb-10 mb-7"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-easing="linear"
        >
          Preguntas más frecuentes
        </h2>
        <div className="max-w-[970px] mx-auto flex flex-col sm:gap-8 gap-5 mt-1">
          {accor.map((p, index) => (
            <div
              key={index}
              className="sm:px-5 px-3 sm:py-4 py-3 rounded-md border border-white border-opacity-50"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              <div
                className="flex justify-between sm:gap-20 gap-10 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="text-white md:text-xl sm:text-lg text-sm font-normal ff_anton sm:leading-relaxed">
                  {p.title}
                </div>
                <div className="text-white h-6 w-6">
                  {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                </div>
              </div>
              <div
                className={`transition-max-h duration-300 overflow-hidden opacity-80 text-white sm:text-base text-xs transition-all !ease-linear font-medium ff_inter leading-relaxed ${
                  openIndex === index
                    ? "max-h-screen h-auto mt-2"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                En Exclusive Games, ofrecemos experiencias únicas y
                personalizadas, respaldadas por más de 15 años de dedicación al
                desarrollo de multiplataformas para juegos de azar.
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Frecuentes;
