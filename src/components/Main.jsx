import React from "react";
import Vs from "../assets/visual.png";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/abstract-black-lines-geometric-background_677411-2748.jpg?semt=ais_hybrid&w=740')",
        }}
      >
        <Navbar />

        <section className="container  mx-auto px-4 lg:px-8 pt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-[200px]">
          <div className="flex flex-col gap-3 animate__animated animate__fadeInLeft max-w-xl text-white">
            <p className="text-4xl font-semibold cursor-default select-none">
              Salom,
            </p>
            <p className="text-4xl cursor-default select-none">Mening ismim</p>
            <p className="text-6xl font-bold text-orange-400 underline cursor-default select-none">
              Qo'ldoshev Alibek
            </p>
            <p className="text-4xl cursor-default select-none">
              Men FrontEnd dasturchiman
            </p>

            <button
              onClick={() =>
                window.open(`${import.meta.env.BASE_URL}Cv.pdf`, "_blank")
              }
              className="bg-orange-500 text-white w-30 px-6 py-2 rounded-md hover:scale-105 transition"
            >
              Resume
            </button>
          </div>

          <div>
            <a
              href="https://en.wikipedia.org/wiki/Visual_Studio_Code"
              className="cursor-default"
            >
              <img
                src={Vs}
                alt="Developer illustration"
                className="w-[300px] animate-pulse"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
