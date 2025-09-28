import React from "react";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <>
      <div
        className="bg-cover bg-[linear-gradient(30deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_66%,rgba(49,221,255,1)_100%)] bg-center bg-no-repeat min-h-screen"
        
      >
        <Navbar />

        <section className="container  mx-auto px-4 lg:px-8 pt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-[200px]">
          <div className="flex  flex-col gap-3 animate__animated animate__fadeInLeft max-w-xl text-[#fff]">
            <p className="text-4xl font-semibold cursor-default select-none">
              Salom,
            </p>
            <p className="text-4xl cursor-default select-none">Mening ismim</p>
            <p className="text-6xl font-bold text-[#31ddff]  cursor-default select-none">
              Qo'ldoshev Alibek
            </p>
            <p className="text-4xl cursor-default select-none">
              Men FrontEnd dasturchiman
            </p>

           
          </div>

          <div>
            <a
              href="https://en.wikipedia.org/wiki/Visual_Studio_Code"
              className="cursor-default"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="Developer illustration"
                className="w-[300px] react-logo "
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
