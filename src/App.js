import {
  Routes, Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'

import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Rates from './pages/Rates'
import Reserve from './pages/Reserve'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <nav>
          <NavBar />
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="activities" element={ <Activities /> } />
            <Route path="rates" element={ <Rates /> } />
            <Route path="reserve" element={ <Reserve/> } />
            <Route path="contact" element={ <Contact /> } />
          </Routes>
      </nav>

    </div>
  );
}

export default App;
