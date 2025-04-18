import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const servicios = [
  {
    nombre: 'Centro Quirúrgico',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Centro%20Quirurgico/CENTRO_QUIR__RGICO_408_X_592.jpg',
  },
  {
    nombre: 'Medicina física y rehabilitación',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Medicina%20F%C3%ADsica%20y%20Rehabilitaci%C3%B3n/Medfisica_Bannerweb_medicos.jpg',
  },
  {
    nombre: 'Atención Hospitalaria',
    descripcion:
      'Brindamos servicios de hospitalización con atención profesional las 24 horas...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Centro%20Quirurgico/CENTRO_QUIR__RGICO_408_X_592.jpg',
  },
  {
    nombre: 'Emergencia Adulta',
    descripcion:
      'Atención inmediata y especializada para adultos en casos de urgencia...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Centro%20Quirurgico/CENTRO_QUIR__RGICO_408_X_592.jpg',
  },
  {
    nombre: 'Emergencia Pediátrica',
    descripcion:
      'Espacios diseñados y adaptados para la atención rápida y segura de emergencias en niños...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Centro%20Quirurgico/CENTRO_QUIR__RGICO_408_X_592.jpg',
  },
];

const PresentacionServicios = () => {
  const [servicioActivo, setServicioActivo] = useState(servicios[0]);

  return (
    <div
      className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-10 px-4 py-14 lg:flex-row"
      data-aos="fade-up"
    >
      {/* Columna izquierda */}
      <div className="w-full lg:w-1/3" data-aos="fade-right" data-aos-delay="100">
        <h2 className="mb-6 text-center text-2xl font-semibold leading-tight sm:text-3xl lg:text-left">
          Contamos con una amplia variedad de{' '}
          <span className="text-[#1B669A]">servicios de salud</span>
        </h2>

        {/* Botones */}
        <div className="flex w-full items-center gap-3 overflow-x-auto whitespace-nowrap pb-2 lg:flex-col lg:items-start lg:overflow-visible lg:whitespace-normal">
          {servicios.map((servicio, idx) => (
            <button
              key={idx}
              onClick={() => setServicioActivo(servicio)}
              className={`flex h-[52px] w-[260px] items-center justify-center gap-2 rounded-full border px-6 text-center text-sm font-medium transition-all sm:text-base ${
                servicioActivo.nombre === servicio.nombre
                  ? 'bg-black text-white'
                  : 'border-gray-300 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {servicioActivo.nombre === servicio.nombre && (
                <FontAwesomeIcon icon={faArrowRight} />
              )}
              {servicio.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Imagen */}
      <div className="flex w-full justify-center lg:w-[300px]" data-aos="zoom-in" data-aos-delay="200">
        <img
          src={servicioActivo.imagen}
          alt={servicioActivo.nombre}
          className="h-[400px] w-[300px] rounded-full object-cover sm:h-[440px] sm:w-[320px]"
        />
      </div>

      {/* Texto */}
      <div className="flex w-full flex-col justify-start lg:w-1/3" data-aos="fade-left" data-aos-delay="300">
        <h3 className="mb-4 text-center text-3xl font-semibold lg:text-center">
          {servicioActivo.nombre}
        </h3>
        <p className="mb-4 text-center text-sm leading-relaxed text-gray-600 sm:text-base lg:text-left">
          {servicioActivo.descripcion}
        </p>
        <div className="mt-4 flex w-full justify-center lg:justify-center">
          <button className="group inline-flex items-center gap-2 rounded-full bg-[#1B669A] px-6 py-2 font-medium text-white transition-all hover:bg-[#15577e]">
            Conoce Más
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-sm transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentacionServicios;