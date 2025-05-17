import { Routes, Route, Navigate } from 'react-router-dom';

// 🏠 Páginas principales
import PaginaPrincipal from '@/pages/pagina-publica/PaginaPrincipal/PaginaPrincipal.jsx';
import PaginaNosotros from '@/pages/pagina-publica/Nosotros/PaginaNosotros.jsx';
import PaginaEspecialidades from "@/pages/pagina-publica/Especilidades/PaginaEspecialidades.jsx";
import PaginaServicios from '@/pages/pagina-publica/Servicios/PaginaServicios.jsx';
import Contactanos from '@/pages/pagina-publica/Contactanos/Contactanos.jsx';

// 👨‍⚕️ Médicos
import EquipoMedico from '@/pages/pagina-publica/Medicos/PaginaEquipoMedico.jsx';
import DetalleMedico from '@/pages/pagina-publica/Medicos/DetalleMedicos.jsx';

// 👤 Usuarios
import { Login } from '@/pages/pagina-publica/Usuarios/Login.jsx';
import Register from '@/pages/pagina-publica/Usuarios/Register.jsx';

// ❌ Página 404
import NoDisponible from '@/pages/NoDisponible.jsx';

// 🧑‍💼 Intranet
import IntranetLayout from '@/pages/Intranet/IntranetLayout.jsx';
import InicioPaciente from '@/pages/Intranet/paciente/InicioPaciente.jsx';
import HistorialPaciente from '@/pages/Intranet/paciente/HistorialPaciente';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🌐 Sitio Público */}
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/nosotros" element={<PaginaNosotros />} />
      <Route path="/especialidades" element={<PaginaEspecialidades />} />
      <Route path="/medicos-equipo" element={<EquipoMedico />} />
      <Route path="/detalle-medico" element={<DetalleMedico />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/servicios" element={<PaginaServicios />} />

      {/* 👤 Autenticación */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      {/* 🔒 Intranet protegida */}
      <Route path="/intranet" element={<IntranetLayout />}>
        <Route index element={<InicioPaciente />} />
        <Route path="paciente" element={<InicioPaciente />} />
        <Route path="paciente/citas" element={<h1>Citas</h1>} />
        <Route path="paciente/historial" element={<HistorialPaciente/>} />
        <Route path="paciente/perfil" element={<h1>Perfil</h1>} />
      </Route>

      {/* ❌ Ruta no encontrada */}
      <Route path="/404" element={<NoDisponible />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRoutes;
