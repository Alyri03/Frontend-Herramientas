import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from '@/pages/PaginaPrincipal/PaginaPrincipal.jsx';
import PaginaNosotros from '../pages/Nosotros/PaginaNosotros.jsx';
import Contactanos from '../pages/Contactanos/Contactanos.jsx';
import NoDisponible from '../pages/NoDisponible.jsx';
import Register from '../pages/Usuarios/Register';
import { Login } from '../pages/Login/Login.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/nosotros" element={<PaginaNosotros />}/>
        <Route path="/Contactanos" element={<Contactanos />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/registro" element={<Register />} />
        <Route path="*" element={<NoDisponible />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
