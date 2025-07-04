import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About_me = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-black via-[#424242] to-black min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 ">
          <section
            id="about"
            className="scroll-mt-32 flex justify-between mt-30"
          >
            <div data-aos="zoom-in-down"
                data-aos-delay="100"
                data-aos-duration="1200">
              <h2
                className="text-5xl font-bold mb-4 text-orange-500 cursor-default select-none"
               
              >
                Men haqimda
              </h2>
              <p
                className="text-lg leading-relaxed max-w-3xl w-100 cursor-default select-none"
                
              >
                Salom! Men Qo'ldoshev Alibekman — frontend dasturchi sifatida
                zamonaviy va samarali veb-ilovalar yaratishga ishtiyoqmandman.
                HTML, CSS, JavaScript, va React.js kabi texnologiyalar yordamida
                foydalanuvchilar uchun qulay interfeyslar ishlab chiqishga
                intilaman. Mening maqsadim — doimiy o'sish va global darajadagi
                loyihalarda ishtirok etishdir.
              </p>
              <a
                href="#Aloqa"
                className="mt-6 inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
              >
                Aloqaga chiqish
              </a>
            </div>
            <div data-aos="zoom-in-down"
                data-aos-delay="100"
                data-aos-duration="1200">
              <p
                className="text-5xl font-bold mb-4 text-orange-500 cursor-default select-none"
                data-aos="zoom-in-down"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                Ta'lim
              </p>
              <p className="text-2xl font-bold">FrontEnd</p>
              <div className="flex items-center justify-left gap-10 mt-4">
                <p> Coddycamp IT Academy</p>
                <p>Aug 2024 - Iyul 2025</p>
              </div>
              <hr className=" mt-10 pb-10" />
              <p className="text-2xl font-bold">English language</p>
              <div className="flex items-center justify-left gap-40  mt-4">
                <p>Ielts Zone</p>
                <p>Mar 2023 - Jun 2024</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About_me;
