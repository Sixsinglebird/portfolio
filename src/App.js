import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyWork from "./components/MyWork";
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
      <MyWork />
      <Footer />
    </>
  );
}

export default App;
