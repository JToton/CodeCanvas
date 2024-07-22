import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "path/to/image1.jpg",
      deployedLink: "#",
      githubLink: "#",
    },
    // TODO: Add 5 more projects
  ];

  return (
    <section className="bg-background text-text p-8">
      <h2 className="text-3xl font-bold text-primary mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <div className="flex justify-between">
                <a
                  href={project.deployedLink}
                  className="text-accent hover:underline"
                >
                  Deployed App
                </a>
                <a
                  href={project.githubLink}
                  className="text-accent hover:underline"
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
