import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-primary text-secondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jacob Toton</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
