import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aloqa = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <section id="Aloqa" className="scroll-mt-20 mt-30">
          <h1
            className="text-5xl font-bold mb-4 text-orange-500 cursor-default select-none text-center "
            data-aos="zoom-in-down"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            Aloqa
          </h1>
          <form
            action=""
            className="flex flex-col gap-10 justify-center items-center mt-10"
            data-aos="zoom-in-down"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            <input
              className="bg-white w-100 h-10 rounded-2xl"
              placeholder="Ism"
              type="text"
            />
            <input className="bg-white w-100 h-10 rounded-2xl" type="text" />
            <input
              className="bg-white w-100 h-10  rounded-2xl"
              type="textarea"
            />
            <input className="bg-white w-50 h-10 rounded-2xl text-black hover:bg-amber-500 " type="submit" />
          </form>
        </section>
      </div>
    </>
  );
};

export default Aloqa;
