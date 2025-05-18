import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

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

// Hook para detectar si está en escritorio
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
  const [colapsado, setColapsado] = useState(false);
  const esEscritorio = useEsEscritorio();

  const navItems = [
    { label: "Inicio", icon: <Home size={18} />, to: "/intranet/paciente" },
    { label: "Mis citas", icon: <CalendarCheck size={18} />, to: "/intranet/paciente/citas" },
    { label: "Historial", icon: <NotebookText size={18} />, to: "/intranet/paciente/historial" },
    { label: "Mi Perfil", icon: <User size={18} />, to: "/intranet/paciente/perfil" },
  ];

  const NavLinks = () => (
    <>
      <div className="flex items-center justify-between mb-4">
        {!colapsado && <h2 className="text-xl font-bold">Clínica ICA</h2>}

        {/* Solo visible en escritorio */}
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
                  LE
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-48 p-2">
                <div className="mb-2">
                  <p className="font-medium">Luis Enrique</p>
                  <p className="text-xs text-muted-foreground">luis.enrique@email.com</p>
                </div>
                <Separator />
                <button
                  onClick={() => alert("Sesión cerrada 😄")}
                  className="w-full text-sm text-left text-red-600 hover:bg-red-50 px-2 py-1 rounded-md transition"
                >
                  Cerrar sesión
                </button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-xs">
                LE
              </div>
              <div>
                <p className="font-medium">Luis Enrique</p>
                <p className="text-xs text-muted-foreground">luis.enrique@email.com</p>
              </div>
            </div>
            <button
              onClick={() => alert("Sesión cerrada 😄")}
              className="text-gray-400 hover:text-red-600 transition-colors duration-500"
              title="Cerrar sesión"
            >
              <LogOut size={18} />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* 📱 Sidebar en mobile (☰) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden fixed top-4 left-4 z-50">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <div className="flex flex-col h-full justify-between p-4">
            <div><NavLinks /></div>
            <UserInfo />
          </div>
        </SheetContent>
      </Sheet>

      {/* 💻 Sidebar en escritorio */}
      <div
        className={`hidden md:flex flex-col justify-between border-r bg-white transition-all duration-300 p-4 ${
          colapsado ? "w-20" : "w-64"
        }`}
      >
        <div><NavLinks /></div>
        <UserInfo />
      </div>
    </>
  );
}
