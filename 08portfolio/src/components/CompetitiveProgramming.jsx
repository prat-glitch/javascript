import React from "react";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";

const cpProfiles = [
  {
    platform: "LeetCode",
    username: "user9003oE",
    link: "https://leetcode.com/u/user9003oE/",
    icon: <SiLeetcode size={48} className="text-yellow-500" />,
    stats: "250+ problems solved • Knight rank",
  },
  {
    platform: "Codeforces",
    username: "ghoshpratyush.003",
    link: "https://codeforces.com/profile/ghoshpratyush.003",
    icon: <SiCodeforces size={48} className="text-blue-600" />,
    stats: "Newbie (rating 682 • max 783)",
  },
  {
    platform: "CodeChef",
    username: "quiver_sun_49",
    link: "https://www.codechef.com/users/quiver_sun_49",
    icon: <SiCodechef size={48} className="text-purple-600" />,
    stats: "1★ (rating 1074 • max 1143)",
  },
];

const CompetitiveProgramming = () => {
  return (
    <section id="cp" className="bg-gray-900 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          data-aos="fade-up"
        >
          <span className="text-blue-300">Competitive</span>{" "}
          <span className="text-indigo-500">Programming</span>
        </h2>

        <div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {cpProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="mb-4">{profile.icon}</div>
              <h3 className="text-xl font-bold text-white mb-1">{profile.platform}</h3>
              <p className="text-sm text-gray-400 mb-1">@{profile.username}</p>
              <p className="text-xs text-gray-400">{profile.stats}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
