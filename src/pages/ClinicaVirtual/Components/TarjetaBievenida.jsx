import doctoraImg from '../../../assets/images/doctora.png';

const TarjetaBienvenida = () => {
    return (
        <>
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-slate-100 overflow-hidden relative">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="space-y-3 text-center md:text-left mb-6 md:mb-0 relative z-10">
                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-1">
                            Bienvenido de vuelta
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Hola, Luis Enrique</h1>
                        <p className="text-slate-500 text-sm md:text-base max-w-md">
                            Bienvenido a tu clínica virtual. Agenda tu cita médica de manera rápida y sencilla.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 font-medium">
                                Por Especialidad
                            </button>
                            <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 font-medium">
                                Por médico
                            </button>
                        </div>
                    </div>

                    <div className="relative h-40 w-40 md:h-52 md:w-52 lg:h-64 lg:w-64 flex-shrink-0">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-70"></div>
                        <img
                            src={doctoraImg}
                            alt="Doctora"
                            className="relative z-10 w-full h-full object-contain"
                        />

                    </div>
                </div>

                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-0 hidden md:block"></div>
            </div>
        </>
    )
}
export default TarjetaBienvenida;