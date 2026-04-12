import React from "react";
import Navbar from "../components/Navbar";
import Rctpic from "../assets/react.svg";

const Main = () => {
  return (
    <div className="bg-cover bg-[linear-gradient(30deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_66%,rgba(49,221,255,1)_100%)] bg-center bg-no-repeat min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="container mx-auto px-6 lg:px-8 pt-32 md:pt-40 lg:pt-20 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-12 mt-10 md:mt-20 lg:mt-[150px]">
        {/* Matn qismi */}
        <div className="flex flex-col gap-2 md:gap-4 animate__animated animate__fadeInLeft max-w-2xl text-[#fff] text-center lg:text-left items-center lg:items-start">
          <p className="text-2xl md:text-4xl font-semibold cursor-default select-none opacity-90">
            Hello,
          </p>
          <p className="text-2xl md:text-4xl cursor-default select-none">
            My name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#31ddff] cursor-default select-none leading-tight">
            Mirziyod Rizoqulov
          </h1>
          <p className="text-2xl md:text-4xl cursor-default select-none font-medium text-gray-300">
            I'm a Frontend/Backend Developer
          </p>

          {/* Mobil uchun qo'shimcha tugma (ixtiyoriy) */}
          <div className="mt-6 lg:hidden">
            <a
              href="#Loyihalar"
              className="bg-[#31ddff] text-black px-8 py-3 rounded-full font-bold"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Rasm/Logo qismi */}
        <div className="flex justify-center items-center animate__animated animate__zoomIn">
          <a
            href="https://react.dev"
            className="cursor-pointer transition-transform hover:scale-110 duration-300"
          >
            <img
              src={Rctpic}
              alt="React Logo"
              className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[400px] react-logo drop-shadow-[0_0_30px_rgba(49,221,255,0.3)]"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Main;
