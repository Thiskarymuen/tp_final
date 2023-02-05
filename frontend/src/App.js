import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from "./components/layout/Nav";

import Inicio from './pages/InicioPage';
import Contacto from './pages/ContactoPage';
import Profesionales from './pages/ProfesionalesPage';
import Psicologia from './pages/PsicologiaPage';

function App() {
  return (
    <Router>

    <Nav/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/profesionales" element={<Profesionales />} />
        <Route path="/ContactoPage" element={<Contacto />} />
        <Route path='/PsicologiaPage' element={<Psicologia />} />
      </Routes>

    </Router>
  );
}

export default App;
