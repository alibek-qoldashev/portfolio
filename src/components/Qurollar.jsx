import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Qurollar = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const tools = [
    {
      name: "HTML",
      url: "https://en.wikipedia.org/wiki/HTML",
      img: "https://images.icon-icons.com/171/PNG/512/html5_23329.png",
    },
    {
      name: "CSS",
      url: "https://en.wikipedia.org/wiki/CSS",
      img: "https://img.icons8.com/fluent/512/css3.png",
    },
    {
      name: "JS",
      url: "https://en.wikipedia.org/wiki/JavaScript",
      img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    },
    {
      name: "Tailwind",
      url: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png",
    },
    {
      name: "ReactJS",
      url: "https://en.wikipedia.org/wiki/React_(software)",
      img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
  ];

  return (
    <div className="py-20 overflow-x-hidden">
      <section
        id="Dasturlar"
        className="container mx-auto px-4 md:px-10 scroll-mt-25"
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-[#31ddff] text-center cursor-default select-none"
          data-aos="fade-up"
        >
          My Tools
        </h2>

        {/* Grid tizimi: Mobilda 2 ta, Kompyuterda 3 ta ustun */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 justify-items-center max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="relative group w-full max-w-[160px] md:max-w-[240px] h-[160px] md:h-[200px] rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/10 border border-white/5 flex items-center justify-center p-6"
              data-aos="flip-right"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#31ddff]/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg md:text-2xl font-bold px-4 py-2 border border-white/30 rounded-lg bg-black/20"
                >
                  {tool.name}
                </a>
              </div>

              {/* Tool Icon */}
              <img
                className="w-16 md:w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                src={tool.img}
                alt={tool.name}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Qurollar;
