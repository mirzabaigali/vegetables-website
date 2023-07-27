import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FeaturesCard from "./components/FeaturesCard";
import logo1 from "./images/feature-icon/ui-chat.svg";
import logo2 from "./images/feature-icon/truck-loaded.svg";
import logo3 from "./images/feature-icon/lemon.svg";
import logo4 from "./images/feature-icon/wheat.svg";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";
function App() {
  const featuresData = [
    { pic: logo1, text: "24/07 Support" },
    { pic: logo2, text: "Free Shipping" },
    { pic: logo3, text: "Fresh & Healthy" },
    { pic: logo4, text: "From Our Farm" },
  ];
  return (
    <>
      <Navbar />
      <Home />
      <FeaturesCard features={featuresData} />
      <About />
      <Products />
      <Reviews />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
