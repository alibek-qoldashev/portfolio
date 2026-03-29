import React from "react";
// Logo ishlatmoqchi bo'lsangiz Logo_1 ni ham qo'shishingiz mumkin
import Logo_1 from "../assets/asd.png";

const Footer = () => {
  return (
    <footer className="mt-20 pb-10 border-t border-white/10 pt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {/* Ism yoki Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-[#31ddff] font-bold text-3xl cursor-pointer">
              Alibek
            </h2>
            <p className="text-gray-400 text-sm mt-2">Frontend Developer</p>
          </div>

          {/* Aloqa ma'lumotlari */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-white">
            <a
              href="tel:+998943854449"
              className="hover:text-[#31ddff] transition-colors select-none"
            >
              +998 94 385 4449
            </a>
            <a
              href="mailto:kuldashevalibek12@gmail.com"
              className="hover:text-[#31ddff] transition-colors select-none"
            >
              kuldashevalibek12@gmail.com
            </a>
          </div>
        </div>

        {/* Chiziq va Copyright */}
        <hr className="my-8 border-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>Copyright © 2026. All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="https://t.me/ullugbekvc" className="hover:text-white transition-colors">
              Telegram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
