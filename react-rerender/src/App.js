import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ObjectUseState';
import ArrayUseState from './components/ArrayUseState';
import Parent from './components/Parent-Child/Parent';
import ParentOne from './components/optimization/ReactMemo/ParentOne';
import ParentTwo from './components/incorectOptimization/ParentTwo';
import MemoParent from './components/optimization/useMemo/MemoParent';
import CallbackParent from './components/optimization/useCallBack/CallbackParent';
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
        <ParentTwo />
        <MemoParent />
        <CallbackParent />
      </header>
    </div>
  );
}

export default App;
