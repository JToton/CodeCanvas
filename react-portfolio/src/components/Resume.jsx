import React from "react";
import resumePDF from "../assets/files/Jacob_Toton_Resume.pdf";

function Resume() {
  return (
    <section className="bg-background text-text p-8">
      <h2 className="text-3xl font-bold text-primary mb-6">Resume</h2>

      <div className="mb-8">
        <a
          /* TODO: react pdf npm package*/
          href={resumePDF}
          download
          className="bg-accent text-secondary py-2 px-4 rounded hover:bg-primary transition duration-300"
        >
          Download Resume
        </a>
      </div>

      <div className="bg-secondary shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Proficiencies
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li className="bg-background p-3 rounded shadow">JavaScript</li>
          <li className="bg-background p-3 rounded shadow">React</li>
          <li className="bg-background p-3 rounded shadow">Node.js</li>
          <li className="bg-background p-3 rounded shadow">HTML/CSS</li>
          <li className="bg-background p-3 rounded shadow">Git</li>

          <li className="bg-background p-3 rounded shadow">Bootstrap</li>
          <li className="bg-background p-3 rounded shadow">Tailwind</li>
          <li className="bg-background p-3 rounded shadow">MongoDB</li>
          <li className="bg-background p-3 rounded shadow">MERN</li>
          <li className="bg-background p-3 rounded shadow">
            Progressive Web Applications (PWA)
          </li>

          <li className="bg-background p-3 rounded shadow">SQL / NoSQL</li>
          <li className="bg-background p-3 rounded shadow">
            Model-View-Controller (MVC)
          </li>
          <li className="bg-background p-3 rounded shadow">
            Object-Relational Mapping (ORM)
          </li>
          <li className="bg-background p-3 rounded shadow">Express.js</li>
          <li className="bg-background p-3 rounded shadow">
            Object-Oriented Programming (OOP)
          </li>
          <li className="bg-background p-3 rounded shadow">Server-Side APIs</li>
          <li className="bg-background p-3 rounded shadow">Third-Party APIs</li>
          <li className="bg-background p-3 rounded shadow">Web APIs</li>
        </ul>
      </div>

      {/* TODO: add more sections here, like Work Experience, Education, etc. */}
      <div className="bg-secondary shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Resume Preview
        </h3>
        <iframe
          src={resumePDF}
          title="Resume Preview"
          width="100%"
          height="600px"
          className="border-none rounded"
        />
      </div>
    </section>
  );
}

export default Resume;
