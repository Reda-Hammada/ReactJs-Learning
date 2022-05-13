import React from 'react';
import './App.css';
import Heading  from './components/Heading'; 
import Greet from './components/Greet';
import Propswithclass from './components/Propswithclass';

function App() {
  return (
    <div className="App">

      
        <Heading />
        <Greet />

        <Propswithclass name="Reda" email="example@gmail.com" phone="0601729302"/>




    </div>
  );
}

export default App;
