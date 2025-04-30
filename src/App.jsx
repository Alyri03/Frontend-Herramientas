import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AppRoutes from '@/routes/Routes.jsx';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  const location = useLocation();

  const noHeaderNoFooter = [
    '*',
    '/login',
    '/registro',
    '/clinica-virtual/',
    '/clinica-virtual/inicio',
    '/clinica-virtual/mis-citas',
    '/clinica-virtual/resultados',
    '/clinica-virtual/historial-clinico'
  ].some((path) => location.pathname.startsWith(path)) || location.pathname === '/404';

  return (
    <>
      {!noHeaderNoFooter && <Header />}
      <AppRoutes />
      {!noHeaderNoFooter && <Footer />}
    </>
  );
};


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    console.log("Prueba CI/CD con");
  }, []);

  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
