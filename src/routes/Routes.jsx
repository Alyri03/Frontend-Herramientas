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
import DetalleEspecialidades from '../pages/Especilidades/DetalleEspecialidades.jsx';



const AppRoutes = () => {
  return (
    <Routes>
      {/* 🌐 Sitio Público */}
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/nosotros" element={<PaginaNosotros />} />
      <Route path="/especialidades" element={<PaginaEspecialidades />} />
      <Route path="/medicos-equipo" element={<EquipoMedico />} />
      <Route path="/detalle-medico/:id" element={<DetalleMedico />}/>
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/servicios" element={<PaginaServicios />} />

      {/* 👤 Autenticación */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/detalle-especialidad/:id" element={<DetalleEspecialidades />} />
      
      {/* 🔒 Intranet protegida */}
      <Route path="/intranet" element={<IntranetLayout />}>
        <Route index element={<InicioPaciente />} />
        <Route path="paciente" element={<InicioPaciente />} />
        <Route path="paciente/citas" element={<CitasPaciente/>}/>
        <Route path="paciente/historial" element={<HistorialPaciente/>} />
        <Route path="paciente/perfil" element={<PerfilPaciente/>} />
      </Route>

      {/* ❌ Ruta no encontrada */}
      <Route path="/404" element={<NoDisponible />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRoutes;
