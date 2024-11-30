import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import Brand from "./components/Slider/Brand";
import Description from "./components/Banner/Description";
import Footer from "./components/Footer/Footer";
import Choose from "./components/Banner/Choose";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Products />
        <Description />
        <Brand />
        <Banner />
        <Choose />
        <Footer />
      </div>
    </>
  );
}

export default App;
