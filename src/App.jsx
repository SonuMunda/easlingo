import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
