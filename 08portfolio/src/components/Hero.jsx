import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import bgImage from "../assets/hero-bg.jpg";
import devImage from "../assets/developer.png";
import profilePic from "../assets/profilePic.png"; // 🖼 Put your photo here

const Hero = () => {
  const [typedDone, setTypedDone] = useState(false);

  useEffect(() => {
    // After typing finishes (~120ms * length), show static name
    const timeout = setTimeout(() => setTypedDone(true), 120 * "Pratyush".length);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

      {/* Top-left intro */}
      <div className="absolute top-6 left-6 flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg z-20 animate-fade-in">
        <img
          src={devImage}
          alt="Developer"
          className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md"
        />
        <p className="text-white text-sm md:text-base font-medium">
          Hi, I'm <span className="font-semibold text-indigo-200">Pratyush</span> 👋
        </p>
      </div>

      {/* Main content with two columns */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-8 max-w-6xl w-full">
        {/* Left: Text and typewriter */}
        <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
          <h1 className="text-4xl text-white md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I’m{" "}
            <span className="text-indigo-400">
              {typedDone ? (
                "Pratyush"
              ) : (
                <Typewriter
                  options={{
                    strings: ["Pratyush"],
                    autoStart: true,
                    loop: false,
                    cursor: "|",
                    delay: 120,
                  }}
                  onInit={(tw) => tw.callFunction(() => setTypedDone(true)).start()}
                />
              )}
            </span>
          </h1>
          <p className="text-lg md:text-xl font-semibold text-indigo-100 tracking-wide mb-4">
            I'm a <span className="text-indigo-300">Full Stack Developer</span> building{" "}
            <span className="text-indigo-300">scalable projects</span> and a{" "}
            <span className="text-indigo-300">Competitive Programmer</span>.
          </p>
          <p className="text-md md:text-lg text-gray-200 font-medium mb-8 leading-relaxed">
            I build <span className="font-semibold text-white">responsive web applications</span> and
            solve <span className="font-semibold text-white">challenging coding problems</span> with passion and precision.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="bg-indigo-500 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:scale-105"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="flex-1 flex justify-center lg:justify-end" data-aos="fade-left">
          <img
            src={profilePic}
            alt="Pratyush"
            className="w-56 h-56 md:w-72 md:h-72 rounded-xl border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
