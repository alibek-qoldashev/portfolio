import React, { useState, useEffect } from "react";
import Logo_1 from "../assets/asd.png";


const Navbar = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-[1300px] ml-[70px] mt-5 flex items-center justify-between z-50 backdrop-blur-md rounded-3xl  ">

      <div className="container mx-auto flex justify-between items-center">
        <a href="#"><img className="w-[80px]" src={Logo_1} alt="Logo" /></a>

        <ul className="flex gap-6 text-lg font-medium">
          <li className="hover:text-orange-500 transition cursor-pointer"> <a href="#about">Men haqimda</a></li>
          <li className="hover:text-orange-500 transition cursor-pointer"><a href="#Loyihalar">Loyihalar</a></li>
          <li className="hover:text-orange-500 transition cursor-pointer"><a href="#Dasturlar">Dasturlar</a></li>
          <li className="hover:text-orange-500 transition cursor-pointer"><a href="#Aloqa">Aloqa</a></li>
        </ul>

        
      </div>

    </nav>

  );
};

export default Navbar;