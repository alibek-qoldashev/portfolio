import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Calc from "../assets/calc.png";
import Musc from "../assets/musc.png";



const Loyihalar = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div
        className="bg-gradient-to-b from-black via-[#424242] to-black min-h-screen"
        // style={{
        //   backgroundImage:
        //     "url('https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?semt=ais_hybrid&w=740')",
        // }}
      >
        <div>
          <section id="Loyihalar" className="flex flex-col gap-20 scroll-mt-25">
            <h2 className="text-amber-600 text-4xl text-center font-bold">
              Mening loyihalarim
            </h2>
            <div className="flex justify-around">
              <a href="https://dynamic-tarsier-b0c5e5.netlify.app/" data-aos="fade-up"  data-aos-delay="300" data-aos-duration="1500">
                <div
                  className="w-80 h-50 rounded-2xl bg-orange-500 px-3 py-5 "
                 
                >
                  <img className="rounded-2xl" src={Calc} alt="" />
                </div>
                <p className="text-center text-3xl" data-aos="fade-up " data-aos-delay="300" data-aos-duration="1500">Calculator</p>
              </a>
              <a href="https://eloquent-pixie-a12921.netlify.app/" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
                <div
                  className="w-80 h-50 rounded-2xl bg-orange-500 px-3 py-6 "
                  
                >
                  <img className="rounded-2xl" src={Musc} alt="" />
                </div>
                <p className="text-center text-3xl" data-aos="fade-up " data-aos-delay="400" data-aos-duration="1500">Music player</p>
              </a>
              <a href="" data-aos="fade-up"  data-aos-delay="300" data-aos-duration="1500">
                <div
                  className="w-80 h-50 rounded-2xl bg-orange-500 p-3 "
                  data-aos="fade-up"
                >
                  <img className="rounded-2xl" src="" alt="" />
                </div>
                <p className="text-center text-3xl"></p>
              </a>
            </div>
            <div className="flex justify-around">
              <div
                className="w-80 h-50 rounded-2xl bg-orange-500 "
                data-aos="fade-up"
                 data-aos-delay="300" data-aos-duration="1500"
              ></div>
              <div
                className="w-80 h-50 rounded-2xl bg-orange-500 "
                data-aos="fade-up"
                 data-aos-delay="300" data-aos-duration="1500"
              ></div>
              <div
                className="w-80 h-50 rounded-2xl bg-orange-500 "
                data-aos="fade-up"
                 data-aos-delay="300" data-aos-duration="1500"
              ></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Loyihalar;
