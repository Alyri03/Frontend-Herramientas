import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadset } from "@fortawesome/free-solid-svg-icons"
import central from '../../../assets/images/central_footer.png';

export default function TarjetaSoporte() {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 group">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="space-y-3 text-center sm:text-left mb-4 sm:mb-0">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-50 text-amber-600 mb-1 group-hover:bg-amber-100 transition-colors duration-200">
                        <FontAwesomeIcon icon={faHeadset} className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900">Canales de atención</h2>
                    <p className="text-slate-500 text-sm">Contacta con nuestro equipo de soporte 24/7</p>

                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 font-medium mt-4">
                        Contactar
                    </button>
                </div>

                <div className="relative h-28 w-28 md:h-32 md:w-32 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full opacity-70"></div>
                    <img
                        src={central}
                        alt="Doctora"
                        className="relative z-10 w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
