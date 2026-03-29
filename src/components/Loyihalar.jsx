import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Rasmlar importini tekshiring
import Calc from "../assets/calc.png";
import Musc from "../assets/musc.png";
import Media from "../assets/media.png";
import Weather from "../assets/weather.png";

const Loyihalar = () => {
  useEffect(() => {
    AOS.init({
      once: false, // Skrol qilganda qayta-qayta chiqishi uchun
      duration: 1000,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Calculator",
      img: Calc,
      link: "https://dynamic-tarsier-b0c5e5.netlify.app/",
    },
    {
      id: 2,
      title: "Music Player",
      img: Musc,
      link: "https://relaxed-jalebi-86482b.netlify.app/",
    },
    {
      id: 3,
      title: "Media Web",
      img: Media,
      link: "https://react-radio-browser-five.vercel.app/",
    },
    {
      id: 4,
      title: "Weather App",
      img: Weather,
      link: "https://weather-react-app-goab.vercel.app/",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-[#1a1a1a] to-black min-h-screen py-10 md:py-20 overflow-x-hidden">
      <section
        id="Loyihalar"
        className="container mx-auto px-4 md:px-10 scroll-mt-24"
      >
        <h2
          className="text-[#31ddff] text-3xl md:text-5xl text-center font-bold mb-10 md:mb-16"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        {/* Mobilda 2 ta ustun: grid-cols-2 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full group"
              data-aos="zoom-in-up" // MANA ANIMATSIYA!
              data-aos-delay={index * 100} // Navbat bilan chiqishi uchun
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Kichikroq va chiroyli box */}
                <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 group-hover:border-[#31ddff]/50">
                  <div className="p-2 md:p-4">
                    <img
                      className="rounded-lg w-full h-[110px] sm:h-[180px] md:h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                      src={project.img}
                      alt={project.title}
                    />
                  </div>
                </div>

                {/* Loyiha nomi */}
                <p className="text-center text-sm md:text-2xl mt-3 text-white font-medium group-hover:text-[#31ddff] transition-colors">
                  {project.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loyihalar;
