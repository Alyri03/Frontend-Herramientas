import {
    Card,
} from "@/components/ui/card"
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react"
import { useState } from "react"
import { AgregarCita } from "./components/AgregarCita";
import { FiltrosCitas } from "./components/FiltrosCitas";
import { TablaCita } from "./components/TablaCitas";

const citas = [
    {
        fecha: "25-01-2024", doctorId: "D001", pacienteId: "P001"
        , hora: "09:00 AM", paciente: "John Smith	", doctor: "Dr. Sarah Wilson", tipo: "Consulta General", duracion: "30 min", estado: "Confirmado"
    },
    {
        fecha: "01-06-2025", doctorId: "D002", pacienteId: "P002",
        hora: "10:30 AM", paciente: "Emma Johnson", doctor: "Dr. Michael Brown", tipo: "Seguimiento", duracion: "60 min", estado: "En progreso"
    }
]

const tiposCitas = [
    "Consulta General",
    "Seguimiento",
    "Chequeo",
    "Consulta de Especialidad",
    "Cirugía",
    "Emergencia",
]

const estados = [
    {
        estado: "Confirmado"
    },
    {
        estado: "En progreso"
    },
    {
        estado: "En espera"
    },
    {
        estado: "Pendiente"
    },
    {
        estado: "Completada"

    }
]

const tiempos = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
]


export const Citas = () => {


    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [cita, setCita] = useState(null)
    const [sorting, setSorting] = useState("")
    const [filterOptions, setFilterOptions] = useState([{
        estado: 'Todos los estados',
        visible: true
    },
    {
        estado: 'Confirmado',
        visible: false
    },
    {
        estado: 'En progreso',
        visible: false
    },
    {
        estado: 'En espera',
        visible: false

    },
    {
        estado: 'Pendiente',
        visible: false
    },
    {
        estado: 'Completada',
        visible: false
    }])


    const filtrarCitas = citas.filter((cita) => {

        let coincideFecha;

        const estadoSeleccionado = filterOptions.find(op => op.visible)?.estado || 'Todos los estados'

        const coincideEstado = estadoSeleccionado === 'Todos los estados' ? true : cita.estado === estadoSeleccionado

        const nameSorting = cita.paciente.toLowerCase().includes(sorting.toLowerCase())
            || cita.doctor.toLowerCase().includes(sorting.toLowerCase())
            || cita.tipo.toLowerCase().includes(sorting.toLowerCase())


        if (from != null && to != null) {
            const citaStr = typeof cita.fecha === 'string' ? cita.fecha : format(cita.fecha, "dd-MM-yyyy")
            const fromStr = format(from, "dd-MM-yyyy")
            const toStr = format(to, "dd-MM-yyyy")
            coincideFecha = citaStr === fromStr || citaStr === toStr
            return coincideEstado && nameSorting && coincideFecha
        } else {
            return coincideEstado && nameSorting
        }

    });


    return (
        <main className="flex flex-col gap-6">

            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Citas</h2>
                <AgregarCita tiempos={tiempos} tiposCitas={tiposCitas} loading={loading} setLoading={setLoading} />
            </div>


            <div className="flex flex-row gap-6">

                <Card className="w-full p-5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-1">
                            <p className="text-lg">Total de hoy</p>
                            <h1 className="font-bold text-2xl">24</h1>
                            <span className="text-xs">citas programadas</span>
                        </div>
                        <Calendar />
                    </div>
                </Card>

                <Card className="w-full p-5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-1">
                            <p className="text-lg">En progreso</p>
                            <h1 className="font-bold text-2xl">3</h1>
                            <span className="text-xs">en curso actualmente</span>
                        </div>
                        <Clock color="green" />
                    </div>
                </Card>


                <Card className="w-full p-5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-1">
                            <p className="text-lg">En espera</p>
                            <h1 className="font-bold text-2xl">5</h1>
                            <span className="text-xs">pacientes esperando</span>
                        </div>
                        <Clock color="red" />
                    </div>
                </Card>

            </div>

            <div className="w-full">

            <FiltrosCitas  setSorting={setSorting} filterOptions={filterOptions} setFilterOptions={setFilterOptions} from={from} setFrom={setFrom} to={to} setTo={setTo}/>
                

            </div>


            <div className="bg-white outline rounded-sm p-5">
                
                <TablaCita 
                filtrarCitas={filtrarCitas} 
                from={from}
                to={to}
                cita={cita}
                setCita={setCita}
                loading={loading}
                setLoading={setLoading}
                tiempos={tiempos}
                tiposCitas={tiposCitas}
                estados={estados}/>

            </div>





        </main>
    )
}