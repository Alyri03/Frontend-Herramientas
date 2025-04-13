import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from '@/pages/PaginaPrincipal/PaginaPrincipal.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
