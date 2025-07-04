import React from "react";
import Logo_1 from "../assets/asd.png";

const Footer = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-6 mt-20">
        <div className="flex items-center justify-around w-full ">
          <div>
            <img src={Logo_1} alt="Logo" className="h-12" />
          </div>
          <div className="flex items-center justify-around gap-8">
            <p className="select-none cursor-default">+998 94 385 4449</p>
            <p className="select-none cursor-default">kuldashevalibek12@gmail.com</p>
          </div>
        </div>
        <hr className="w-300"/>
        <div>
          <p>Copyright © 2025.All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
