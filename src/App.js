import "./App.css";
import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portrait from "./components/Portrait";
import Photos from "./components/Photos";
import { useState } from "react";

function App() {
  // set hook
  const [front, flip] = useState(true);

  const flipCard = () => flip(!front);
  const deg = Math.random(1) * 10 - 5;

  return (
    <>
      <Header title="Alex Singleton" action={flipCard} />
      <div id="mainContent">
        <AboutMe card={front} />
        <hr />
        <Photos deg={deg} />
        <Portrait />
        <hr />
        <Skills />
        <Navigation />
        <Footer />
      </div>
    </>
  );
}

export default App;
