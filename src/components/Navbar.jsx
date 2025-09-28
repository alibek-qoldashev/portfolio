import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [active, setActive] = useState("about");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const navItems = [
    { id: "about", label: "Men haqimda" },
    { id: "Loyihalar", label: "Loyihalar" },
    { id: "Dasturlar", label: "Dasturlar" },
    { id: "Aloqa", label: "Aloqa" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 flex items-center justify-between z-50 w-[90%] max-w-[1200px]">
      <div>
        <h2 className="text-[#31ddff] font-bold text-3xl cursor-pointer">
          Alibek
        </h2>
      </div>

      {/* Glassmorphism Navbar */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-4xl border border-white/10 shadow-lg px-8 py-4">
        <ul className="flex gap-4 text-lg font-medium relative">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer"
              onClick={() => setActive(item.id)}
            >
              <a
                href={`#${item.id}`}
                className={`relative z-10 px-6 py-3 rounded-2xl transition-colors ${
                  active === item.id ? "text-white" : "text-white"
                }`}
              >
                {item.label}
              </a>

              {active === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             bg-white/0 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg 
             px-17 py-5 w-auto h-auto flex items-center justify-center"
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button
          onClick={() =>
            window.open(`${import.meta.env.BASE_URL}Cv.pdf`, "_blank")
          }
          className="bg-white/5 backdrop-blur-xl rounded-4xl border border-white/10 shadow-lg px-8 py-4 text-xl"
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
