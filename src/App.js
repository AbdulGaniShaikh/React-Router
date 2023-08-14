import React from'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Card from './components/Card';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/about" Component={About } />
        <Route path="/contact" Component={Contact} />
        <Route path='/contact/:title' element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
