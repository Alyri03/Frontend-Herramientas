import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVials } from "@fortawesome/free-solid-svg-icons"
import ubicanosPng from '../../../assets/images/ubicanos_footer.png';

export default function TarjetaResultados() {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 group">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="space-y-3 text-center sm:text-left mb-4 sm:mb-0">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 mb-1 group-hover:bg-blue-100 transition-colors duration-200">
                        <FontAwesomeIcon icon={faVials} className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900">Conoce tus resultados</h2>
                    <p className="text-slate-500 text-sm">Accede a tus resultados de laboratorio de forma segura</p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 font-medium mt-4 group-hover:bg-blue-700">
                        Ver resultados
                    </button>
                </div>

                <div className="relative h-28 w-28 md:h-32 md:w-32 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-70"></div>
                    <img
                        src={ubicanosPng}
                        alt="Doctora"
                        className="relative z-10 w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
