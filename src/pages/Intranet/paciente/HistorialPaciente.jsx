import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
    CalendarIcon,
    Eye,
    BarChart2,
    Stethoscope,
    Pill,
    ActivitySquare,
} from "lucide-react";

const estadisticas = [
    { etiqueta: "Consultas", cantidad: 2, color: "bg-blue-100 text-blue-600", icono: <Stethoscope className="w-5 h-5" /> },
    { etiqueta: "Exámenes", cantidad: 1, color: "bg-green-100 text-green-600", icono: <BarChart2 className="w-5 h-5" /> },
    { etiqueta: "Tratamientos", cantidad: 2, color: "bg-yellow-100 text-yellow-600", icono: <Pill className="w-5 h-5" /> },
    { etiqueta: "Procedimientos", cantidad: 1, color: "bg-purple-100 text-purple-600", icono: <ActivitySquare className="w-5 h-5" /> },
];

const pestañas = ["Todos", "Consultas", "Exámenes", "Tratamientos", "Procedimientos"];

const datos = [
    {
        fecha: "15 de Abril, 2023",
        tipo: "Exámenes",
        especialidad: "Medicina General",
        doctor: "Dr. Carlos Mendoza",
        diagnostico: "Infección respiratoria aguda",
        color: "bg-green-100 text-green-600",
    },
    {
        fecha: "15 de Abril, 2023",
        tipo: "Tratamientos",
        especialidad: "Medicina General",
        doctor: "Dr. Carlos Mendoza",
        diagnostico: "Infección respiratoria aguda",
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        fecha: "15 de Abril, 2023",
        tipo: "Procedimientos",
        especialidad: "Medicina General",
        doctor: "Dr. Carlos Mendoza",
        diagnostico: "Infección respiratoria aguda",
        color: "bg-purple-100 text-purple-600",
    },
    {
        fecha: "15 de Abril, 2023",
        tipo: "Consulta",
        especialidad: "Medicina General",
        doctor: "Dr. Carlos Mendoza",
        diagnostico: "Infección respiratoria aguda",
        color: "bg-blue-100 text-blue-600",
    },
    {
        fecha: "15 de Abril, 2023",
        tipo: "Consulta",
        especialidad: "Medicina General",
        doctor: "Dr. Carlos Mendoza",
        diagnostico: "Infección respiratoria aguda",
        color: "bg-blue-100 text-blue-600",
    },
    {
        fecha: "15 de Abril, 2023",
        tipo: "Consulta",
        especialidad: "Medicina General",
        doctor: "Dr. Carlos Mendoza",
        diagnostico: "Infección respiratoria aguda",
        color: "bg-blue-100 text-blue-600",
    },
    {
        fecha: "15 de Abril, 2023",
        tipo: "Consulta",
        especialidad: "Medicina General",
        doctor: "Dr. Carlos Mendoza",
        diagnostico: "Infección respiratoria aguda",
        color: "bg-blue-100 text-blue-600",
    },
    {
        fecha: "15 de Abril, 2023",
        tipo: "Consulta",
        especialidad: "Medicina General",
        doctor: "Dr. Carlos Mendoza",
        diagnostico: "Infección respiratoria aguda",
        color: "bg-blue-100 text-blue-600",
    },

];

const HistorialPaciente = () => {
    const [seleccionado, setSeleccionado] = useState(null);
    const [paginaActual, setPaginaActual] = useState(1);
    const elementosPorPagina = 6;

    const datosPaginados = datos.slice((paginaActual - 1) * elementosPorPagina, paginaActual * elementosPorPagina);
    const totalPaginas = Math.ceil(datos.length / elementosPorPagina);

    return (
        <>
            {/* Cabecera */}
            <section className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight">Historial Clínico</h1>
                <p className="text-sm text-muted-foreground">Consulta tu historial médico completo</p>
            </section>

            {/* Descripción */}
            <section className="bg-white border rounded-lg p-5 text-sm space-y-2 my-5">
                <h2 className="font-semibold text-base">Consulta tu historial de atenciones médicas</h2>
                <p>
                    Consulta el historial de tus atenciones médicas, organizadas por tipo de cita y especialidad.
                    Aquí encontrarás los diagnósticos, tratamientos y procedimientos registrados por los médicos que te atendieron.
                </p>
                <p className="text-muted-foreground">
                    Cada entrada en esta lista está vinculada a una cita previa que fue atendida por un profesional de salud.
                    Solo se muestra información clínica registrada oficialmente en el sistema después de la consulta.
                </p>
            </section>

            <section className="space-y-6">
                {/* Tarjetas resumen */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {estadisticas.map((item, i) => (
                        <div key={i} className="p-3 bg-white rounded-lg border border-gray-200 flex items-center space-x-4">
                            <div className={`p-2 rounded-md ${item.color}`}>{item.icono}</div>
                            <div className="flex flex-col justify-center">
                                <span className="text-sm text-gray-500">{item.etiqueta}</span>
                                <span className="text-lg font-bold text-gray-800">{item.cantidad}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">
                                    <CalendarIcon className="mr-2 h-4 w-4" /> Fecha
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={new Date()} onSelect={() => { }} initialFocus />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                {/* Pestañas y tabla */}
                <Tabs defaultValue="todos" className="space-y-4">
                    <div className="w-full overflow-x-auto">
                        <TabsList className="flex w-max gap-2 sm:gap-4 px-1 py-2">
                            {pestañas.map((t) => (
                                <TabsTrigger key={t} value={t.toLowerCase()} className="whitespace-nowrap text-sm sm:text-base">
                                    {t}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* Tabla */}
                    <div className="rounded-xl border overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted">
                                    <TableHead className="text-left">Fecha</TableHead>
                                    <TableHead className="text-left">Tipo</TableHead>
                                    <TableHead className="text-left">Especialidad</TableHead>
                                    <TableHead className="text-left">Doctor</TableHead>
                                    <TableHead className="text-left">Diagnóstico/Procedimiento</TableHead>
                                    <TableHead className="text-center">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {datosPaginados.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="text-left">{item.fecha}</TableCell>
                                        <TableCell className="text-left">
                                            <Badge className={`px-2 py-1 text-xs ${item.color}`}>{item.tipo}</Badge>
                                        </TableCell>
                                        <TableCell className="text-left">{item.especialidad}</TableCell>
                                        <TableCell className="text-left">{item.doctor}</TableCell>
                                        <TableCell className="text-left">{item.diagnostico}</TableCell>
                                        <TableCell className="text-center">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="ghost" size="icon" onClick={() => setSeleccionado(item)}>
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-md">
                                                    <h3 className="text-lg font-semibold mb-2">Detalle del registro</h3>
                                                    {seleccionado && (
                                                        <ul className="text-sm space-y-1">
                                                            <li><strong>Fecha:</strong> {seleccionado.fecha}</li>
                                                            <li><strong>Tipo:</strong> {seleccionado.tipo}</li>
                                                            <li><strong>Especialidad:</strong> {seleccionado.especialidad}</li>
                                                            <li><strong>Doctor:</strong> {seleccionado.doctor}</li>
                                                            <li><strong>Diagnóstico:</strong> {seleccionado.diagnostico}</li>
                                                        </ul>
                                                    )}
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {/* Paginación */}
                        <div className="flex justify-end items-center gap-4 p-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setPaginaActual((p) => Math.max(p - 1, 1))}
                                disabled={paginaActual === 1}
                            >
                                Anterior
                            </Button>
                            <span className="text-sm text-muted-foreground">
                                Página {paginaActual} de {totalPaginas}
                            </span>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setPaginaActual((p) => Math.min(p + 1, totalPaginas))}
                                disabled={paginaActual === totalPaginas}
                            >
                                Siguiente
                            </Button>
                        </div>
                    </div>
                </Tabs>
            </section>
        </>
    );
};

export default HistorialPaciente;
