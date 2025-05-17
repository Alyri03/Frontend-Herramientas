import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarCheck,
  faUser,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { label: "Inicio", icon: faHouse, to: "/intranet/paciente" },
    { label: "Mis citas", icon: faCalendarCheck, to: "/intranet/paciente/citas" },
    { label: "Historial", icon: faNotesMedical, to: "/intranet/paciente/historial" },
    { label: "Mi Perfil", icon: faUser, to: "/intranet/paciente/perfil" },
  ];

  const NavLinks = () => (
    <>
      <h2 className="text-xl font-bold mb-4">Clínica ICA</h2>
      <Separator className="mb-4" />
      <div className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.to
              ? "bg-blue-100 text-blue-700"
              : "hover:bg-muted text-muted-foreground"
              }`}
          >
            <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );

  const UserInfo = () => (
    <div className="text-sm border-t pt-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-xs">
          LE
        </div>
        <div>
          <p className="font-medium">Luis Enrique</p>
          <p className="text-xs text-muted-foreground">luis.enrique@email.com</p>
        </div>
      </div>

      {/* Logout icon */}
      <button
        onClick={() => {
          alert("Sesión cerrada 😄");
        }}
        className="text-gray-400 hover:text-red-600 transition-colors duration-500"
      >
        <FontAwesomeIcon icon={faRightFromBracket} className="w-4 h-4" />
      </button>
    </div>
  );


  return (
    <>
      {/* 📱 Sidebar en mobile (con botón ☰) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden fixed top-4 left-4 z-50">
            ☰
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <div className="flex flex-col h-full justify-between p-4">
            <div><NavLinks /></div>
            <UserInfo />
          </div>
        </SheetContent>
      </Sheet>

      {/* 💻 Sidebar fijo en escritorio */}
      <div className="hidden md:flex md:flex-col md:justify-between md:w-64 md:min-h-screen md:border-r md:bg-white md:p-4">
        <div><NavLinks /></div>
        <UserInfo />
      </div>
    </>
  );
}
