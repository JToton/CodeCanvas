import React from "react";

import project1Image from "../assets/images/project_1.png";
import project2Image from "../assets/images/project_2.png";
import project3Image from "../assets/images/project_3.png";
import project4Image from "../assets/images/project_4.png";
import project5Image from "../assets/images/project_5.png";
import project6Image from "../assets/images/project_6.png";
import project7Image from "../assets/images/project_7.png";
import project8Image from "../assets/images/project_8.png";
import project9Image from "../assets/images/project_9.png";

function Portfolio() {
  const projects = [
    {
      title: "Just Another Text Editor",
      image: project1Image,
      deployedLink: "https://webtextcraft.onrender.com",
      githubLink: "https://github.com/JToton/WebTextCraft",
    },
    {
      title: "Social Sphere API",
      image: project2Image,
      deployedLink: "",
      githubLink: "https://github.com/JToton/social-sphere-api",
    },
    {
      title: "Event Topia",
      image: project3Image,
      deployedLink: "",
      githubLink: "https://github.com/JToton/Event_Topia_Management",
    },
    {
      title: "CodeCraft Blog",
      image: project4Image,
      deployedLink: "",
      githubLink: "https://github.com/JToton/CodeCraft-Blog",
    },
    {
      title: "EcomBridgeORM",
      image: project5Image,
      deployedLink: "",
      githubLink: "https://github.com/JToton/EcomBridgeORM",
    },
    {
      title: "HR Command",
      image: project6Image,
      deployedLink: "",
      githubLink: "https://github.com/JToton/HRCommand",
    },
    {
      title: "Game of Loans",
      image: project7Image,
      deployedLink: "https://jtoton.github.io/GameOfLoans/",
      githubLink: "https://github.com/JToton/GameOfLoans",
    },
    {
      title: "Weekly Weather Forecast",
      image: project8Image,
      deployedLink: "https://jtoton.github.io/Weeky-Weather-Forcast/",
      githubLink: "https://github.com/JToton/Weeky-Weather-Forcast",
    },
    {
      title: "The Hip Spot",
      image: project9Image,
      deployedLink: "https://jtoton.github.io/The-Hip-Spot/",
      githubLink: "https://github.com/JToton/The-Hip-Spot",
    },
  ];

  return (
    <section className="bg-background text-text p-8">
      <h2 className="text-3xl font-bold text-primary mb-6">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative pt-[56.25%]">
              <img
                src={project.image}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <div className="flex justify-between mt-auto">
                {project.deployedLink ? (
                  <a
                    href={project.deployedLink}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deployed App
                  </a>
                ) : (
                  <span className="text-gray-400">Not Deployed</span>
                )}
                <a
                  href={project.githubLink}
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
