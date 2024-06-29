import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          Welcome to EasLingo
        </h1>
        <p className="text-2xl text-white mb-8 leading-relaxed">
          Detect and Translate any language of any text
        </p>

        <div className="hero-btns flex space-x-4">
          <Link to="/detect">
            <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-md font-semibold uppercase shadow-md transition-colors duration-300">
              Try Language Detector
            </button>
          </Link>
          <Link to="translate">
            <button className="bg-white text-purple-500 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-md font-semibold uppercase shadow-md transition-colors duration-300">
              Try Language Translator
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
