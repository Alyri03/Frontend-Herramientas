import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AppRoutes from '@/routes/Routes.jsx';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  const location = useLocation();

  const noHeaderNoFooter = ['/login', '/registro', '/clinica-virtual/inicio', '/clinica-virtual/mis-citas','/clinica-virtual/resultados',
    '/clinica-virtual/historial-clinico'
  ].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Header/>
      <AppRoutes />
      <Footer/>
    </>
  );
};


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
