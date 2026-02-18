import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsLanding() {
  const projects = [
    {
      title: "Official Primary School Website",
      description: "A live official website for a working school - Bachpan The Little Kingdom , Gumla , Jharkhand",
      tech: "React JS , Tailwind",
      link: "https://www.bachpangumla.com/"

    }
    ,
    {
      title: "Tic Tac Toe Game",
      description: "A simple React Tic Tac Toe game with turn-based play, win/draw detection, score tracking",
      tech: "React JS , Tailwind",
      link: "/tictacproject"
    },
    {
      title: "Shopping Cart App",
      description: "Simple cart with add/remove functionality and total calculation.",
      tech: "React, Tailwind",
      link: "/cartproject"
    },
    {
      title: "Todo List App",
      description: "Clean and responsive todo app with add/remove tasks.",
      tech: "React, Tailwind",
      link: "/todoproject"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-fuchsia-50 px-4 py-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-fuchsia-700">
          My Projects
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Explore my work by selecting a project
        </p>
      </header>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between
              transform transition duration-300
              hover:scale-105 hover:shadow-2xl
            "
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">
                {project.description}
              </p>
              <p className="text-sm text-gray-500 mt-3">
                <span className="font-semibold">Tech:</span> {project.tech}
              </p>
            </div>

            <Link
              to={project.link}
              className="
                mt-6 inline-block text-center
                bg-fuchsia-600 hover:bg-fuchsia-700
                text-white py-2 rounded-xl font-semibold
                transition
              "
            >
              View Project
            </Link>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        © {new Date().getFullYear()} Kumar Saurav · Built with React
      </footer>
    </div>
  );
}
