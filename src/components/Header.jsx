import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const prevScrollPos = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(
        prevScrollPos.current > currentScrollPos || currentScrollPos < 10
      );
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center p-2 sticky w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow z-10 transition-all duration-300 ${
        showNavbar ? "top-0" : "-top-16"
      }`}
    >
      <div className="container mx-auto flex justify-around items-center">
        <div className="logo">
          <h1 className="logo-text text-white text-2xl font-bold">EasLingo</h1>
        </div>
        <nav className="navbar">
          <NavLink
            to="/"
            className="text-white hover:text-white font-medium ml-8"
          >
            Home
          </NavLink>
          <NavLink
            to="/detect"
            className="text-white hover:text-white font-medium ml-8"
          >
            Detector
          </NavLink>
          <NavLink
            to="/translate"
            className="text-white hover:text-white font-medium ml-8"
          >
            Translate
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-white font-medium ml-8"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
