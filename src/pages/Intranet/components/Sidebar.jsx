import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/authContext";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Spinner from "@/components/Spinner";

import {
  Menu,
  ChevronFirst,
  ChevronLast,
  Home,
  CalendarCheck,
  User,
  NotebookText,
  LogOut,
} from "lucide-react";

function useEsEscritorio() {
  const [esEscritorio, setEsEscritorio] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const manejarResize = () => {
      setEsEscritorio(window.innerWidth >= 768);
    };
    window.addEventListener("resize", manejarResize);
    return () => window.removeEventListener("resize", manejarResize);
  }, []);

  return esEscritorio;
}

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const esEscritorio = useEsEscritorio();
  const [colapsado, setColapsado] = useState(false);
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const { user, logout } = useContext(AuthContext);

  let navItems = [];

  if (user?.role === "PACIENTE") {
    navItems = [
      { label: "Inicio", icon: <Home size={18} />, to: "/intranet/paciente" },
      {
        label: "Mis citas",
        icon: <CalendarCheck size={18} />,
        to: "/intranet/paciente/citas",
      },
      {
        label: "Historial",
        icon: <NotebookText size={18} />,
        to: "/intranet/paciente/historial",
      },
      {
        label: "Mi Perfil",
        icon: <User size={18} />,
        to: "/intranet/paciente/perfil",
      },
    ];
  } else if (user?.role === "MEDICO") {
    navItems = [
      { label: "Inicio", icon: <Home size={18} />, to: "/intranet/medico" },
      {
        label: "Mis pacientes",
        icon: <User size={18} />,
        to: "/intranet/medico/pacientes",
      },
      {
        label: "Agenda",
        icon: <CalendarCheck size={18} />,
        to: "/intranet/medico/agenda",
      },
      {
        label: "Perfil",
        icon: <User size={18} />,
        to: "/intranet/medico/perfil",
      },
    ];
  } else if (user?.role === "RECEPCIONISTA") {
    navItems = [
      {
        label: "Inicio",
        icon: <Home size={18} />,
        to: "/intranet/recepcionista",
      },
      {
        label: "Pacientes",
        icon: <User size={18} />,
        to: "/intranet/recepcionista/pacientes",
      },
      {
        label: "Médicos",
        icon: <User size={18} />,
        to: "/intranet/recepcionista/medicos",
      },
      {
        label: "Servicios",
        icon: <NotebookText size={18} />,
        to: "/intranet/recepcionista/servicios",
      },
      {
        label: "Seguros",
        icon: <NotebookText size={18} />,
        to: "/intranet/recepcionista/seguros",
      },
      {
        label: "Citas",
        icon: <CalendarCheck size={18} />,
        to: "/intranet/recepcionista/citas",
      },
      {
        label: "Reportes",
        icon: <NotebookText size={18} />,
        to: "/intranet/recepcionista/reportes",
      },
      {
        label: "Perfil",
        icon: <User size={18} />,
        to: "/intranet/recepcionista/perfil",
      },
    ];
  } else if (user?.role === "ADMINISTRADOR") {
    navItems = [
      {
        label: "Usuarios",
        icon: <User size={18} />,
        to: "/intranet/admin/usuarios",
      },
      {
        label: "Configuración",
        icon: <NotebookText size={18} />,
        to: "/intranet/admin/configuracion",
      },
    ];
  }

  const cerrarSesion = async () => {
    setLoadingLogout(true);
    await logout();

    const interval = setInterval(() => {
      const borrado =
        !localStorage.getItem("authUser") &&
        !sessionStorage.getItem("authUser");
      if (borrado) {
        clearInterval(interval);
        setMostrarDialogo(false);
        setLoadingLogout(false);
        navigate("/login");
      }
    }, 100);
  };

  const NavLinks = () => (
    <>
      <div className="flex items-center justify-between mb-4">
        {!colapsado && (
          <Link to="/" className="text-xl font-bold">
            Clínica ICA
          </Link>
        )}
        <button
          onClick={() => setColapsado(!colapsado)}
          className="hidden md:inline-flex text-muted-foreground hover:text-blue-600 transition"
          title={colapsado ? "Expandir menú" : "Colapsar menú"}
        >
          {colapsado ? <ChevronLast size={20} /> : <ChevronFirst size={20} />}
        </button>
      </div>
      {!colapsado && <Separator className="mb-4" />}
      <div className="space-y-2">
        {navItems.map((item) => {
          const esColapsado = colapsado && esEscritorio;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`group flex items-center ${
                esColapsado ? "justify-center p-2" : "gap-3 px-3 py-2"
              } rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.to
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-muted text-muted-foreground"
              }`}
            >
              {item.icon}
              {!esColapsado && item.label}
            </Link>
          );
        })}
      </div>
    </>
  );

  const UserInfo = () => {
    const esColapsado = colapsado && esEscritorio;
    const iniciales = user?.nombre?.slice(0, 2).toUpperCase() || "US";

    return (
      <div className="text-sm border-t pt-4">
        {esColapsado ? (
          <div className="flex justify-center">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-xs hover:opacity-90 transition"
                  title="Opciones de usuario"
                >
                  {iniciales}
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-48 p-2">
                <div className="mb-2">
                  <p className="font-medium">{user?.nombre || "Usuario"}</p>
                  <p className="text-xs text-muted-foreground">
                    {user?.correo}
                  </p>
                </div>
                <Separator />
                <Button
                  variant="ghost"
                  onClick={() => setMostrarDialogo(true)}
                  className="w-full text-left text-red-600 hover:bg-red-50"
                >
                  Cerrar sesión
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-xs">
                {iniciales}
              </div>
              <div>
                <p className="font-medium">{user?.nombre || "Usuario"}</p>
                <p className="text-xs text-muted-foreground">{user?.correo}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => setMostrarDialogo(true)}
              className="text-gray-400 hover:text-red-600"
              title="Cerrar sesión"
            >
              <LogOut size={18} />
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {loadingLogout && (
        <div className="fixed inset-0 bg-white/60 z-[999] flex items-center justify-center">
          <Spinner size={12} />
        </div>
      )}

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden fixed top-4 left-4 z-50">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <div className="flex flex-col h-full justify-between p-4">
            <div>
              <NavLinks />
            </div>
            <UserInfo />
          </div>
        </SheetContent>
      </Sheet>

      <div
        className={`hidden md:flex flex-col justify-between border-r bg-white transition-all duration-300 p-4 ${
          colapsado ? "w-20" : "w-64"
        }`}
      >
        <div>
          <NavLinks />
        </div>
        <UserInfo />
      </div>

      <Dialog open={mostrarDialogo} onOpenChange={setMostrarDialogo}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¿Cerrar sesión?</DialogTitle>
            <DialogDescription>
              Esta acción cerrará tu sesión actual. ¿Estás seguro?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setMostrarDialogo(false)}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={cerrarSesion}
              disabled={loadingLogout}
            >
              {loadingLogout ? "Cerrando..." : "Cerrar sesión"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
