import React from "react";
import logo from "./logo.svg";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={["HTML", "CSS", "JavaScript", "PHP"]} />
    </div>
  );
}

export default App;
