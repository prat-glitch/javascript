import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-blue-300">About</span> <span className="text-indigo-600">Me</span>
        </h2>
        <p className="text-lg md:text-xl mb-4 text-white">
          I'm Pratyush Ghosh, a passionate <strong>Full Stack Web Developer</strong> and
          <strong> Competitive Programmer</strong> currently pursuing my B.Tech in
          <strong> Electronics and Communication Engineering</strong> at
          <strong> Narula Institute Of Technology</strong>.
        </p>
        <p className="text-md md:text-lg text-white">
          Currently in my <strong>2nd year</strong>, I’m actively building projects,
          sharpening my programming skills, and aspiring to gain deep, practical
          knowledge in both software development and system design.
        </p>
      </div>
    </section>
  );
};

export default About;
