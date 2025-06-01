
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Calendar, ChevronDown, CircleCheckBig, Clock, Funnel, Plus, Save, SquarePen } from "lucide-react"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Calendario } from "../medico/components/Calendario"
import { Link } from "react-router-dom";
import { AgregarCita } from "./components/AgregarCita";
import { EditarCita } from "./components/EditarCita";

const filtros = [
    {
        title: "Solo hoy"
    },
    {
        title: "Esta semana"
    },
    {
        title: "Solo urgentes"
    }
]

const citas = [
    {
        fecha: "2024-01-25", doctorId: "D001", pacienteId: "P001"
        ,hora: "09:00 AM", paciente: "John Smith	", doctor: "Dr. Sarah Wilson", tipo: "Consulta General", duracion: "30 min", estado: "Confirmado"
    },
    {
        fecha: "2024-01-25", doctorId: "D002",pacienteId: "P002",
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


                <div className="rounded-sm outline flex items-center p-4 gap-10 bg-white">
                    <Input type="text" placeholder="Buscar por citas por paciente, doctor o tipo" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <Funnel />
                                Filtros
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col gap-5 p-5 w-xs">
                            <h1>Filtros avanzados</h1>

                            <div className="w-full border-3">
                                <p>Estado</p>

                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant="outline" className="w-full">
                                            Todos los estados
                                            <ChevronDown />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {
                                            estados.map((estado) => (
                                                <DropdownMenuItem>{estado.estado}</DropdownMenuItem>
                                            ))
                                        }
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p>Rango de fechas</p>

                                <div className="flex flex-row gap-5">
                                    <Calendario date={from} setDate={setFrom} title={"Desde"} />
                                    <Calendario date={to} setDate={setTo} title={"Hasta"} />
                                </div>

                            </div>

                            <div className="flex flex-col gap-2">
                                <p>Filtros rápidos</p>
                                <div className="flex flex-col gap-1">
                                    {
                                        filtros.map((item, index) => (
                                            <div key={index} className="flex gap-3 items-center">
                                                <Checkbox />
                                                <label>{item.title}</label>
                                            </div>

                                        ))
                                    }
                                </div>

                            </div>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>


            <div className="bg-white outline rounded-sm p-5">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell colSpan={5}>
                                <CardTitle className={` text-xl font-semibold`}>
                                    <div className="flex flex-col gap-2 px-4">
                                        Horario de hoy - 25 de enero de 2024
                                    </div>
                                </CardTitle>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className={"text-gray-500 text-center"}>Hora</TableHead>
                            <TableHead className={"text-gray-500 text-center"}>Paciente</TableHead>
                            <TableHead className={"text-gray-500 text-center"}>Doctor</TableHead>
                            <TableHead className={"text-gray-500 text-center"}>Tipo</TableHead>
                            <TableHead className={"text-gray-500 text-center"}>Duración</TableHead>
                            <TableHead className={"text-gray-500 text-center"}>Estado</TableHead>
                            <TableHead className={"text-gray-500 text-center"}>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className={'items-center text-center'}>
                        {citas.map((appointment, i) => (
                            <TableRow key={i}>
                                <TableCell >
                                    {appointment.hora}

                                </TableCell>

                                <TableCell>

                                    {appointment.paciente}

                                </TableCell>

                                <TableCell>
                                    {appointment.doctor}
                                </TableCell>


                                <TableCell>
                                    {appointment.tipo}
                                </TableCell>
                                <TableCell>
                                    {appointment.duracion}
                                </TableCell>

                                <TableCell>
                                    <Badge className={`px-2 py-1 text-xs  ${appointment.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                        : appointment.estado === "Confirmada" ? "bg-blue-100 text-blue-600"
                                            : appointment.estado === "Cancelada" ? "bg-red-100 text-red-600"
                                                : "bg-green-100 text-green-600"}`}>{appointment.estado}</Badge>

                                </TableCell>

                                <TableCell className={'flex flex-row justify-center gap-3 p-4'}>

                                    <EditarCita cita={cita} setCita={setCita} loading={loading} setLoading={setLoading} appointment={appointment} tiempos={tiempos} tiposCitas={tiposCitas} estados={estados}/>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                        <TableRow className={'items-center'}>

                            <TableCell colSpan={5}>
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem
                                            onClick={() => goTo(currentPage - 1)}
                                            disabled={currentPage === 1}>
                                            <PaginationPrevious href="#" />
                                        </PaginationItem>
                                        {
                                            Array.from({ length: total_pages }).map((_, i) => (
                                                <PaginationItem>
                                                    <PaginationLink href="#"
                                                        isActive={currentPage === i + 1}
                                                        onClick={() => goTo(i + 1)}
                                                    >
                                                        {i + 1}</PaginationLink>
                                                </PaginationItem>
                                            ))
                                        }
                                        <PaginationItem>
                                            <PaginationNext href="#"
                                                onClick={() => goTo(currentPage + 1)} />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </TableCell>
                        </TableRow>
                    </TableFooter> */}
                </Table>
            </div>





        </main>
    )
}