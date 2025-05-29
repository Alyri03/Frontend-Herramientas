import { useState } from "react";
import { Eye, CalendarIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { usePaginacion } from "@/hooks/usePaginacion";
import { filtrarPorCamposExactos, formatearEstado, formatearFechaISO } from "@/lib/utils";
import ModalDetalle from "../components/ModalDetalle";

const citas = [
  { doctor: "Dra. María Rodríguez", especialidad: "Cardiología", fecha: "2025-04-24", hora: "10:30 AM", estado: "PENDIENTE" },
  { doctor: "Dr. Carlos Mendoza", especialidad: "Medicina General", fecha: "2025-04-26", hora: "3:15 PM", estado: "CONFIRMADA" },
  { doctor: "Dra. Ana Gutiérrez", especialidad: "Dermatología", fecha: "2025-05-05", hora: "9:00 AM", estado: "CANCELADA" },
  { doctor: "Dr. Juan Pérez", especialidad: "Odontología", fecha: "2025-04-18", hora: "11:45 AM", estado: "REPROGRAMADA" },
  { doctor: "Dra. Karla Fuentes", especialidad: "Pediatría", fecha: "2025-03-01", hora: "4:30 PM", estado: "ATENDIDA" },
  { doctor: "Dr. Alberto Silva", especialidad: "Neurología", fecha: "2025-05-08", hora: "12:15 PM", estado: "NO_ASISTIO" },
  { doctor: "Dr. Andrés Salazar", especialidad: "Ginecología", fecha: "2025-05-14", hora: "9:00 AM", estado: "EN_CURSO" },
];

const estados = ["PENDIENTE", "CONFIRMADA", "CANCELADA", "REPROGRAMADA", "ATENDIDA", "NO_ASISTIO", "EN_CURSO"];

const CitasPaciente = () => {
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  console.log("📆 Fecha seleccionada (Date):", fechaSeleccionada);
  console.log("📆 Fecha seleccionada (formato ISO yyyy-mm-dd):", fechaSeleccionada?.toLocaleDateString("en-CA"));

  console.log("📋 Lista de fechas de citas:");
  citas.forEach((cita) => {
    console.log(`- ${cita.fecha}`);
  });


  const citasFiltradas = filtrarPorCamposExactos(citas, {
    estado: estadoSeleccionado,
    fecha: fechaSeleccionada
      ? fechaSeleccionada.toLocaleDateString("en-CA")
      : null,
  });

  const {
    paginaActual,
    totalPaginas,
    datosPaginados: citasPaginadas,
    cambiarPagina
  } = usePaginacion(citasFiltradas, 5);

  const handleOpenModal = (cita) => {
    setCitaSeleccionada(cita);
    setIsOpen(true);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Todas mis citas</h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-wrap">
        <Button className="w-fit"><span className="mr-2">+</span> Solicitar cita</Button>

        <div className="flex flex-wrap items-center gap-3">
          <Select onValueChange={(valor) => setEstadoSeleccionado(valor === "TODOS" ? null : valor)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TODOS">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Todos</Badge>
                </div>
              </SelectItem>
              {estados.map((estado) => (
                <SelectItem key={estado} value={estado}>
                  <div className="flex items-center gap-2">
                    <Badge variant={estado.toLowerCase()}>{formatearEstado(estado)}</Badge>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-fit">
                <CalendarIcon className="mr-2 h-4 w-4" /> Fecha
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
        </div>
      </div>

      <article className="rounded-xl border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead>Doctor</TableHead>
              <TableHead>Especialidad</TableHead>
              <TableHead>Fecha y hora</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-center">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {citasPaginadas.map((cita, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell><p className="font-medium">{cita.doctor}</p></TableCell>
                <TableCell className="text-sm text-muted-foreground">{cita.especialidad}</TableCell>
                <TableCell>
                  <div className="text-sm">{formatearFechaISO(cita.fecha)}</div>
                  <div className="text-xs text-muted-foreground">{cita.hora}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={cita.estado.toLowerCase()} className="min-w-[110px] justify-center text-center h-6">
                    {formatearEstado(cita.estado)}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button variant="ghost" size="icon" onClick={() => handleOpenModal(cita)}>
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

      <ModalDetalle tipo="cita" data={citaSeleccionada} open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

export default CitasPaciente;
