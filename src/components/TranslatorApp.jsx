import { useState } from "react";
import googleLanguageData from "../api/googleLanguageData";
import axios from "axios";

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
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Language Translator
          </h1>
        </div>
      </section>
      <section className="translator-app center bg-slate-950 text-white px-6 min-h-screen py-10">
        <div className="container p-6">
          <div className="translator-app-content">
            <h1 className="app-name my-10 text-2xl font-bold uppercase center">
              Language Translator
            </h1>

            <h2 className="text-2xl text-center my-4 uppercase">
              Translate text to any language
            </h2>
            <form className="translator-form">
              <div className="form-control">
                <textarea
                  name="text"
                  id="text"
                  rows="10"
                  className="input p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
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
                  className="input p-2 w-full border border-gray-300 rounded-md 
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
                        className="text-slate-950"
                      >
                        {language.language}
                      </option>
                    ))}
                </select>
              </div>
              <button
                type="button"
                className="btn bg-blue-700 p-2 px-4 text-white mt-4 uppercase hover:bg-blue-800 rounded"
                onClick={translate}
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
                  className="input p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
