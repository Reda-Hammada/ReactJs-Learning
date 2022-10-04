import * as calculator from './importExport/calc';

function App() {
  
  return (
    <div className="App">
        <ul>
          <li>{calculator.add(6,6)}</li>
          <li>{calculator.divide(10,2)}</li>
          <li>{calculator.multiply(50,10)}</li>
          <li>{calculator.subtract(10, 3)}</li>
        </ul>
    </div>
  );
}

export default App;
