import React from "react";
import PreLoader from "../assets/images/webp/WebLogo.webp";

const Preloader = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col sm:gap-6 gap-4 justify-center items-center fixed bg-[#00141b]">
        <img
          src={PreLoader}
          alt="PreLoader"
          className="md:max-w-[210px] max-w-[170px] w-full loaderanimat"
        />
        <div className="loader md:w-[210px] w-[170px] h-1"></div>
      </div>
    </>
  );
};

export default Preloader;
