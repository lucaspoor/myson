import logo from "./logo.svg";
import "../public/scss/style.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Discount } from "./components/Discount";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Courses } from "./components/Courses";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />

      <div className="main-wrapper ">
        <Hero />

        <Info />

        <Discount />

        <Services />

        <Gallery />

        <Testimonials />

        <Courses />

        <Footer />
      </div>
    </div>
  );
}

export default App;
