import React from "react";
import profileImage from "../assets/images/profile_image.jpg";

function About() {
  return (
    <section className="bg-background text-text p-8">
      <h1 className="text-3xl font-bold text-primary mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <img
          src={profileImage}
          alt="Developer"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
        <div className="bg-secondary p-6 rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed mb-4">
            Hello! I'm a passionate and dedicated web developer with a strong
            foundation in both front-end and back-end technologies. I am
            actively seeking a full-stack web development position where I can
            leverage my diverse skill set to create dynamic and user-friendly
            web applications.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4">My Journey</h2>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed">
          Throughout my educational journey, I have immersed myself in a variety
          of web development technologies and frameworks. Here's a snapshot of
          what I've learned:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            HTML, CSS, and Git: Building blocks of web development, mastering
            the art of creating structured and styled web pages while
            maintaining version control.
          </li>
          <li>
            Advanced CSS: Enhancing user experiences with responsive and
            visually appealing designs.
          </li>
          <li>
            JavaScript: Bringing interactivity and functionality to web
            applications.
          </li>
          <li>
            Web APIs & Third-Party APIs: Integrating external services to
            enhance application capabilities.
          </li>
          <li>
            Server-Side APIs & Node.js: Developing robust server-side logic and
            applications.
          </li>
          <li>
            Object-Oriented Programming (OOP): Implementing reusable and
            maintainable code.
          </li>
          <li>
            Express.js: Building fast and scalable server-side applications.
          </li>
          <li>
            SQL & Object-Relational Mapping (ORM): Managing databases and
            creating efficient data models.
          </li>
          <li>
            Model-View-Controller (MVC): Structuring applications for
            scalability and maintainability.
          </li>
          <li>
            Computer Science for JavaScript: Understanding the underlying
            principles of computing as they apply to JavaScript.
          </li>
          <li>
            NoSQL & MongoDB: Handling unstructured data and leveraging NoSQL
            databases.
          </li>
          <li>
            Progressive Web Applications (PWA): Creating offline-first,
            high-performance web apps.
          </li>
          <li>
            React & MERN: Developing modern, dynamic user interfaces and
            full-stack applications with the MERN stack (MongoDB, Express.js,
            React, Node.js).
          </li>
          <li>
            Tailwind & Bootstrap: Utilizing modern CSS frameworks for rapid UI
            development.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4">My Vision</h2>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed">
          I am committed to continuous learning and staying updated with the
          latest industry trends. My goal is to contribute to innovative
          projects that solve real-world problems and provide excellent user
          experiences. I look forward to the opportunity to collaborate with a
          talented team and bring my skills to new challenges. Let's build
          something amazing together!
        </p>
      </div>
    </section>
  );
}

export default About;
