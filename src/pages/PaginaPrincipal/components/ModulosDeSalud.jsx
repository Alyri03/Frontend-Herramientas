// src/components/ModulosDeSalud.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVials,
  faUserDoctor,
  faTruckMedical,
  faSyringe,
  faClock,
  faNotesMedical,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const ModulosDeSalud = () => {
  const modulos = [
    {
      nombre: 'Laboratorio',
      icono: faVials,
      color: 'var(--color-secundario)',
      shadow: 'rgba(27, 102, 154, 0.5)',
    },
    {
      nombre: 'Atención Médica',
      icono: faUserDoctor,
      color: '#1B669A',
      shadow: 'rgba(27, 102, 154, 0.5)',
    },
    {
      nombre: 'Emergencias y Urgencias',
      icono: faTruckMedical,
      color: 'var(--color-secundario)',
      shadow: 'rgba(27, 102, 154, 0.5)',
    },
    {
      nombre: 'Enfermería',
      icono: faSyringe,
      color: '#1B669A',
      shadow: 'rgba(27, 102, 154, 0.5)',
    },
    {
      nombre: 'Atención 24 horas',
      icono: faClock,
      color: 'var(--color-secundario)',
      shadow: 'rgba(27, 102, 154, 0.5)',
    },
    {
      nombre: 'Consultas Médicas',
      icono: faNotesMedical,
      color: '#1B669A',
      shadow: 'rgba(27, 102, 154, 0.5)',
    },
  ];

  const Buscados = [
    { nombre: 'Sacar una cita' },
    { nombre: 'Servicios' },
    { nombre: 'Contactar' },
    { nombre: 'Ver Médicos' },
    { nombre: 'Mis Citas' },
  ];

  return (
    <div className="flex justify-center px-4 mt-10">
      <section className="w-full max-w-7xl">
        {/* Barra de acciones */}
        <div
          className="flex flex-col sm:flex-row sm:items-center w-full gap-4 sm:gap-x-6 px-4 sm:px-6 py-4 rounded-2xl md:rounded-2xl lg:rounded-full bg-[var(--color-primario)] transition-shadow hover:shadow-[0_8px_30px_rgba(11,63,211,0.5)]"
          data-aos="fade-up"
        >
          <span className="mx-auto sm:text-left text-center text-2xl font-semibold text-white">
            ¿Qué quieres hacer hoy?
          </span>

          <div className="flex flex-wrap justify-center sm:justify-start w-full sm:w-auto gap-2 sm:gap-4 mx-auto">
            {Buscados.map((item, idx) => (
              <button
                key={idx}
                className="flex-shrink-0 px-4 py-1 text-sm sm:text-base font-medium text-[var(--color-secundario)] border-3 border-[var(--color-secundario)] rounded-full bg-white hover:bg-[var(--color-secundario)] hover:text-white transition-all"
              >
                {item.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Título */}
        <div className="mt-10 sm:mt-8 text-center sm:text-start" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold">
            La mejor Clínica de Ica
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Atendemos todas tus necesidades de salud, para cuidarte siempre.
          </p>
        </div>

        {/* Módulos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12 place-items-center">


          {modulos.map((modulo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center max-w-[120px]"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div
                className="flex items-center justify-center w-[80px] h-[80px] rounded-full cursor-pointer transition-all hover:scale-[1.03]"
                style={{
                  backgroundColor: modulo.color,
                  boxShadow: '0 0 0 transparent',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 25px ${modulo.shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 transparent';
                }}
              >
                <FontAwesomeIcon icon={modulo.icono} className="text-white text-2xl" />
              </div>
              <p className="mt-3 text-sm font-medium text-center">{modulo.nombre}</p>
            </div>
          ))}
        </div>

        {/* Botón "Conocer más" */}
        <div className="flex justify-center my-10" data-aos="fade-up">
          <button className="group flex items-center gap-2 px-6 py-2 text-base font-medium text-[var(--color-secundario)] border-3 border-[var(--color-secundario)] rounded-full hover:bg-[var(--color-secundario)] hover:text-white transition-all">
            Conocer más
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-sm transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModulosDeSalud;
