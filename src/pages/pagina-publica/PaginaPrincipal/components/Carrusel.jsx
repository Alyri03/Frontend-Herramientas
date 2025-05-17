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
      imagen:'https://images.pexels.com/photos/4260643/pexels-photo-4260643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo: 'Siempre cerca de ti.',
      descripcion: 'Nos adaptamos a tu ritmo con atención virtual rápida.',
      imagen: 'https://442271.fs1.hubspotusercontent-na1.net/hubfs/442271/ES-LG-CONTENT/Photography%20library/GettyImages-1422149739.jpg'
    },
    {
      titulo: 'Comodidad y salud en un clic.',
      descripcion: 'Solicita tus citas sin salir de casa.',
      imagen: 'https://news.microsoft.com/wp-content/uploads/prod/sites/41/2023/03/Exam_Room_Physician_Patient_8326_RT-2048x1366-1.jpg'
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden" aria-label="Carrusel de atención médica virtual">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Botones de navegación */}
        <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 justify-between z-20 pointer-events-none">
          <button
            onClick={handlePrev}
            aria-label="Anterior"
            className="text-[#1B669A] text-4xl hover:scale-110 transition pointer-events-auto -ml-10"
          >
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Siguiente"
            className="text-[#1B669A] text-4xl hover:scale-110 transition pointer-events-auto -mr-10"
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
              <article className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 py-12">
                
                {/* Texto */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-5 px-2">
                  <header>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                      {slide.titulo}
                    </h2>
                  </header>
                  <p className="text-gray-600 text-base sm:text-lg md:text-xl">
                    {slide.descripcion}
                  </p>
                  <button
                    className="bg-[#1B669A] hover:bg-[#155c89] text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base transition w-full sm:w-auto"
                    aria-label="Agendar cita"
                  >
                    HAZ CLIC PARA AGENDAR
                  </button>
                </div>

                {/* Imagen con overlay */}
                <figure className="w-full md:w-1/2 relative">
                  <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
                  <img
                    src={slide.imagen}
                    alt={`Imagen representativa de: ${slide.titulo}`}
                    className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover rounded-lg shadow"
                  />
                </figure>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carrusel;
