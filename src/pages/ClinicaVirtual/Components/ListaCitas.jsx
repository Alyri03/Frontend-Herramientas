import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import ItemCita from "./ItemCita";

export default function ListaCitas() {
    return (
        <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">Próximas citas</h2>
                <button className="text-blue-600 font-medium hover:text-blue-700 hover:underline">Ver todas</button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <ItemCita
                    doctor="Dra. María Rodríguez"
                    specialty="Cardiología"
                    date="Lunes, 24 de Abril"
                    time="10:30 AM"
                    status="confirmed"
                />

                <ItemCita
                    doctor="Dr. Carlos Mendoza"
                    specialty="Medicina General"
                    date="Miércoles, 26 de Abril"
                    time="3:15 PM"
                    status="pending"
                />

                <div className="hidden p-8 text-center">
                    <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-slate-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-1">No tienes citas programadas</h3>
                    <p className="text-slate-500 text-sm mb-4">Agenda tu primera cita con nuestros especialistas</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 font-medium">
                        Agendar cita
                    </button>
                </div>
            </div>
        </div>
    );
}
