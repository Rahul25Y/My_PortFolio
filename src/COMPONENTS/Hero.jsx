import React from "react";
import hero from "../assets/Hero.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React (1).png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/twitter.png";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <section className="relative mt-3" id="home">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-6xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Rahul <span className="text-red-500">Yadav</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4 font-semibold">
            <Typewriter
              options={{
                strings: [" Web Developer", " React.js Developer", "  Frontend Developer"],
                autoStart: true,
                loop: true,
              }}
            />
            </p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React.js, HTML,
              CSS, and JavaScript. I enjoy creating beautiful, responsive, and
              user-friendly websites that provide practical solutions.
            </p>

            <div className=" flex gap-2 ">
              <button className="bg-black text-white px-3 py-2 w-max rounded-md transition-all duration-300 hover:scale-105" >
                <a
                  href="./Rahul (2).pdf.pdf"
                  download="Rahul_Yadav_CV.pdf"
                  target="_blank"
                >
                  Download CV
                </a>
              </button>
              <button className="border border-black text-white px-3 py-2 w-max rounded-md">
                <a
                  href="https://github.com/Rahul25Y"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600 font-semibold "
                >
                  Visit My GitHub
                </a>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[83.5vh] h-96" />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-100 p-2 md:flex flex-col gap-6 rounded-full">
        <img src={facebook} alt="" className="w-6" />
        <img src={instagram} alt="" className="w-6" />
        <img src={twitter} alt="" className="w-6" />
        <img src={linkedin} alt="" className="w-6" />
      </div>
    </section>
  );
};

export default Hero;
