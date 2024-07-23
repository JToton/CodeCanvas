import React from "react";
import Navigation from "./Navigation";

// *Define the Header functional component.
function Header() {
  return (
    <header className="bg-primary text-secondary p-4 w-full">
      <div className="w-full px-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold">Jacob Toton</h1>
        </div>
        <div className="flex-shrink-0">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
