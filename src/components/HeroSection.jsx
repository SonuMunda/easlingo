import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="h-[65vh] center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          Welcome to EasLingo
        </h1>
        <p className="text-2xl text-white mb-8 leading-relaxed">
          Detect and Translate any language of any text
        </p>

        <div className="hero-btns flex space-x-4">
          <Link to="/detect">
            <button className="text-gray-400 px-6 py-3 rounded-md font-semibold uppercase shadow-gray-400 bg-gray-950 hover:bg-gray-800 transition-colors duration-300">
              Try Language Detector
            </button>
          </Link>
          <Link to="translate">
            <button className="text-gray-400 px-6 py-3 rounded-md font-semibold uppercase shadow-gray-400 bg-gray-950 hover:bg-gray-800 transition-colors duration-300">
              Try Language Translator
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
