import { Link } from 'react-router-dom';
import Logo from "@/assets/images/Logo.png";
import { useContext, useState } from "react";
import { AuthContext } from '../context/authContext';

const Header = () => {
  const [nav, setNav] = useState(false);
  const { user } = useContext(AuthContext);

  const navItems = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Equipo Médico", href: "/medicos-equipo" },
    { name: "Especialidades", href: "/especialidades" },
    { name: "Contáctanos", href: "/contactanos" },
    { name: "Servicios", href: "/servicios" },
  ];

  return (
    <>
      <div className="w-full h-6 bg-[#1B669A]" />

      <nav className="sticky top-0 z-50 bg-white w-full border-b-2 border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-1 h-12 bg-[#1B669A] rounded-sm hidden sm:block" />
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-14 sm:h-16 w-auto max-w-[200px] object-contain" />
            </Link>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-800 items-center">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="relative block py-2 hover:text-[#2F71A1] transition group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2F71A1] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link
            to={
              user?.role === "PACIENTE"
                ? '/intranet/paciente'
                : user?.role === "MEDICO"
                  ? '/intranet/medico'
                  : '/login'
            }
            className="border-[3px] border-[#2F71A1] text-[#2F71A1] px-5 py-2 rounded-full hover:bg-[#2F71A1] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Mi Clínica Virtual
          </Link>


          {/* Botón Menú Mobile */}
          <div className="lg:hidden">
            <button onClick={() => setNav(!nav)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {nav ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Overlay Mobile */}
        {nav && (
          <div className="fixed inset-0 z-40 bg-white w-full max-w-full overflow-x-hidden flex flex-col px-6 py-4 gap-6">
            {/* Header Mobile */}
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-1 h-10 bg-[#1B669A] rounded-sm" />
                <img src={Logo} alt="Logo" className="h-14 w-auto max-w-[180px] object-contain" />
              </Link>
              <button onClick={() => setNav(!nav)} className="w-8 h-8 text-2xl text-gray-600 flex items-center justify-center focus:outline-none">
                &times;
              </button>
            </div>

            {/* Navegación Mobile */}
            <ul className="flex flex-col divide-y divide-gray-200">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.href}
                    className="flex justify-between items-center py-3.5 text-gray-800 text-base font-medium hover:text-[#2F71A1] transition"
                  >
                    {item.name}
                    <span className="text-xl text-gray-400">&rsaquo;</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Botón Mobile */}
            <div>
              <Link
                to={
                  user?.role === "PACIENTE"
                    ? '/clinica-virtual'
                    : user?.role === "MEDICO"
                      ? '/clinica-virtual'
                      : '/login'
                }
                className="w-full block border-[3px] border-[#2F71A1] text-[#2F71A1] text-center py-2.5 rounded-full font-semibold hover:bg-[#2F71A1] hover:text-white transition"
              >
                Mi Clínica Virtual
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
