import { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const navItems = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Equipo Médico", href: "/medicos-equipo" },
    { name: "Especialidades", href: "/especialidades" },
    { name: "Contáctanos", href: "/Contactanos" },
    { name: "Servicios", href: "/servicios" },
  ];

  const dropdownItems = [
    { name: "Centro Quirurgico", href: "#" },
    { name: "Atencion Hospitalaria", href: "#" },
    { name: "Laboratorio Clinico", href: "#" },
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
              item.name === "Servicios" ? (
                <div key={i} className="relative group">
                  <Link
                    to="/servicios"
                    className="relative flex items-center gap-1 py-2 hover:text-[#2F71A1] group transition"
                    onMouseEnter={() => setMenu(true)}
                    onMouseLeave={() => setMenu(false)}
                  >
                    {item.name}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2F71A1] transition-all duration-300 group-hover:w-full" />
                  </Link>


                  <div className={`${menu ? "block" : "hidden"} absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300`}>
                    <ul className="flex flex-col py-2 text-sm text-gray-700">
                      {dropdownItems.map((d, j) => (
                        <li key={j}>
                          <Link to={d.href} className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2F71A1] transition">{d.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={i}
                  to={item.href}
                  className="relative block py-2 hover:text-[#2F71A1] transition group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2F71A1] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
          </div>

          {/* Botón Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/login"
              className="border-[3px] border-[#2F71A1] text-[#2F71A1] px-5 py-2 rounded-full hover:bg-[#2F71A1] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Mi Clínica Virtual
            </Link>
          </div>

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
                  <Link to={item.href}
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
                to="/login"
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