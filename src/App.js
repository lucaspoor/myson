import logo from "./logo.svg";
import "../src/scss/style.css";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />

      <div className="main-wrapper ">
        <Main />

        <Footer />
      </div>
    </div>
  );
}

export default App;
