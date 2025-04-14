import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const valoresData = [
  {
    titulo: 'Compromiso',
    descripcion:
      'Nos comprometemos a brindar atención de calidad y a ser responsables con la salud de cada paciente. Trabajamos con dedicación para garantizar el bienestar de nuestra comunidad, ofreciendo servicios médicos eficientes y confiables.',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/nosotros_web/Valores/VALORES-_EMPAT__A_800X_744_PX.jpg',
  },
  {
    titulo: 'Vocación de Servicio',
    descripcion:
      'Servimos con empatía, respeto y entrega, priorizando siempre las necesidades de nuestros pacientes y sus familias.',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/nosotros_web/Valores/VALOR_-_VOCACI__N_DE_SERVICIO.jpg',
  },
  {
    titulo: 'Excelencia Médica',
    descripcion:
      'Nos esforzamos por ofrecer servicios de salud con altos estándares de calidad, basados en conocimientos actualizados y buenas prácticas.',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/nosotros_web/Valores/VALORES-_EMPAT__A_800X_744_PX.jpg',
  },
  {
    titulo: 'Innovación',
    descripcion:
      'Incorporamos tecnologías y procesos innovadores para mejorar continuamente la atención y eficiencia médica.',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/nosotros_web/Valores/VALOR_-_VOCACI__N_DE_SERVICIO.jpg',
  },
  {
    titulo: 'Seguridad y Confianza',
    descripcion:
      'Garantizamos entornos seguros y protocolos rigurosos, generando confianza en nuestros pacientes y colaboradores.',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/nosotros_web/Valores/VALORES-_EMPAT__A_800X_744_PX.jpg',
  },
];

// Imagen por defecto
const defaultImg =
  'https://www.stellamaris.com.pe/uploads/shares/nosotros_web/Valores/VALORES-_EMPAT__A_800X_744_PX.jpg';

const Valores = () => {
  const [activo, setActivo] = useState(null);
  const [ultimaActiva, setUltimaActiva] = useState(null);

  const toggle = (index) => {
    const isSame = activo === index;
    setActivo(isSame ? null : index);
    if (!isSame) {
      setUltimaActiva(index);
    }
  };

  const imagenActual =
    ultimaActiva !== null ? valoresData[ultimaActiva].imagen : defaultImg;

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-12 items-start">
      {/* Acordeones */}
      <div className="w-full md:w-1/2" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Conoce nuestros <span className="text-cyan-600">valores</span>
        </h2>

        <div className="space-y-4">
          {valoresData.map((valor, index) => {
            const isActive = activo === index;

            return (
              <div
                key={index}
                className={`rounded-xl transition border border-gray-300 overflow-hidden ${
                  isActive ? 'bg-gray-100 shadow-md' : 'bg-white'
                }`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-medium text-black"
                  onClick={() => toggle(index)}
                >
                  <span>{valor.titulo}</span>
                  <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} />
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isActive ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-sm sm:text-base text-gray-800 leading-relaxed space-y-4">
                    <p>{valor.descripcion}</p>

                    {/* Imagen solo en mobile */}
                    <div className="block md:hidden">
                      <img
                        src={valor.imagen}
                        alt={valor.titulo}
                        className="mt-4 w-full max-h-64 object-contain rounded-[40px] shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Imagen fija a la derecha en desktop */}
      <div className="hidden md:block w-full md:w-1/2" data-aos="fade-up">
        <img
          src={imagenActual}
          alt="Valor activo"
          className="rounded-[40px] object-cover w-full max-h-[420px] shadow-lg transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default Valores;
