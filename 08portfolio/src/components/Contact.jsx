import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "Pratyush Ghosh",
    email: "ghoshpratyush.003@gmail.com",
    message: "Hit me if u work with me ",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just alert; later you can integrate email service or backend
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-400 text-lg">
              I’m open to freelance work, collaborations, or just a friendly hello.
              Feel free to reach out!
            </p>
            <div className="space-y-4 text-gray-400">
              <p><strong>Email:</strong> ghoshpratyush.003@gmail.com</p>
              <p><strong>Phone:</strong> +91 8101544729</p>
              <p><strong>Location:</strong> Kolkata, India</p>
            </div>

            <div className="flex gap-6 text-gray-400 text-2xl mt-6 justify-center md:justify-start">
              <a
                href="https://github.com/prat-glitch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-900 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/pratyush-ghosh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ghoshpratyush.003@gmail.com"
                aria-label="Email"
                className="hover:text-red-600 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-gray-800 p-8 rounded-xl shadow-md"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-white font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Pratyush Ghosh"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="ghoshpratyush.003@gmail.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
