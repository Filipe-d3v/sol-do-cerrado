import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home/Home';
import Main from './components/layouts/Main';
import Colaboradores from './components/pages/Colobaradores/Colaboradores';
import Nav from './components/layouts/Nav';
import Sobre from './components/pages/Sobre/Sobre';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
     <Nav />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
