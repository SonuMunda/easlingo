const AboutApp = () => {
    return (
      <section className="home-about bg-gray-100 py-12 px-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Application Description: Language Detection and Translation Tool
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our application is a versatile tool designed to detect and translate
            text across multiple languages effortlessly. Whether you need to
            understand foreign languages on the go or communicate effectively with
            global audiences, our app provides the solution.
          </p>
  
          <h3 className="text-xl font-bold mb-4">Key Features:</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Language Detection: Instantly identify the language of any text input.</li>
            <li>Translation Capability: Translate text from one language to another accurately.</li>
            <li>User-Friendly Interface: Intuitive design for easy text input and language selection.</li>
            <li>Multi-Lingual Support: Supports a wide range of languages for global communication.</li>
            <li>Educational and Professional Use: Ideal for students, travelers, and business professionals.</li>
          </ul>
  
          <h3 className="text-xl font-bold mb-4">How It Works:</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Simply enter your text, select the target language, and our app will detect the input language (if not specified) and provide an accurate translation.
          </p>
  
          <h3 className="text-xl font-bold mb-4">Why Choose Our App:</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Accuracy: Utilizes advanced algorithms for precise language detection and translation.</li>
            <li>Accessibility: Available on web and mobile platforms for convenient access.</li>
            <li>Reliability: Built on robust APIs to ensure consistent performance.</li>
            <li>Versatility: Suitable for a wide range of users, from casual learners to business professionals.</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default AboutApp;
  