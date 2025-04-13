// src/App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AppRoutes from '@/routes/Routes.jsx';
import Header from './components/Header';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
