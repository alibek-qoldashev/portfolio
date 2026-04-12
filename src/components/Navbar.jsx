import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Ikonkalar uchun lucide-react o'rnating: npm install lucide-react
import { q } from "framer-motion/client";

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [active, setActive] = useState("about");
  const [isOpen, setIsOpen] = useState(false); // Mobil menyu holati

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "Loyihalar", label: "Project" },
    { id: "Dasturlar", label: "Applications" },
    { id: "Aloqa", label: "Contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 flex items-center justify-between z-50 w-[95%] max-w-[1200px] px-4 md:px-0">
      {/* Logo */}
      <div className="z-[60]">
        <h2 className="text-[#31ddff] font-bold text-2xl md:text-3xl cursor-pointer">
          RiMi
        </h2>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex gap-4 text-lg font-medium relative items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer"
              onClick={() => setActive(item.id)}
            >
              <a
                href={`#${item.id}`}
                className="relative z-10 px-6 py-3 rounded-2xl transition-colors text-white"
              >
                {item.label}
              </a>

              {active === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg -z-10"
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Resume & Hamburger */}
      <div className="flex items-center gap-4 z-[60]">
        <button
          onClick={() => window.open(`/Cv.pdf`, "_blank")}
          className="bg-white/5 text-white backdrop-blur-xl rounded-full border border-white/10 shadow-lg px-5 py-2 md:px-8 md:py-4 text-sm md:text-xl transition-all hover:bg-white/10"
        >
          Resume
        </button>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-6 md:hidden z-50"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActive(item.id);
                  setIsOpen(false);
                }}
                className={`text-xl font-medium ${active === item.id ? "text-[#31ddff]" : "text-white"}`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;