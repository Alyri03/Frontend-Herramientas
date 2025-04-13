import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carrusel = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const imagen =
    'https://images.pexels.com/photos/4260643/pexels-photo-4260643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const slides = [
    {
      titulo: 'Conéctate desde cualquier lugar.',
      descripcion: 'Agenda tus citas y comunícate estés donde estés.',
    },
    {
      titulo: 'Siempre cerca de ti.',
      descripcion: 'Nos adaptamos a tu ritmo con atención virtual rápida.',
    },
    {
      titulo: 'Comodidad y salud en un clic.',
      descripcion: 'Solicita tus citas sin salir de casa.',
    },
  ];

  return (
    <div className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Botones personalizados */}
        <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between px-8 z-20 -translate-y-1/2">

          <button
            onClick={handlePrev}
            className="text-[#1B669A] text-3xl transition hover:scale-110"
          >
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </button>
          <button
            onClick={handleNext}
            className="text-[#1B669A] text-3xl transition hover:scale-110"
          >
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </button>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between py-10 md:py-16 gap-6 md:gap-10">
                
                {/* Texto */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                    {slide.titulo}
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">{slide.descripcion}</p>
                  <button
                    className="px-6 py-3 rounded-full font-bold text-white w-full sm:w-auto"
                    style={{ backgroundColor: '#1B669A' }}
                  >
                    HAZ CLIC PARA AGENDAR
                  </button>
                </div>

                {/* Imagen */}
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
                  <img
                    src={imagen}
                    alt="Imagen del carrusel"
                    className="w-full h-[220px] sm:h-[300px] md:h-[350px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carrusel;
