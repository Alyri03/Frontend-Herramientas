import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CardEspecialidad = ({ icono, titulo }) => {
  return (
    <div className="relative flex h-[210px] w-full max-w-[300px] flex-col items-start justify-start rounded-[20px] bg-white px-4 py-3 mb-4 transition duration-300 ease-in-out transform group hover:shadow-[0_12px_28px_rgba(11,63,211,0.15)] group-hover:-translate-y-1">


      {/* Ícono circular */}
      <div className="mb-4 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#1B669A]">
        <FontAwesomeIcon icon={icono} className="text-2xl sm:text-3xl md:text-4xl text-white" />
      </div>


      {/* Título */}
      <p className="my-5 text-center text-sm sm:text-base md:text-lg font-semibold leading-snug text-[#222] break-words hyphens-auto overflow-hidden text-ellipsis line-clamp-2">
        {titulo}
      </p>


      {/* Flechita en hover */}
      <div className="absolute top-[110px] right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7EAEE]">
          <FontAwesomeIcon icon={faChevronRight} className="text-sm text-[#4B5563]" />
        </div>
      </div>
    </div>
  );
};

export default CardEspecialidad;
