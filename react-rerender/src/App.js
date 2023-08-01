import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ObjectUseState';
import ArrayUseState from './components/ArrayUseState';
import Parent from './components/Parent-Child/Parent';
import ParentOne from './components/optimization/ReactMemo/ParentOne';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Render behavior in React</h1>
        <UseState />
        <UseReducer />
        <ObjectUseState />
        <ArrayUseState />
        <Parent />
        <ParentOne />
      </header>
    </div>
  );
}

export default App;
