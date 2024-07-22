import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-secondary p-4 mt-8">
      <div className="container mx-auto flex justify-center space-x-4">
        <a
          href="https://github.com/JToton"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jacobtoton/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition duration-300"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
