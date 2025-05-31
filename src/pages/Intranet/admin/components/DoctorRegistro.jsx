import { BriefcaseMedical, HeartPulse, Syringe, UserPlus, UserRoundCheck } from "lucide-react";

const DoctorRegistro = () => { 
    return(<>
        <section className="flex flex-col gap-4 pb-4">
            {/* Nombre y botón */}
            <div className="flex justify-between items-center">
                <p className="text-3xl font-semibold">Doctores</p>
                <button className=" bg-zinc-950 text-white px-4 py-2 rounded-md shadow-xs hover:bg-zinc-800 transition-colors flex items-center gap-2">
                    <UserPlus />
                    <p className="text-sm">Añadir Doctor</p>
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-3">
                {/* Total doctores */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-blue-600 bg-blue-100 flex items-center justify-center">
                        <BriefcaseMedical />
                    </div>
                    <div className="flex flex-col text-lg gap-0.5">
                        <p>Total Doctores</p>
                        <p className="font-semibold text-xl">5</p>
                        <p className="text-sm text-gray-500">en plantilla</p>
                    </div>
                </div>

                {/* Disponibles */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-green-600 bg-green-100 flex items-center justify-center">
                        <UserRoundCheck />
                    </div>
                    <div className="flex flex-col text-lg gap-0.5">
                        <p>Disponibles</p>
                        <p className="font-semibold">2</p>
                        <p className="text-sm text-gray-500">para consultas</p>
                    </div>
                </div>

                {/* Consulta */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-amber-600 bg-amber-100 flex items-center justify-center">
                        <HeartPulse />
                    </div>
                    <div className="flex flex-col text-lg gap-0.5">
                        <p>En consulta</p>
                        <p className="font-semibold">2</p>
                        <p className="text-sm text-gray-500">atendiendo pacientes</p>
                    </div>
                </div>

                {/* Especialidades */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-red-600 bg-red-100 flex items-center justify-center">
                        <Syringe />
                    </div>
                    <div className="flex flex-col text-lg gap-0.5">
                        <p>Especialidades</p>
                        <p className="font-semibold">5</p>
                        <p className="text-sm text-gray-500">áreas médicas</p>
                    </div>
                </div>
            </div>
        </section>    
    </>)
}

export default DoctorRegistro;