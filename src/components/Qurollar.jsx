import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Qurollar = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div>
        <section id="Dasturlar" className="scroll-mt-25">
          <h2 className="text-5xl font-bold mb-4 text-orange-500 text-center cursor-default select-none">
            Asosiy qurollarim
          </h2>
          <div className="flex flex-col gap-8 mt-20">
            <div className="flex justify-around">
              <div
                className=" py-5 px-10 backdrop-blur-md  bg-white/20 relative group w-60 h-[200px] rounded-xl overflow-hidden shadow-lg "
                data-aos="flip-left"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <a href="https://en.wikipedia.org/wiki/HTML" className="text-black text-3xl font-semibold cursor-default select-none">
                    HTML
                  </a>
                </div>
                <img
                  className="w-60"
                  src="https://images.icon-icons.com/171/PNG/512/html5_23329.png"
                  alt=""
                />
              </div>
              <div
                className=" py-5 px-10 backdrop-blur-md  bg-white/20 relative group w-60 h-[200px] rounded-xl overflow-hidden shadow-lg "
                data-aos="flip-left"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                 <div className="absolute inset-0 bg-white/20 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <a href="https://en.wikipedia.org/wiki/CSS" className="text-black text-3xl font-semibold cursor-default select-none">
                    CSS
                  </a>
                </div>
                <img
                  className="w-60"
                  src="https://img.icons8.com/fluent/512/css3.png "
                  alt=""
                />
              </div>
              <div
                className=" py-5 px-10 backdrop-blur-md  bg-white/20 relative group w-60 h-[200px] rounded-xl overflow-hidden shadow-lg"
                data-aos="flip-left"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                 <div className="absolute inset-0 bg-white/20 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <a href="https://en.wikipedia.org/wiki/JavaScript" className="text-black text-3xl font-semibold cursor-default select-none">
                    JAVASCRIPT
                  </a>
                </div>
                <img
                  className="w-60"
                  src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center gap-65">
              <div
                className=" py-13 px-10 backdrop-blur-md  bg-white/20 relative group w-60 h-[200px] rounded-xl overflow-hidden shadow-lg"
                data-aos="flip-left"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                 <div className="absolute inset-0 bg-white/20 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <a href="https://en.wikipedia.org/wiki/Tailwind_CSS" className="text-black text-3xl font-semibold cursor-default select-none">
                    Tailwind
                  </a>
                </div>
                <img
                  className="w-60"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                  alt=""
                />
              </div>
              <div
                className=" py-5 px-10 backdrop-blur-md  bg-white/20 relative group w-60 h-[200px] rounded-xl overflow-hidden shadow-lg"
                data-aos="flip-left"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                 <div className="absolute inset-0 bg-white/20 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <a href="https://en.wikipedia.org/wiki/React_(software)" className="text-black text-3xl font-semibold cursor-default select-none">
                    ReactJS
                  </a>
                </div>
                <img
                  className="w-60"
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Qurollar;
