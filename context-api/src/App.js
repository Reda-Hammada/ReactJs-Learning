import './App.css';
import {UserProvider} from './components/useContext';
import  Container  from './components/Container';


function App() {
  return (
    <div className="App">

       <UserProvider value='reda'>
          <Container />
       </UserProvider>


    </div>
  );
}

export default App;
