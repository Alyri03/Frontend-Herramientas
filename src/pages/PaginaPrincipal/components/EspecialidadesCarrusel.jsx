import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import {
  faHeartPulse,
  faBrain,
  faTooth,
  faUserDoctor,
  faChild,
  faUserNurse,
  faLungs,
  faStethoscope,
  faHospitalUser,
  faBone,
  faVenusMars,
  faWeightScale,
  faEye,
  faNotesMedical,
  faHeadSideVirus,
  faAppleAlt,
  faStar,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardEspecialidad from '../../../components/CardEspecialidad';

const especialidades = [
  { titulo: 'Medicina General', icono: faStethoscope },
  { titulo: 'Traumatología', icono: faBone },
  { titulo: 'Pediatría', icono: faChild },
  { titulo: 'Urología', icono: faHospitalUser },
  { titulo: 'Ginecología y Obstetricia', icono: faVenusMars },
  { titulo: 'Cirugía General', icono: faUserDoctor },
  { titulo: 'Neurología', icono: faBrain },
  { titulo: 'Neurocirugía', icono: faBrain },
  { titulo: 'Medicina física', icono: faUserNurse },
  { titulo: 'Medicina Interna', icono: faNotesMedical },
  { titulo: 'Cardiología', icono: faHeartPulse },
  { titulo: 'Flebología', icono: faLungs },
  { titulo: 'Gastroenterología', icono: faStethoscope },
  { titulo: 'Otorrinolaringología', icono: faEye },
  { titulo: 'Nutrición', icono: faAppleAlt },
  { titulo: 'Psicología', icono: faHeadSideVirus },
];

const EspecialidadesCarrusel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Se actualiza el swiper al montar para que reconozca los botones de navegación
    setTimeout(() => {
      if (window.dispatchEvent) {
        window.dispatchEvent(new Event('resize'));
      }
    }, 100);
  }, []);

  return (
    <div className="flex justify-center bg-[#f7f8fa] px-4 py-10">
      <div className="w-full max-w-7xl">
        {/* Título principal */}
        <div className="mb-5 flex items-center gap-3">
          <FontAwesomeIcon icon={faStar} className="text-2xl text-[#1B669A]" />
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Conoce todas nuestras especialidades médicas.
            </h2>
            <p className="text-2xl font-semibold text-[#1B669A] sm:text-3xl">
              Tu salud es nuestra prioridad
            </p>
          </div>
        </div>

        {/* Swiper Carrusel */}
        <Swiper
          modules={[Navigation, Grid]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          spaceBetween={20}
          grid={{ rows: 2, fill: 'row' }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              grid: { rows: 2, fill: 'row' },
            },
            768: {
              slidesPerView: 3,
              grid: { rows: 2, fill: 'row' },
            },
            1024: {
              slidesPerView: 4,
              grid: { rows: 2, fill: 'row' },
            },
          }}
        >
          {especialidades.map((esp, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <CardEspecialidad icono={esp.icono} titulo={esp.titulo} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controles de navegación y link */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <a
            href="#"
            className="text-sm font-medium text-[#1B669A] hover:underline whitespace-nowrap"
          >
            + Ver todas las especialidades
          </a>

          <div className="mx-2 h-[2px] flex-1 rounded bg-gray-300" />

          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7EAEE] transition hover:bg-[#d3d6db]"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-[#4B5563]" />
            </button>
            <button
              ref={nextRef}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7EAEE] transition hover:bg-[#d3d6db]"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-[#4B5563]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspecialidadesCarrusel;
