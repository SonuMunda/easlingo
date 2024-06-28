import { useState } from "react";
import { franc } from "franc";
import languageData from "../api/languageData";

const DetectorApp = () => {
  const [text, setText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [detectedLangCode, setDetectedLangCode] = useState("");

  const detectLanguage = (event) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      alert("Please enter some text to detect the language.");
      return;
    }

    const detectedCode = franc(text);

    if (detectedCode) {
      setDetectedLangCode(detectedCode);
    }

    const detectedLang = languageData.find(
      (lang) => lang.code === detectedCode
    );

    if (detectedLang) {
      setDetectedLanguage(detectedLang.name);
    } else {
      setDetectedLanguage("Language not found");
    }
  };

  return (
    <section className="detector-app center p-4">
      <div className="container p-6">
        <div className="detector-app-content my-6">
          <h2 className="text-2xl font-bold text-center mb-4 uppercase">
            Detect the language of any text
          </h2>
          <form onSubmit={detectLanguage} className="detector-form">
            <div className="form-control">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                name="text"
                id="text"
                rows="10"
                className="input p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter text to detect language"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-blue-700 p-2 px-4 text-white mt-4 uppercase hover:bg-blue-800 rounded"
            >
              Identify!
            </button>
          </form>
          <div className="detector-result">
            <h3 className="text-xl font-bold text-center mb-4 uppercase">
              Detected language
            </h3>
            {detectedLangCode ? (
              <p className="text-center bg-green-400 p-5">
                The text seems to be : {detectedLanguage} ({detectedLangCode})
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetectorApp;
