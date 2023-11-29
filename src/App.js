import "./App.css";
import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portrait from "./components/Portrait";
import Photos from "./components/Photos";
import { useState, useEffect } from "react";

function App() {
  // useEffect is a hook that runs when the page loads
  useEffect(() => {
    console.log("Page loaded");
  });

  // set hook
  // useState creates a variable with two values. one is the state of the card,
  // the other is a function to change the state of the card
  // true is the default value.
  const [front, flip] = useState(true);

  // flip calls a useState function to change the state of the card
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
