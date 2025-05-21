import { Routes, Route, Navigate } from 'react-router-dom'
import RutaProtegidaPorRol from "@/components/RutaProtegidaPorRol";


import PaginaPrincipal from '@/pages/pagina-publica/PaginaPrincipal/PaginaPrincipal.jsx';
import PaginaNosotros from '@/pages/pagina-publica/Nosotros/PaginaNosotros.jsx';
import PaginaEspecialidades from '@/pages/pagina-publica/Especilidades/PaginaEspecialidades.jsx';
import Contactanos from '@/pages/pagina-publica/Contactanos/Contactanos.jsx';
import PaginaServicios from '@/pages/pagina-publica/Servicios/PaginaServicios.jsx';
import { Login } from '@/pages/pagina-publica/Usuarios/Login.jsx';
import Register from '@/pages/pagina-publica/Usuarios/Register.jsx';
import NoDisponible from "../pages/NoDisponible.jsx"
import EquipoMedico from '@/pages/pagina-publica/Medicos/PaginaEquipoMedico.jsx';
import DetalleEspecialidades from '../pages/pagina-publica/Especilidades/DetalleEspecialidades.jsx';
import DetalleMedico from '@/pages/pagina-publica/Medicos/DetalleMedicos.jsx';

import IntranetLayout from '../pages/Intranet/IntranetLayout.jsx'
import InicioPaciente from '../pages/Intranet/paciente/InicioPaciente.jsx';
import CitasPaciente from "../pages/Intranet/paciente/CitasPaciente.jsx"
import HistorialPaciente from "../pages/Intranet/paciente/HistorialPaciente.jsx"
import PerfilPaciente from "../pages/Intranet/paciente/PerfilPaciente.jsx"

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🌐 Sitio Público */}
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/nosotros" element={<PaginaNosotros />} />
      <Route path="/especialidades" element={<PaginaEspecialidades />} />
      <Route path="/medicos-equipo" element={<EquipoMedico />} />
      <Route path="/detalle-medico/:id" element={<DetalleMedico />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/servicios" element={<PaginaServicios />} />

      {/* 👤 Autenticación */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/detalle-especialidad/:id" element={<DetalleEspecialidades />} />

      <Route path="/intranet" element={<IntranetLayout />}>
        {/* Rutas protegidas para PACIENTE */}
        <Route element={<RutaProtegidaPorRol rolPermitido="PACIENTE" />}>
          <Route path="paciente" element={<InicioPaciente />} />
          <Route path="paciente/citas" element={<CitasPaciente />} />
          <Route path="paciente/historial" element={<HistorialPaciente />} />
          <Route path="paciente/perfil" element={<PerfilPaciente />} />
        </Route>

        {/* Rutas protegidas para MÉDICO */}
        <Route element={<RutaProtegidaPorRol rolPermitido="MEDICO" />}>
          <Route path="medico" element={<div>Módulo médico inicio</div>} />
          <Route path="medico/agenda" element={<div>Agenda del médico</div>} />
          <Route path="medico/pacientes" element={<div>Pacientes asignados</div>} />
          <Route path="medico/perfil" element={<div>Perfil del médico</div>} />
        </Route>
      </Route>


      {/* ❌ Ruta no encontrada */}
      <Route path="/404" element={<NoDisponible />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRoutes;
