import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About_me = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <section
          id="about"
          className="scroll-mt-32 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-10"
        >
          {/* About Me Qismi */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#31ddff] cursor-default select-none">
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl cursor-default select-none">
              Hi! I'm **Alibek Kuldoshev**, a passionate Frontend Developer
              dedicated to building modern and efficient web applications. I
              strive to create user-friendly interfaces using technologies like
              **HTML, CSS, JavaScript, and React.js**. My goal is to
              continuously grow professionally and contribute to global-scale
              projects.
            </p>
            <a
              href="#Aloqa"
              className="mt-8 inline-block text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full border border-white/10 shadow-lg px-8 py-3 text-lg transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Education Qismi */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex-1 w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#31ddff] cursor-default select-none">
              Education
            </h2>

            {/* IT Academy */}
            <div className="mb-10">
              <p className="text-xl md:text-2xl font-bold text-white">
                Frontend Development
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 text-gray-400">
                <p className="text-[#31ddff] font-medium">
                  Coddycamp IT Academy
                </p>
                <p className="text-sm">Aug 2024 - July 2025</p>
              </div>
              <hr className="mt-4 border-white/10" />
            </div>

            {/* English Language */}
            <div>
              <p className="text-xl md:text-2xl font-bold text-white">
                English Language
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 text-gray-400">
                <p className="text-[#31ddff] font-medium">Ielts Zone</p>
                <p className="text-sm">Mar 2023 - Jun 2024</p>
              </div>
              <hr className="mt-4 border-white/10" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About_me;
