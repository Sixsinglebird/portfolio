import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { useState } from "react";

function App() {
  // set hook
  const [front, flip] = useState(true);

  const flipCard = () => flip(!front);

  return (
    <>
      <Header title="Alex Singleton" action={flipCard} />
      <AboutMe card={front} />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
