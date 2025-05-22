import { Calendar, NotepadText, Users } from "lucide-react";

const SaludoRegistro = () => {
    return (<>
        <section className="flex flex-col gap-4 pb-4">
            {/* Saludo */}
            <div className="flex flex-col gap-1">
                <p className="text-green-600 text-sm">Bienvenido de vuelta</p>
                <p className="text-3xl font-semibold">Dr. Roberto Sánchez</p>
                <p className="text-gray-500 text-md">Panel de control para gestionar tus pacientes, citas y expedientes médicos.</p>
            </div>

            {/* Registro */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                {/* Pacientes */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-blue-600 bg-blue-100 flex items-center justify-center">
                        <Users />
                    </div>
                    <div className="flex flex-col text-lg">
                        <p>Total Pacientes</p>
                        <p className="font-semibold">128</p>
                    </div>
                </div>

                {/* Citas */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-green-600 bg-green-100 flex items-center justify-center">
                        <Calendar />
                    </div>
                    <div className="flex flex-col text-lg">
                        <p>Citas hoy</p>
                        <p className="font-semibold">8</p>
                    </div>
                </div>

                {/* Informes */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-amber-600 bg-amber-100 flex items-center justify-center">
                        <NotepadText />
                    </div>
                    <div className="flex flex-col text-lg">
                        <p>Informes pendientes</p>
                        <p className="font-semibold">3</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default SaludoRegistro;