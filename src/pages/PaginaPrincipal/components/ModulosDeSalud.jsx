import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVials,
  faUserDoctor,
  faTruckMedical,
  faSyringe,
  faClock,
  faNotesMedical,
} from '@fortawesome/free-solid-svg-icons';

const ModulosDeSalud = () => {
  const modulos = [
    { nombre: 'Laboratorio', icono: faVials, color: 'var(--color-secundario)' },
    { nombre: 'Atención Médica', icono: faUserDoctor, color: '#1B669A' },
    { nombre: 'Emergencias y Urgencias', icono: faTruckMedical, color: 'var(--color-secundario)' },
    { nombre: 'Enfermería', icono: faSyringe, color: '#1B669A' },
    { nombre: 'Atención 24 horas', icono: faClock, color: 'var(--color-secundario)' },
    { nombre: 'Consultas Médicas', icono: faNotesMedical, color: '#1B669A' },
  ];

  const Buscados = [
    { nombre: 'Sacar una cita' },
    { nombre: 'Servicios' },
    { nombre: 'Contactar' },
    { nombre: 'Ver Médicos' },
    { nombre: 'Mis Citas' }
  ];

  return (
    <>
      <div className="flex justify-center mt-10">
        <section className="w-full max-w-7xl px-4">
          {/* Barra de acciones */}
          <div className="bg-[var(--color-primario)] px-6 py-3 rounded-full flex items-center gap-x-6 w-full">
            <span className="text-white font-semibold text-2xl whitespace-nowrap mx-auto">
              ¿Qué quieres hacer hoy?
            </span>
            <div className="flex gap-4 ml-auto">
              {Buscados.map((item, idx) => (
                <button
                  key={idx}
                  className="px-4 py-1 text-base border-3 rounded-full text-[var(--color-secundario)] border-[var(--color-secundario)] font-medium bg-white hover:bg-[var(--color-secundario)] hover:text-white transition-all"
                >
                  {item.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Título justo debajo */}
          <div className="text-start mt-8">
            <h2 className="text-3xl font-medium">La mejor Clínica de Ica</h2>
            <p className="text-gray-600 mt-2">
              Atendemos todas tus necesidades de salud, para cuidarte siempre.
            </p>
          </div>

          {/* Módulos de salud */}
          <div className="flex flex-wrap justify-center gap-10 mt-12">
            {modulos.map((modulo, idx) => (
              <div key={idx} className="flex flex-col items-center max-w-[120px]">
                <div
                  className="w-[80px] h-[80px] flex items-center justify-center rounded-full"
                  style={{ backgroundColor: modulo.color }}
                >
                  <FontAwesomeIcon icon={modulo.icono} className="text-white text-2xl" />
                </div>
                <p className="mt-3 font-medium text-sm text-center">{modulo.nombre}</p>
              </div>
            ))}
          </div>

          {/* Botón "Conocer más" */}
          <div className="flex justify-center mt-10">
            <button className="px-6 py-1 text-base border-3 rounded-full text-[#4FACA9] border-[#4FACA9] font-medium hover:bg-[var(--color-secundario)] hover:text-white transition-all">
              Conocer más
            </button>
          </div>
        </section>
      </div>

    </>
  );
};

export default ModulosDeSalud;
