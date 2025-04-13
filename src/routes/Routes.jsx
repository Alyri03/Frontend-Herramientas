import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from '@/pages/PaginaPrincipal/PaginaPrincipal.jsx';
import NoDisponible from '../pages/NoDisponible.jsx';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="*" element={<NoDisponible />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
