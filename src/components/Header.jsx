const Header = () => {
  return (
    <header className="header center p-4 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container flex justify-around items-center">
        <div className="logo">
          <h1 className="logo-text text-white text-2xl font-bold">EasLingo</h1>
        </div>
        <nav className="navbar">
          <a href="#" className="text-white hover:text-white font-medium ml-8">
            Features
          </a>
          <a href="#" className="text-white hover:text-white font-medium ml-8">
            About
          </a>
          <a href="#" className="text-white hover:text-white font-medium ml-8">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
