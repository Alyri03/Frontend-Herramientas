import { Routes, Route } from 'react-router-dom';

import PaginaPrincipal from '@/pages/PaginaPrincipal/PaginaPrincipal.jsx';
import PaginaNosotros from '../pages/Nosotros/PaginaNosotros.jsx';
import PaginaEspecialidades from '../pages/Especialidades/PaginaEspecialidades.jsx';
import Contactanos from '../pages/Contactanos/Contactanos.jsx';
import { Login } from '../pages/Login/Login.jsx';
import Register from '../pages/Usuarios/Register';
import ClientLayout from '../pages/ClinicaVirtual/ClientLayout.jsx';
import Inicio from '../pages/ClinicaVirtual/Inicio.jsx';
import NoDisponible from '../pages/NoDisponible.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/nosotros" element={<PaginaNosotros />} />
      <Route path="/especialidades" element={<PaginaEspecialidades />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      <Route path="/clinica-virtual" element={<ClientLayout />}>
        <Route path="inicio" element={<Inicio />} />
      </Route>
      <Route path="*" element={<NoDisponible />} />
    </Routes>
  );
}
export default AppRoutes;
