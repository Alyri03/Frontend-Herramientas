import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

const RutaProtegidaPorRol = ({ rolPermitido }) => {
  const { user } = useContext(AuthContext);

  // if (!user) return <Navigate to="/login" replace />;
  // if (user.role !== rolPermitido) return <Navigate to="/404" replace />;

  return <Outlet />;
};

export default RutaProtegidaPorRol;
