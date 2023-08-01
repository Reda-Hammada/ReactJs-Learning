import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ObjectUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Render behavior in React</h1>
        <UseState />
        <UseReducer />
        <ObjectUseState />
      </header>
    </div>
  );
}

export default App;
