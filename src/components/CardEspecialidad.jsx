import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CardEspecialidad = ({ icono, titulo }) => {
  return (
    <div className="relative flex h-[210px] w-full max-w-[300px] flex-col items-start justify-start rounded-[20px] bg-white px-4 py-3 mb-3 transition-all group hover:shadow-[0_4px_12px_rgba(11,63,211,0.15)]">
      
      {/* Ícono circular */}
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#1B669A]">
        <FontAwesomeIcon icon={icono} className="text-4xl text-white" />
      </div>

      {/* Título */}
      <p className="my-5 text-[17px] font-semibold leading-snug text-[#222]">
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
