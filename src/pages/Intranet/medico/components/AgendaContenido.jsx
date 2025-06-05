import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from '@/components/ui/menubar'
import { AgendaTabla } from "./AgendaTabla";
import { Calendario } from "./Calendario";
import { Filtros } from "./Filtros";

export const AgendaContenido = ({ paciente, filterOptions, setFilterOptions, date, setDate }) => {
    const filtrarPacientes = paciente.filter((paciente) => {
        return (
            paciente.estado.includes(
                filterOptions.find(opcion => opcion.visible === true).estado === 'Todos los estados'
                    ? ''
                    : filterOptions.find(opcion => opcion.visible === true).estado)
        );
    });
    return (
        <>
            <div>
                <Link className="inline-flex items-center text-blue-600 mb-2" to="/intranet/medico">
                    <ArrowLeft /> Volver al dashboard
                </Link>
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-3xl">
                    Mi agenda
                </h1>
                <span className="leading-7 [&:not(:first-child)]:mt-6">Gestiona tus citas y horarios de consultas</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 py-4 justify-between">

                <div className="flex flex-row gap-5">
                    <Calendario date={date} setDate={setDate} title={"Selecciona una fecha"}/>

                    <Filtros filterOptions={filterOptions} setFilterOptions={setFilterOptions} />

                </div>

                
            </div>
            <AgendaTabla filtrarPacientes={filtrarPacientes} date={date} />
        </>
    )
}