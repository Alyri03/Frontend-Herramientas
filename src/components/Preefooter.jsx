import centralImg from "@/assets/images/central_footer.png";
import ubicanosImg from "@/assets/images/ubicanos_footer.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Preefooter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
      {/* Central telefónica */}
      <div
        className="flex justify-between items-center flex-1 bg-yellow-50 p-4 rounded-xl shadow-sm"
        data-aos="fade-right"
      >
        <div className="flex flex-col">
          <span className="text-sm text-gray-700">Central telefónica</span>
          <span className="text-lg font-bold">(056) 611993</span>
        </div>
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
          <img
            src={centralImg}
            alt="Central Telefónica"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Ubícanos */}
      <div
        className="flex justify-between items-center flex-1 bg-blue-100 p-4 rounded-xl shadow-sm"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col">
          <span className="text-sm text-gray-700">Ubícanos</span>
          <span className="text-lg font-bold leading-snug">
            Av. Huacachina S/N a 2 min <br />
            del Hospital Regional de Ica
          </span>
        </div>
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
          <img
            src={ubicanosImg}
            alt="Ubícanos"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Suscripción */}
      <div
        className="flex flex-col justify-between flex-1 bg-gray-50 p-4 rounded-xl shadow-sm"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <span className="text-sm text-gray-700 mb-2">
          Suscríbete y entérate de nuestras <br /> novedades
        </span>
        <div className="flex items-center border rounded-full overflow-hidden mt-auto">
          <input
            type="email"
            placeholder="Escribe tu correo electrónico"
            className="px-4 py-2 w-full text-sm focus:outline-none bg-transparent"
          />
          <button className="bg-transparent px-4 text-[#1B669A]">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preefooter;
