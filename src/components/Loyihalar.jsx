import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Calc from "../assets/calc.png";
import Musc from "../assets/musc.png";
import Media from "../assets/media.png";
import Weather from "../assets/weather.png";

const Loyihalar = () => {
  useEffect(() => {
    AOS.init({});
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
      title: "Music player",
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
    <div className="bg-gradient-to-b from-black via-[#424242] to-black min-h-screen">
      <section id="Loyihalar" className="flex flex-col gap-20 scroll-mt-25">
        <h2 className="text-[#31ddff] text-4xl text-center font-bold">
          Mening loyihalarim
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              data-aos="fade-up"
              data-aos-delay={500 + index * 100}
              data-aos-duration="1500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-80 rounded-2xl  px-3 py-5 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg  text-xl">
                <img
                  className="rounded-2xl"
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <p
                className="text-center text-3xl mt-3"
                data-aos="fade-up"
                data-aos-delay={400 + index * 100}
                data-aos-duration="1500"
              >
                {project.title}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loyihalar;
