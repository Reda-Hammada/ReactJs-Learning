import React from "react";
import logo from "./logo.svg";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";
import Counter from "./components/counter/Counter";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={["HTML", "CSS", "JavaScript", "PHP"]} />
      <Counter />
    </div>
  );
}

export default App;
