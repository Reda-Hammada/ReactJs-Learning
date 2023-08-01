import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ObjectUseState';
import ArrayUseState from './components/ArrayUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Render behavior in React</h1>
        <UseState />
        <UseReducer />
        <ObjectUseState />
        <ArrayUseState />
      </header>
    </div>
  );
}

export default App;
