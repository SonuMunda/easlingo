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

  const addRandomText = () => {
    const randomTexts = [
      "Hello, how are you?",
      "Hola, ¿cómo estás?",
      "Bonjour, comment ça va?",
      "Hallo, wie geht's?",
      "Ciao, come stai?",
      "Привет, как дела?",
      "こんにちは、元気ですか？",
      "مرحبًا، كيف حالك؟",
      "नमस्ते, क्या हाल है?",
      "ಹಲೋ, ಹೇಗಿದ್ದೀರಾ?",
      "வணக்கம், எப்படி இருக்கிறீர்கள்?",
    ];

    setText(randomTexts[Math.floor(Math.random() * randomTexts.length)]);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Language Detector
          </h1>
        </div>
      </section>
      <section className="detector-app bg-slate-950 text-white center p-4 min-h-screen">
        <div className="container p-6">
          <div className="detector-app-content my-6">
            <h1 className="app-name my-3 text-2xl font-bold uppercase">
              Language Detector
            </h1>
            <h2 className="text-2xl  mb-4 uppercase">
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
                  className="input p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
                  placeholder="Enter text to detect language"
                ></textarea>
              </div>
              <div className="btns flex space-x-2">
                <button
                  type="submit"
                  className="btn bg-blue-700 p-2 px-4 text-white mt-4 uppercase hover:bg-blue-800 rounded"
                >
                  Identify !
                </button>
                <button
                  className="btn bg-blue-700 p-2 px-4 text-white mt-4 uppercase hover:bg-blue-800 rounded"
                  onClick={addRandomText}
                >
                  Try some text !
                </button>
              </div>
            </form>
            <div className="detector-result">
              {detectedLangCode ? (
                <>
                  <h3 className="text-xl font-bold text-center my-4">
                    Detected language !
                  </h3>
                  <p className="text-center bg-green-950 p-5">
                    The text seems to be: {detectedLanguage} ({detectedLangCode}
                    )
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetectorApp;
