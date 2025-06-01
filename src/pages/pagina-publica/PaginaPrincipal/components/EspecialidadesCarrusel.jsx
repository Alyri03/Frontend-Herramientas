import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faHeartPulse,
  faBrain,
  faUserDoctor,
  faChild,
  faUserNurse,
  faLungs,
  faStethoscope,
  faHospitalUser,
  faBone,
  faVenusMars,
  faEye,
  faNotesMedical,
  faHeadSideVirus,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';

import { obtenerEspecialidades } from '@/services/especialidadesService';
import CardEspecialidad from '@/components/CardEspecialidad';

const iconMap = {
  "Medicina General": faStethoscope,
  "Traumatología": faBone,
  "Pediatría": faChild,
  "Urología": faHospitalUser,
  "Ginecología y Obstetricia": faVenusMars,
  "Cirugía General": faUserDoctor,
  "Neurología": faBrain,
  "Neurocirugía": faBrain,
  "Medicina Física": faUserNurse,
  "Medicina Interna": faNotesMedical,
  "Cardiología": faHeartPulse,
  "Flebología": faLungs,
  "Gastroenterología": faStethoscope,
  "Otorrinolaringología": faEye,
  "Nutrición": faAppleAlt,
  "Psicología": faHeadSideVirus,
};

const EspecialidadesCarrusel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const [especialidades, setEspecialidades] = useState([]);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    obtenerEspecialidades()
      .then((data) => {
        const conIconos = data.map((esp) => ({
          ...esp,
          icono: iconMap[esp.nombre] || faStethoscope,
        }));
        setEspecialidades(conIconos);
      })
      .catch((err) => {
        console.error('Error al cargar especialidades', err);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center bg-[#f7f8fa] px-4 py-10">
      <div className="w-full max-w-7xl">
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

        <Swiper
          modules={[Navigation, Grid]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
              swiper.update();
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setProgress(swiper.progress);
            }, 0);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setProgress(swiper.progress);
          }}
          spaceBetween={20}
          grid={{ rows: 2, fill: 'row' }}
          breakpoints={{
            0: { slidesPerView: 2 },
            350: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {especialidades.map((esp) => (
            <SwiperSlide
              key={esp.id}
              className="flex justify-center cursor-pointer"
              onClick={() => navigate(`/detalle-especialidad/${esp.id}`)}
            >
              <CardEspecialidad titulo={esp.nombre} icono={esp.icono} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-3">
          <a
            href="/especialidades"
            className="text-sm font-medium text-[#1B669A] hover:underline whitespace-nowrap"
          >
            + Ver todas las especialidades
          </a>

          <div className="relative mx-2 h-[2px] w-full md:flex-1 rounded bg-gray-300 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#1B669A] transition-all duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              disabled={isBeginning}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition ${isBeginning
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#E7EAEE] hover:bg-[#d3d6db]'}`
              }
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-[#4B5563]" />
            </button>
            <button
              ref={nextRef}
              disabled={isEnd}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition ${isEnd
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#E7EAEE] hover:bg-[#d3d6db]'}`
              }
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
