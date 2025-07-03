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
          <section id="about" className="scroll-mt-32  mt-30">
            <h2
              className="text-5xl font-bold mb-4 text-orange-500 cursor-default select-none"
             data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1200"
            >
              Men haqimda
            </h2>
            <p
              className="text-lg leading-relaxed max-w-3xl w-100 cursor-default select-none"
            data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1500"
            >
              Salom! Men Qo'ldoshev Alibekman — frontend dasturchi sifatida
              zamonaviy va samarali veb-ilovalar yaratishga ishtiyoqmandman.
              HTML, CSS, JavaScript, va React.js kabi texnologiyalar yordamida
              foydalanuvchilar uchun qulay interfeyslar ishlab chiqishga
              intilaman. Mening maqsadim — doimiy o'sish va global darajadagi
              loyihalarda ishtirok etishdir.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Aloqaga chiqish
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default About_me;
