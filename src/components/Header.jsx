import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header center p-4 bg-gradient-to-r from-blue-500 to-purple-500 fixed t-0 l-0 w-full border-b">
      <div className="container flex justify-around items-center">
        <div className="logo">
          <h1 className="logo-text text-white text-2xl font-bold">EasLingo</h1>
        </div>
        <nav className="navbar uppercase">
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
