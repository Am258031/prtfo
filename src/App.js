import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Art Prompt Generator",
      desc: "AI chatbot generating creative art prompts in real-time.",
      tech: "React, Node, MongoDB",
      link: "https://am258031.github.io/ai-art-prompt-generator-fronted/",
      code: "https://github.com/Am258031"
    },
    {
      title: "Swasthylite",
      desc: "AI healthcare app for symptom-based prediction with voice support.",
      tech: "MERN + ML",
      link: "https://github.com/Am258031/SWASTHAYLite",
      code: "https://github.com/Am258031/SWASTHAYLite"
    },
    {
      title: "CareerLens AI",
      desc: "ATS resume analyzer using NLP & ML.",
      tech: "Python, NLP",
      link: "https://github.com/Am258031/CareerLens-AI",
      code: "https://github.com/Am258031/CareerLens-AI"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans scroll-smooth">

      {/* Navbar */}
      <nav className="fixed w-full bg-black/60 backdrop-blur-lg flex justify-between px-8 py-4 z-50">
        <h1 className="font-bold text-xl">Amjad</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center gap-10 px-6">
        <div>
          <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold">
            Amjad Ali
          </motion.h1>

          <div className="mt-4 text-xl text-blue-400 font-semibold">
            <TypeAnimation
              sequence={[
                'MERN Developer', 2000,
                'AI/ML Enthusiast', 2000,
                'Problem Solver', 2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-400 max-w-xl">
            Building scalable applications and solving real-world problems using MERN stack and AI/ML technologies.
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:scale-110 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-white hover:text-black transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50"></div>
          <img src="/profile.jpg" alt="profile" className="relative w-64 h-64 rounded-full border-4 border-gray-800" />
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-1/3 mx-auto"></div>

      {/* About */}
      <section id="about" className="p-16 text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-400">
          3rd year B.Tech IT student passionate about building scalable applications and solving real-world problems using MERN stack and AI/ML technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="p-16 bg-gray-900">
        <h2 className="text-4xl text-center font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {["C++","Java","Python","React","Node.js","MongoDB","DSA","NLP"].map(skill => (
            <motion.div whileHover={{ scale: 1.2 }} key={skill} className="px-6 py-3 bg-gray-800 rounded-xl shadow-md">
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-16">
        <h2 className="text-4xl text-center font-bold">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {projects.map((p, i) => (
            <motion.div whileHover={{ scale: 1.05 }} key={i} className="bg-gray-900 p-6 rounded-2xl shadow-xl">
              <img src={`/project${i+1}.png`} className="rounded-lg mb-3" alt="project" />
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-gray-400">{p.desc}</p>
              <p className="mt-2 text-sm text-gray-500">{p.tech}</p>
              <div className="mt-4 flex gap-4">
                <a href={p.link} target="_blank" className="text-blue-400">Live</a>
                <a href={p.code} target="_blank" className="text-green-400">Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="p-16 text-center bg-gray-900">
        <h2 className="text-4xl font-bold">Resume</h2>
        <a href="/resume.pdf" download className="mt-6 inline-block px-8 py-3 bg-green-500 rounded-xl shadow-lg hover:scale-110 transition">
          Download Resume
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="p-16 text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-4">aliahmed258031@gmail.com</p>
        <p>github.com/Am258031</p>
        <p>linkedin.com/in/amjad-ali-475927284</p>
      </section>

      <footer className="text-center p-6 bg-black text-gray-500">
        © 2026 Amjad Ali
      </footer>
    </div>
  );
}
