import logo from './logo.svg';
import './App.css';
import {QueryClient,QueryClientProvider} from 'react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './components/Home.page';
import SuperHero from './components/SuperHero.page';

const queryClient =  new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient} >
        <Router>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/SuperHeroes' element={<SuperHero />}/>
            </Routes>
          </div>
       </Router>
       <ReactQueryDevtools  />
      </QueryClientProvider>
  );
}

export default App;
