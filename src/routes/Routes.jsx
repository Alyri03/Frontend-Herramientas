import { Routes, Route, Navigate } from 'react-router-dom';

import PaginaPrincipal from '@/pages/PaginaPrincipal/PaginaPrincipal.jsx';
import PaginaNosotros from '../pages/Nosotros/PaginaNosotros.jsx';
import PaginaEspecialidades from '../pages/Especilidades/PaginaEspecialidades.jsx';
import Contactanos from '../pages/Contactanos/Contactanos.jsx';
import PaginaServicios from '../pages/Servicios/PaginaServicios.jsx';
import { Login } from '../pages/Usuarios/Login.jsx';
import Register from '../pages/Usuarios/Register';
import ClientLayout from '../pages/ClinicaVirtual/ClientLayout.jsx';
import Inicio from '../pages/ClinicaVirtual/Inicio.jsx';
import NoDisponible from '../pages/NoDisponible.jsx';
import EquipoMedico from '../pages/Medicos/PaginaEquipoMedico.jsx';
import DetalleMedico from '../pages/Medicos/DetalleMedicos.jsx';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/nosotros" element={<PaginaNosotros />} />
      <Route path="/especialidades" element={<PaginaEspecialidades />} />
      <Route path="/equipo-medico" element={<EquipoMedico />}/>
      <Route path="/detalle-medico" element={<DetalleMedico />}/>
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/servicios" element={<PaginaServicios />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      <Route path="/clinica-virtual" element={<ClientLayout />}>
        <Route path="inicio" element={<Inicio />} />
      </Route>
      <Route path="/404" element={<NoDisponible />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
export default AppRoutes;

