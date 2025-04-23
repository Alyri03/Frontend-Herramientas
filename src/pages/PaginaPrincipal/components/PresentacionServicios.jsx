import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const servicios = [
  {
    nombre: 'Centro Quirúrgico',
    descripcion:
      'Contamos con quirófanos modernos, equipados con tecnología de última generación para garantizar procedimientos seguros y efectivos en diversas especialidades médicas.',
    imagen:
      'https://www.clinicapj.org.pe/store-imagenes/clinica/Servicios/Quirurgico/Cl__nica_0374.jpg',
  },
  {
    nombre: 'Medicina física y rehabilitación',
    descripcion:
      'Ofrecemos terapias especializadas para ayudarte a recuperar tu movilidad, fuerza y bienestar físico, adaptadas a tus necesidades y con un enfoque integral en tu recuperación.',
    imagen:
      'https://web.sisol.gob.pe/wp-content/uploads/2023/04/9-TERAPIA-FISICA-Y-REHABILITACION.jpg',
  },
  {
    nombre: 'Atención Hospitalaria',
    descripcion:
      'Brindamos un servicio de hospitalización cálido y seguro, con profesionales altamente capacitados y atención personalizada las 24 horas del día.',
    imagen:
      'https://www.esan.edu.pe/images/blog/2020/08/20/1500x844-flujo-pacientes.jpg',
  },
  {
    nombre: 'Emergencia Adulta',
    descripcion:
      'Atendemos urgencias médicas en adultos con rapidez y eficiencia, priorizando el diagnóstico oportuno y la intervención inmediata en un entorno seguro.',
    imagen:
      'https://cdn.sanity.io/images/1gm9mx7i/production/5498774875d711f9ce7c570834bbd761b4efb532-1060x424.jpg?w=1920&q=90&fit=max&auto=format',
  },
  {
    nombre: 'Emergencia Pediátrica',
    descripcion:
      'Un espacio especialmente diseñado para la atención de emergencias en niños, con equipos médicos especializados y un enfoque centrado en el bienestar infantil.',
    imagen:
      'https://www.insnsb.gob.pe/wp-content/uploads/2020/01/DSC_3027.jpg',
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