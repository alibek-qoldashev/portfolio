import { useEffect } from "react";
import Footer from "../components/Footer";
import "animate.css";
import Main from "../components/Main";
import About from "../components/About_me";
import Loyihalar from "../components/Loyihalar";
import Dasturlar from "../components/Qurollar";
import Aloqa from "../components/Aloqa";

const Home = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white  min-h-screen flex flex-col gap-30 pt-3  ">
      <Main />
      <About />
      <Loyihalar />
      <Dasturlar />
      <Aloqa />
      <Footer />
    </div>
  );
};

export default Home;
