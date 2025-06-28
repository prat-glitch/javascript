import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiArduino } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "ESP32 / Arduino", icon: <SiArduino /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          <span className="text-blue-300">My</span>{" "}
          <span className="text-indigo-600">Skills</span>
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-3xl text-indigo-500">{skill.icon}</div>
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
