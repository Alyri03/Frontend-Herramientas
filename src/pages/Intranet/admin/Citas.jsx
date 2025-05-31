
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
import { Calendar, ChevronDown, CircleCheckBig, Clock, Funnel, Save, SquarePen } from "lucide-react"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Calendario } from "../medico/components/Calendario"
import { Link } from "react-router-dom";

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
        hora: "09:00 AM", paciente: "John Smith	", doctor: "Dr. Sarah Wilson", tipo: "Consulta General", duracion: "30 min", estado: "Confirmado"
    },
    {
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
        estado: "Confirmada"
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
    const [formData, setFormData] = useState({
        paciente: "",
        doctor: "",
        fecha: "",
        tiempo: "",
        tipo: "",
        duracion: "",
        estado: "",
        notas: "",
        razon: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(formData)
    }

    useEffect(() => {
        if (cita) {
            setFormData({
                paciente: cita.paciente,
                doctor: cita.doctor,
                fecha: cita.fecha,
                tiempo: cita.hora?.replace(" AM", "").replace(" PM", "") || "",
                tipo: cita.tipo,
                duracion: cita.duracion?.replace(" min", "") || "",
                estado: cita.estado,
                notas: "",
                razon: ""
            })
        }
    }, [cita])

    return (
        <main className="flex flex-col gap-6">

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
                        {citas.map((pacientess, i) => (
                            <TableRow key={i}>
                                <TableCell >
                                    {pacientess.hora}

                                </TableCell>

                                <TableCell>

                                    {pacientess.paciente}

                                </TableCell>

                                <TableCell>
                                    {pacientess.doctor}
                                </TableCell>


                                <TableCell>
                                    {pacientess.tipo}
                                </TableCell>
                                <TableCell>
                                    {pacientess.duracion}
                                </TableCell>

                                <TableCell>
                                    <Badge className={`px-2 py-1 text-xs  ${pacientess.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                        : pacientess.estado === "Confirmada" ? "bg-blue-100 text-blue-600"
                                            : pacientess.estado === "Cancelada" ? "bg-red-100 text-red-600"
                                                : "bg-green-100 text-green-600"}`}>{pacientess.estado}</Badge>

                                </TableCell>

                                <TableCell className={'flex flex-row justify-center gap-3 p-4'}>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button onClick={() => setCita(pacientess)} variant="secondary" size="sm">
                                                <SquarePen />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-xl">

                                            <DialogHeader>
                                                <DialogTitle>Editar cita</DialogTitle>
                                                <DialogDescription>
                                                    Información completa de la cita médica.
                                                </DialogDescription>
                                            </DialogHeader>

                                            <form onSubmit={handleSubmit}>
                                                <div className="flex flex-col gap-6 w-full">

                                                    <div className="flex flex-row gap-3 w-full">
                                                        <div className="flex flex-col gap-3 w-full">
                                                            <Label htmlFor="paciente">Paciente *</Label>
                                                            <Input name="paciente"
                                                                onChange={(e) => setFormData({ ...formData, paciente: e.target.value })}
                                                                value={formData.paciente} required />
                                                        </div>

                                                        <div className="flex flex-col gap-3 w-full">
                                                            <Label htmlFor="doctor">Doctor *</Label>
                                                            <Input name="doctor"
                                                                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                                                                value={formData.doctor}
                                                                required />
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-row gap-3 w-full">
                                                        <div className="flex flex-col gap-3 w-full">
                                                            <Label htmlFor="fecha">Fecha *</Label>
                                                            <Input
                                                                type="date"
                                                                value={formData.fecha}
                                                                onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                                                                required />
                                                        </div>

                                                        <div className="flex flex-col gap-3 w-full">
                                                            <Label htmlFor="tiempo">Hora *</Label>
                                                            <Select
                                                                value={formData.tiempo}
                                                                onChange={(e) => setFormData({ ...formData, tiempo: e.target.value })}
                                                                required>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Seleccionar hora" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {
                                                                        tiempos.map((tiempo, index) => (
                                                                            <SelectItem key={index} value={tiempo}>{tiempo}</SelectItem>
                                                                        ))
                                                                    }
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-row gap-3">

                                                        <div className="flex flex-col gap-3 w-full">
                                                            <Label htmlFor="tipo">Tipo de cita *</Label>
                                                            <Select
                                                                value={formData.tipo}
                                                                onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                                                                required>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Seleccionar tipo" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {
                                                                        tiposCitas.map((tipo, index) => (
                                                                            <SelectItem key={index} value={tipo}>{tipo}</SelectItem>
                                                                        ))
                                                                    }
                                                                </SelectContent>
                                                            </Select>
                                                        </div>

                                                        <div className="flex flex-col gap-3 w-full">
                                                            <Label htmlFor="duracion">Duracion (minutos) *</Label>
                                                            <Select
                                                                value={formData.duracion}
                                                                onChange={(e) => setFormData({ ...formData, duracion: e.target.value })}
                                                                required>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Seleccionar tipo" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="15">15 minutos</SelectItem>
                                                                    <SelectItem value="30">30 minutos</SelectItem>
                                                                    <SelectItem value="45">45 minutos</SelectItem>
                                                                    <SelectItem value="60">1 hora</SelectItem>
                                                                    <SelectItem value="90">1.5 horas</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>



                                                    <div className="flex flex-col gap-3 w-full">
                                                        <Label htmlFor="estado">Estado de la cita</Label>
                                                        <Select
                                                            value={formData.estado}
                                                            onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                                                            required>
                                                            <SelectTrigger className="w-full">
                                                                <SelectValue placeholder={`${formData.estado}`} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectGroup>
                                                                    {
                                                                        estados.map((estado, index) => (
                                                                            <SelectItem key={index}>{estado.estado}</SelectItem>
                                                                        ))
                                                                    }
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>

                                                    <div className="flex flex-col gap-3">

                                                        <Label htmlFor="razon">Motivo de la consulta</Label>

                                                        <Textarea
                                                            className="resize-none"
                                                            placeholder="Motivo de la consulta...."
                                                            onChange={(e) => setFormData({ ...formData, razon: e.target.value })}
                                                            value={formData.razon}
                                                            required />

                                                    </div>

                                                    <div className="flex flex-col gap-3">

                                                        <Label htmlFor="notas">Notas adicionales</Label>

                                                        <Textarea
                                                            value={formData.notas}
                                                            className="resize-none"
                                                            onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                                                            placeholder="Notas de la cita médica...."
                                                            required />

                                                    </div>

                                                </div>
                                            </form>



                                            <DialogFooter>
                                                <div className="flex gap-2 pt-3">
                                                    <DialogClose asChild>
                                                        <Button disabled={loading} size="sm" className={`bg-gray-500 shadow hover:bg-gray-600`}>Cerrar</Button>
                                                    </DialogClose>

                                                    <Button asChild size="sm" disabled={loading}>
                                                        <Link>
                                                            <Save />
                                                            {loading ? "Guardando...." : "Guardar cambios"}
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
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