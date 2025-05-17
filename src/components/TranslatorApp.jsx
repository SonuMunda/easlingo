import { useState } from "react";
import googleLanguageData from "../api/googleLanguageData";
import axios from "axios";
import AppHero from "./AppHero";

const TranslatorApp = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const uri = import.meta.env.VITE_API_URI;
  const key = import.meta.env.VITE_API_KEY;

  const translate = async (event) => {
    event.preventDefault();
    setLoading(true);
    const options = {
      method: "POST",
      url: uri,
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        from: "auto",
        to: selectedLanguage,
        text: inputText,
      },
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.trans);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppHero title={"Language Translator"} />
      <section className="translator-app center bg-gray-900 text-white min-h-screen">
        <div className="container p-4 max-w-4xl">
          <div className="translator-app-content">
            <h2 className="text-2xl text-gray-300 my-4">
              Translate text to any language
            </h2>
            <form className="translator-form">
              <div className="form-control">
                <textarea
                  name="text"
                  id="text"
                  rows="10"
                  className="input p-2 w-full bg-gray-800 text-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter text to translate"
                  onChange={(event) => {
                    setInputText(event.target.value);
                  }}
                  value={inputText}
                ></textarea>
              </div>
              <div className="form-control">
                <select
                  name="language"
                  id="language"
                  className="input p-2 w-full bg-gray-800 text-gray-300 border border-gray-300 rounded-md 
                text-slate-950 focus:outline-none focus:border-blue-500"
                  onChange={(event) => {
                    setSelectedLanguage(event.target.value);
                  }}
                >
                  {googleLanguageData
                    .sort((a, b) => a.language.localeCompare(b.language))
                    .map((language) => (
                      <option
                        key={language.code}
                        value={language.code}
                        className="text-gray-300"
                      >
                        {language.language}
                      </option>
                    ))}
                </select>
              </div>
              <button
                type="button"
                className={`btn bg-blue-700 p-2 px-4 text-white mt-4 uppercase hover:bg-blue-800 rounded ${
                  loading && !inputText ? "cursor-not-allowed" : ""
                }`}
                onClick={translate}
                disabled={loading || !inputText}
              >
                {loading ? "Translating..." : "Translate"}
              </button>
            </form>
            <div className="translator-result">
              <h3 className="text-xl font-bold text-center mb-4 uppercase">
                Translated text
              </h3>
              <div className="form-control">
                <textarea
                  name="translated-text"
                  id="translated-text"
                  rows="10"
                  className="bg-gray-800 input p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Translated text will appear here"
                  disabled
                  value={translatedText}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TranslatorApp;
