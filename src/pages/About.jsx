import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            About EasLingo
          </h1>
        </div>
      </section>
      <hr />
      <section className="about">
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto py-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to EasLingo, your essential language detection and
                translation application, meticulously crafted with React.js and
                Tailwind CSS. Whether you&apos;re an avid traveler, a polyglot,
                or a professional needing multilingual capabilities, EasLingo is
                designed to break down language barriers effortlessly.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Key Features
              </h2>

              <ul className="list-disc list-inside mb-6">
                <li className="text-gray-700">
                  <span className="font-semibold">Language Detection:</span>{" "}
                  Powered by the robust `france` library, EasLingo accurately
                  detects over 70 languages.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">
                    Translation Capabilities:
                  </span>
                  Leveraging the Google Translate API via Rapid API, EasLingo
                  offers quick and reliable translation services between
                  multiple languages.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">
                    User-Friendly Interface:
                  </span>
                  Developed with React.js, EasLingo provides a sleek and
                  intuitive user experience.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Customizable Design:</span>{" "}
                  Utilizing Tailwind CSS, EasLingo combines functionality with
                  beautiful design.
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                EasLingo&apos;s codebase is open-source and hosted on GitHub,
                inviting developers to explore, contribute, and innovate. Join
                us in improving language accessibility worldwide through
                React.js and Tailwind CSS.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Have questions, feedback, or suggestions? We&apos;d love to hear
                from you! Reach out to us at &nbsp;
                <Link to="mailto:email@example.com" className="text-blue-500">
                  sonumunda1312@gmail.com
                </Link>
                &nbsp; and let&apos;s connect.
              </p>
              <p className="">
                <Link
                  to="/https://github.com/SonuMunda/easlingo.git"
                  className="text-blue-500"
                >
                  Click here to view the code
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
