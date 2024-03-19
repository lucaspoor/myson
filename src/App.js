import logo from "./logo.svg";
import "../src/scss/style.css";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";

function App() {
  return (
    <FormspreeProvider project="2431245809828756720">
      <div>
        <BrowserRouter>
          <NavBar />

          <div className="main-wrapper ">
            <Main />

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </FormspreeProvider>
  );
}

export default App;
