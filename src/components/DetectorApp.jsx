import { useState } from "react";
import { franc } from "franc";
import languageData from "../api/languageData";
import AppHero from "./AppHero";

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
      <AppHero title={"Language Detector"} />
      <section className="h-dvh center bg-gray-900">
        <div className="container max-w-4xl p-5">
          <div className="detector-app-content my-6">
            <h2 className="text-2xl text-gray-400  mb-4">
              Enter some text to detect the language or try some random text
            </h2>
            <form onSubmit={detectLanguage} className="detector-form">
              <div className="form-control">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  name="text"
                  id="text"
                  rows="10"
                  className="input p-2 w-full bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-gray-400"
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
                  <h3 className="text-xl text-gray-400 font-bold mt-10 mb-5">
                    Detected language !
                  </h3>
                  <p className="text-gray-200 bg-green-600 rounded p-5">
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
