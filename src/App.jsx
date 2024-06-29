import "./App.css";
import DetectorApp from "./components/DetectorApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TranslatorApp from "./components/TranslatorApp";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<DetectorApp />} />
          <Route path="/translate" element={<TranslatorApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
