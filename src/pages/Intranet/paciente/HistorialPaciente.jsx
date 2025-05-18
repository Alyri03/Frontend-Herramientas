import { useState } from "react";
import { ActivitySquare, BarChart2, CalendarIcon, Eye, Pill, Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { usePaginacion } from "@/hooks/usePaginacion";
import ModalDetalle from "../components/ModalDetalle";
import { formatearFechaISO, normalizarTipo } from "@/lib/utils";

const estadisticas = [
    { etiqueta: "Consultas", cantidad: 2, color: "bg-blue-100 text-blue-700", icono: <Stethoscope className="w-5 h-5" /> },
    { etiqueta: "Exámenes", cantidad: 1, color: "bg-green-100 text-green-700", icono: <BarChart2 className="w-5 h-5" /> },
    { etiqueta: "Tratamientos", cantidad: 2, color: "bg-yellow-100 text-yellow-700", icono: <Pill className="w-5 h-5" /> },
    { etiqueta: "Procedimientos", cantidad: 1, color: "bg-purple-100 text-purple-700", icono: <ActivitySquare className="w-5 h-5" /> }
];

const tipos = ["Todos", "Consulta", "Exámenes", "Tratamientos", "Procedimientos"];

const datos = [
    { fecha: "2025-04-15", tipo: "Exámenes", especialidad: "Medicina General", doctor: "Dr. Carlos Mendoza", diagnostico: "Infección respiratoria aguda", tratamiento: "Paracetamol 500mg cada 8h por 5 días", comentario: "Paciente respondió bien al tratamiento." },
    { fecha: "2025-04-16", tipo: "Consulta", especialidad: "Medicina General", doctor: "Dr. Carlos Mendoza", diagnostico: "Dolor abdominal leve", tratamiento: "Omeprazol 20mg en ayunas por 10 días", comentario: "Recomendado evitar alimentos grasos." },
    { fecha: "2025-04-20", tipo: "Consulta", especialidad: "Medicina General", doctor: "Dr. Carlos Mendoza", diagnostico: "Dolor abdominal leve", tratamiento: "Omeprazol 20mg en ayunas por 10 días", comentario: "Recomendado evitar alimentos grasos." },
    { fecha: "2025-04-20", tipo: "Tratamientos", especialidad: "Odontología", doctor: "Dra. Ana Gutiérrez", diagnostico: "Gingivitis", tratamiento: "Limpieza dental y enjuague bucal con clorhexidina", comentario: "Reevaluación en 7 días." },
    { fecha: "2025-04-22", tipo: "Procedimientos", especialidad: "Dermatología", doctor: "Dr. Juan Pérez", diagnostico: "Quiste epidérmico", tratamiento: "Extirpación quirúrgica menor", comentario: "Buena evolución post-operatoria." }
];

const HistorialPaciente = () => {
    const [tipoSeleccionado, setTipoSeleccionado] = useState("Todos");
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [seleccionado, setSeleccionado] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    console.log("📆 Fecha seleccionada (Date):", fechaSeleccionada);
    console.log("📆 Fecha ISO:", fechaSeleccionada?.toLocaleDateString("en-CA"));
    console.log("📋 Fechas en datos:");
    datos.forEach((d) => console.log("- ", d.fecha));

    const filtrado = datos.filter((item) => {
        const coincideTipo =
            tipoSeleccionado === "Todos" ||
            normalizarTipo(item.tipo) === normalizarTipo(tipoSeleccionado);

        const coincideFecha =
            !fechaSeleccionada ||
            item.fecha === fechaSeleccionada.toLocaleDateString("en-CA");

        return coincideTipo && coincideFecha;
    });

    const { paginaActual, totalPaginas, datosPaginados, cambiarPagina } = usePaginacion(filtrado, 6);

    return (
        <main className="space-y-8">
            <h1 className="text-2xl font-bold tracking-tight">Historial Clínico</h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {estadisticas.map((item, i) => (
                    <article key={i} className="p-3 bg-white rounded-lg border flex items-center space-x-4">
                        <div className={`p-2 rounded-md ${item.color}`}>{item.icono}</div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500">{item.etiqueta}</span>
                            <span className="text-lg font-bold text-gray-800">{item.cantidad}</span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="flex justify-between flex-wrap gap-4 items-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            Fecha
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={fechaSeleccionada}
                            onSelect={setFechaSeleccionada}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>

                <Select value={tipoSeleccionado} onValueChange={setTipoSeleccionado}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Filtrar por tipo" />
                    </SelectTrigger>
                    <SelectContent>
                        {tipos.map((tipo) => (
                            <SelectItem key={tipo} value={tipo}>
                                <Badge variant={normalizarTipo(tipo)} className="capitalize w-full justify-center">
                                    {tipo}
                                </Badge>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </section>

            <article className="rounded-xl border overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted">
                            <TableHead>Doctor</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Especialidad</TableHead>
                            <TableHead>Fecha</TableHead>
                            <TableHead>Diagnóstico</TableHead>
                            <TableHead className="text-center">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {datosPaginados.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.doctor}</TableCell>
                                <TableCell>
                                    <Badge variant={normalizarTipo(item.tipo)} className="min-w-[110px] justify-center text-center h-6">
                                        {item.tipo}
                                    </Badge>
                                </TableCell>
                                <TableCell>{item.especialidad}</TableCell>
                                <TableCell>{formatearFechaISO(item.fecha)}</TableCell>
                                <TableCell>{item.diagnostico}</TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="icon" onClick={() => { setSeleccionado(item); setIsOpen(true); }}>
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <footer className="flex justify-end items-center gap-4 p-4">
                    <Button variant="outline" size="sm" onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
                        Anterior
                    </Button>
                    <span className="text-sm text-muted-foreground">
                        Página {paginaActual} de {totalPaginas}
                    </span>
                    <Button variant="outline" size="sm" onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
                        Siguiente
                    </Button>
                </footer>
            </article>

            <ModalDetalle tipo="historial" data={seleccionado} open={isOpen} onOpenChange={setIsOpen} />
        </main>
    );
};

export default HistorialPaciente;
