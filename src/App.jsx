import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AppRoutes from '@/routes/Routes.jsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = () => {
  const location = useLocation();

  const noHeader = [
    '/login',
    '/registro',
    '/intranet',
  ].some((path) => location.pathname.startsWith(path)) || location.pathname === '/404';

  const noFooter = [
    '/login',
    '/registro',
    '/intranet',
    '/detalle-medico',
  ].some((path) => location.pathname.startsWith(path)) || location.pathname === '/404';

  return (
    <>
      {!noHeader && <Header />}
      <AppRoutes />
      {!noFooter && <Footer />}
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
