import Logo from "@/assets/images/Logo.png";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1B669A] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo y botón */}
        <div className="flex flex-col items-start gap-4">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-auto object-contain bg-white p-1 rounded-xl"
            />
          </Link>
          <Link
            to="/login"
            className="bg-white text-[#1B669A] px-4 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Agenda tu cita
          </Link>
        </div>

        {/* Explorar */}
        <div>
          <h3 className="text-xl font-bold mb-4">Explorar</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/nosotros" className="hover:underline">Quienes somos</Link></li>
            <li><Link to="#" className="hover:underline">Acreditaciones</Link></li>
            <li><Link to="#" className="hover:underline">Convenios de salud</Link></li>
            <li><Link to="/especialidades" className="hover:underline">Especialidades</Link></li>
          </ul>
        </div>

        {/* Términos */}
        <div>
          <h3 className="text-xl font-bold mb-4">Términos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:underline">Flujo de reclamaciones</Link></li>
            <li><Link to="#" className="hover:underline">Condiciones de uso médico virtual</Link></li>
            <li><Link to="#" className="hover:underline">Canal de integridad</Link></li>
            <li><Link to="#" className="hover:underline">Términos y condiciones</Link></li>
          </ul>
        </div>

        {/* Canales */}
        <div>
          <h3 className="text-xl font-bold mb-4">Canales</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/p/Cl%C3%ADnica-Regional-Ica-61563832985063"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Clínica Regional Ica. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
