import { Calendar, Clock, DollarSign, Eye, FileText, Funnel, Gem, Mail, Phone, Save, Search, SquarePen, UserRoundPlus, X } from "lucide-react";
import { Tabs, TabsContent } from "@radix-ui/react-tabs"
import { CardTitle } from "../../../../components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../../../../components/ui/popover"
import { Button } from "../../../../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar"
import { useState } from "react";
import UseDoctorLista from "../../../../hooks/useDoctorsLista";

const InputListaComponent = () => {

    const [buscarDoctor, setBuscarDoctor] = useState("");
    const [estados, setEstados] = useState("allCategoria");
    const [especialidadD, setEspecialidadD] = useState("allEspecialidad");
    const [generoD, setGeneroD] = useState("allGenero");
    const { data: doctores, isLoading, isError, error } = UseDoctorLista();
    if (isLoading) return <p>Cargando médicos...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    // const doctores = [
    //     { nombreDoc: "Juan", apellidoDoc: "Perez", genero: "Masculino", num: "D001", especialidad: "Cardiología", horario: "Lun-Vie, 9:00-17:00", estado: "Disponible", pacientes: "145", ubicacion: "Consultorio 1", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "8", calificacion: "4.8", consultas: "1247", proxDispo: "Hoy 3:00 PM", monto: "150" },
    //     { nombreDoc: "Maria", apellidoDoc: "Lopez", genero: "Femenino", num: "D002", especialidad: "Pediatría", horario: "Lun-Jue, 8:00-16:00", estado: "En consulta", pacientes: "145", ubicacion: "Consultorio 2", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "7", calificacion: "4.8", consultas: "1154", proxDispo: "Hoy 7:00 PM", monto: "75" },
    //     { nombreDoc: "Carlos", apellidoDoc: "Sanchez", genero: "Masculino", num: "D003", especialidad: "Dermatología", horario: "Lun-Jue, 8:00-17:00", estado: "Disponible", pacientes: "145", ubicacion: "Consultorio 3", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "3", calificacion: "4.8", consultas: "320", proxDispo: "Mañana 9:00 AM", monto: "80" },
    //     { nombreDoc: "Ana", apellidoDoc: "Torres", genero: "Femenino", num: "D004", especialidad: "Neurología", horario: "Lun-Jue, 8:00-16:00", estado: "Ausente", pacientes: "145", ubicacion: "Consultorio 4", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "5", calificacion: "4.8", consultas: "583", proxDispo: "Mañana 1:00 PM", monto: "125" },
    //     { nombreDoc: "Luis", apellidoDoc: "Garcia", genero: "Masculino", num: "D005", especialidad: "Oftalmología", horario: "Lun-Jue, 8:00-16:00", estado: "En consulta", pacientes: "145", ubicacion: "Consultorio 5", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "6", calificacion: "4.8", consultas: "823", proxDispo: "Hoy 4:00 PM", monto: "90" },
    // ];

    const filtrarDoctor = doctores?.filter((doctors) => {
        const doctorInput = (
            doctors.nombreDoc.toLowerCase().includes(buscarDoctor.toLowerCase())
            || doctors.apellidoDoc.toLowerCase().includes(buscarDoctor.toLowerCase())
        );

        const estadosFiltro = estados === "allCategoria" || doctors.estado === estados;
        const especialidadFiltro = especialidadD === "allEspecialidad" || doctors.especialidad === especialidadD;
        const generoFiltro = generoD === "allGenero" || doctors.genero === generoD;

        return doctorInput && estadosFiltro && especialidadFiltro && generoFiltro;
    })

    return (<>
        <section className="pt-3 flex flex-col gap-6">

            {/* Input y Filtro */}
            <div className="flex justify-between items-center gap-4 bg-white p-4 rounded-md shadow-sm" >
                <div className="flex items-center justify-center py-2 w-full border rounded-md gap-2">
                    <div className="flex justify-center items-center pl-3 h-7 w-7">
                        <Search className="text-gray-400" />
                    </div>
                    <input value={buscarDoctor} onChange={(doc) => setBuscarDoctor(doc.target.value)} type="text" placeholder="Buscar por nombre del medico..." className="w-full focus:outline-none bg-transparent text-sm" />
                </div>
                <Popover>
                    <PopoverTrigger asChild className="flex bg-white hover:bg-gray-100 gap-2 border h-11 w-max">
                        <Button variant="outline">
                            <Funnel />
                            <p>Filtros</p>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 items-start" side="bottom" align="end">
                        <div className="flex flex-col gap-4" >
                            <p className="text-md font-semibold">Filtros Avanzados</p>
                            {/* Estado */}
                            {/* <div className="flex flex-col gap-1">
                                <p className="sm">Estado</p>
                                <Select defaultValue="allCategoria" onValueChange={(btnEST) => setEstados(btnEST)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Todas las categorias" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="allCategoria">Todas los estados</SelectItem>
                                            <SelectItem value="Disponible">Disponible</SelectItem>
                                            <SelectItem value="En consulta">En consulta</SelectItem>
                                            <SelectItem value="Ausente">Ausente</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div> */}
                            {/* Especialidad */}
                            <div className="flex flex-col gap-1">
                                <p className="sm">Especialidad</p>
                                <Select defaultValue="allEspecialidad" onValueChange={(btnESP) => setEspecialidadD(btnESP)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Todas las categorias" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-[40vh] overflow-y-auto">
                                        <SelectGroup >
                                            <SelectItem value="allEspecialidad">Todas las especialidades</SelectItem>
                                            <SelectItem value="Cardiología">Cardiología</SelectItem>
                                            <SelectItem value="Pediatría">Pediatría</SelectItem>
                                            <SelectItem value="Dermatología">Dermatología</SelectItem>
                                            <SelectItem value="Neurología">Neurología</SelectItem>
                                            <SelectItem value="Oftalmología">Oftalmología</SelectItem>
                                            <SelectItem value="Ginecología y Obstetricia">Ginecología y Obstetricia</SelectItem>
                                            <SelectItem value="Nutrición">Nutrición</SelectItem>
                                            <SelectItem value="Flebología">Flebología</SelectItem>
                                            <SelectItem value="Urología">Urología</SelectItem>
                                            <SelectItem value="Otorrinolaringología">Otorrinolaringología</SelectItem>
                                            <SelectItem value="Cirugía General">Cirugía General</SelectItem>
                                            <SelectItem value="Psicología">Psicología</SelectItem>
                                            <SelectItem value="Traumatología">Traumatología</SelectItem>
                                            <SelectItem value="Medicina General">Medicina General</SelectItem>
                                            <SelectItem value="Pediatría">Pediatría</SelectItem>
                                            <SelectItem value="Neurocirugía">Neurocirugía</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            {/* Género */}
                            <div className="flex flex-col gap-1">
                                <p className="sm">Género</p>
                                <Select defaultValue="allGenero" onValueChange={(btnGEN) => setGeneroD(btnGEN)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Todas las categorias" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="allGenero">Todas los géneros</SelectItem>
                                            <SelectItem value="Masculino">Masculino</SelectItem>
                                            <SelectItem value="Femenino">Femenino</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            {/* Lista de doctores */}
            <div className="w-full h-full">
                <Tabs defaultValue="doctores" className=" bg-white shadow-sm border-1 rounded-lg p-6">
                    <CardTitle className="flex flex-col lg:flex-row justify-between gap-4 pb-4">
                        { }
                        <div className="flex flex-col gap-1">
                            <p className="text-xl sm:text-2xl font-semibold">Lista de Doctores</p>
                            <p className="text-gray-500 text-sm sm:text-base">Información general de doctores</p>
                        </div>
                    </CardTitle>
                    <TabsContent value="doctores" className="flex flex-col gap-4">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className={"text-gray-500"}>
                                        Doctor
                                    </TableHead>
                                    <TableHead className={"text-gray-500"}>
                                        Especialidad
                                    </TableHead>
                                    <TableHead className={"text-gray-500"}>
                                        Contacto
                                    </TableHead>
                                    <TableHead className={"text-gray-500"}>
                                        Pacientes
                                    </TableHead>
                                    <TableHead className={"text-gray-500"}>
                                        Horario
                                    </TableHead>
                                    {/* <TableHead className={"text-gray-500"}>
                                        Estado
                                    </TableHead> */}
                                    <TableHead className={'text-gray-500 text-center'}>
                                        Acciones
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filtrarDoctor.map((doctoress, i) => (
                                    <TableRow key={i} className={"h-min"}>
                                        <TableCell className={"flex gap-2"}>
                                            <Avatar className={"flex justify-center self-center-safe"}>
                                                <AvatarImage src="https://img.freepik.com/vector-premium/icono-medico-vector-avatar-perfil-persona-medico-masculino-estetoscopio-consulta_435942-978.jpg" alt="@shadcn" />
                                                <AvatarFallback>DC</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <div>{doctoress.nombreDoc} {doctoress.apellidoDoc}</div>
                                                <div>{doctoress.num}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {doctoress.especialidad}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-1">
                                                    <Phone className="h-4 w-4" />
                                                    <p>{doctoress.telefono}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Mail className="h-4 w-4" />
                                                    <p>{doctoress.correo}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {doctoress.pacientes}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <p>{doctoress.horario}</p>
                                            </div>
                                        </TableCell>
                                        {/* <TableCell>
                                            <div className={`w-min px-2 py-1 rounded-xl flex items-center whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-blue-100 text-blue-600"
                                                : doctoress.estado === "En consulta" ? "bg-yellow-100 text-yellow-600 " : "bg-red-100 text-red-600"}`}>
                                                {doctoress.estado}
                                            </div>
                                        </TableCell> */}
                                        <TableCell className={'flex gap-3 items-center justify-center'}>
                                            {/* Perfil del Doctor */}
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button variant="outline" className={'flex text-sm transition hover:bg-gray-100 h-max'}>
                                                        <Eye className="h-[90%] w-[90%]" />
                                                    </button>
                                                </DialogTrigger>
                                                {/* Modal Doctor */}
                                                <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
                                                    <DialogHeader>
                                                        <DialogTitle className={"text-xl font-semibold"}>Perfil del Doctor</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="flex border-1 gap-4 rounded-md p-4">
                                                        <div className="bg-gray-200 rounded-full w-16 h-16 md:flex items-center justify-center hidden sm:block">
                                                            <Avatar className={"h-full w-full"}>
                                                                <AvatarImage src="https://img.freepik.com/vector-premium/icono-medico-vector-avatar-perfil-persona-medico-masculino-estetoscopio-consulta_435942-978.jpg" alt="@shadcn" />
                                                                <AvatarFallback>DC</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div className="flex flex-col w-full justify-center items-center">
                                                            <div className="flex flex-col w-full justify-center">
                                                                <div className="flex items-center justify-between w-full">
                                                                    <div className="flex w-full">
                                                                        <p className="font-semibold text-lg">{doctoress.nombreDoc} {doctoress.apellidoDoc}</p>
                                                                    </div>
                                                                    {/* <div className={`w-min sm:text-sm text-xs px-2 py-1 rounded-xl flex items-center whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-blue-100 text-blue-600"
                                                                        : doctoress.estado === "En consulta" ? "bg-yellow-100 text-yellow-600 " : "bg-red-100 text-red-600"}`}>
                                                                        {doctoress.estado}
                                                                    </div> */}
                                                                </div>
                                                                <p className="text-md">{doctoress.especialidad}</p>
                                                                <p className="text-sm text-gray-500">ID: {doctoress.num}</p>
                                                            </div>
                                                            <div className="flex flex-wrap justify-between items-center sm:gap-15 gap-2 pt-4 w-full">
                                                                <div className="flex flex-col items-center">
                                                                    <p className="text-lg text-blue-600 font-semibold">{doctoress.pacientes}</p>
                                                                    <p className="text-sm">Pacientes</p>
                                                                </div>
                                                                <div className="flex flex-col items-center">
                                                                    <p className="text-lg text-green-600 font-semibold">{doctoress.exp} años</p>
                                                                    <p className="text-sm">Experiencia</p>
                                                                </div>
                                                                <div className="flex flex-col items-center">
                                                                    <p className="text-lg text-violet-600 font-semibold">{doctoress.calificacion}</p>
                                                                    <p className="text-sm">Calififación</p>
                                                                </div>
                                                                <div className="flex flex-col items-center">
                                                                    <p className="text-lg text-orange-600 font-semibold">{doctoress.consultas}</p>
                                                                    <p className="text-sm">Consultas</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid sm:grid-cols-2 gap-5">
                                                        {/* Contacto */}
                                                        <div className="flex flex-col border-1 p-4 rounded-md">
                                                            <div className="flex items-center gap-2 pb-2">
                                                                <Phone className="w-5 h-5 " />
                                                                <p className="text-xl font-semibold">Información de Contacto</p>
                                                            </div>
                                                            <div className="flex flex-col pt-2 gap-4">
                                                                <div className="flex items-center gap-2">
                                                                    <Phone className="w-4 h-4 text-gray-500" />
                                                                    <p className="text-sm">{doctoress.telefono}</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Mail className="w-4 h-4 text-gray-500" />
                                                                    <p className="text-sm">{doctoress.correo}</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Calendar className="w-4 h-4 text-gray-500" />
                                                                    <p className="text-sm">{doctoress.horario}</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Clock className="w-4 h-4 text-gray-500" />
                                                                    <p className="text-sm">Próxima disponibilidad: {doctoress.proxDispo}</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <DollarSign className="w-4 h-4 text-gray-500" />
                                                                    <p className="text-sm">Tarifa de consulta: ${doctoress.monto}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Profesional */}
                                                        <div className="flex flex-col border-1 p-4 rounded-md">
                                                            <div className="flex items-center gap-2 pb-2">
                                                                <Gem className="w-5 h-5 " />
                                                                <p className="text-xl font-semibold">Información Profesional</p>
                                                            </div>
                                                            <div className="flex flex-col pt-2 gap-4">
                                                                <div className="flex flex-col">
                                                                    <p className="text-gray-500 text-sm">Número de Licencia</p>
                                                                    <p className="text-md">LIC-{doctoress.num}</p>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <p className="text-gray-500 text-sm">Especialidad</p>
                                                                    <p className="text-md">{doctoress.especialidad}</p>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <p className="text-gray-500 text-sm">Número de Licencia</p>
                                                                    <p className="text-md">{doctoress.exp}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Citas Recientes */}
                                                    <div className="flex flex-col border-1 gap-4 rounded-md p-4">
                                                        <div className="flex gap-2 w-full items-center">
                                                            <FileText className="w-5 h-5" />
                                                            <p className="text-xl font-semibold">Citas Recienes</p>
                                                        </div>
                                                        <div className="flex border-1 rounded-md p-4 w-full">
                                                            <div className="flex sm:flex-row flex-col justify-between items-center w-full sm:gap-0 gap-4">
                                                                <div className="flex gap-2 items-center">
                                                                    <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                                                                        <Avatar className={"h-full w-full"}>
                                                                            <AvatarImage src={UserRoundPlus} alt="@shadcn" />
                                                                            <AvatarFallback>PC</AvatarFallback>
                                                                        </Avatar>
                                                                    </div>
                                                                    <div className="flex flex-col w-auto">
                                                                        <p>Jhon Smith</p>
                                                                        <p className="text-gray-500">Consulta de seguimiento</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex sm:flex-col flex-row-reverse sm:items-end items-center sm:gap-0 gap-2">
                                                                    <p>2024-01-25 - 09:00 AM</p>
                                                                    {/* <div className={`w-min text-xs px-2 py-1 rounded-xl flex sm:self-end whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-black text-white"
                                                                        : doctoress.estado === "En consulta" ? "bg-gray-100 text-black" : "bg-red-600 text-white"}`}>
                                                                        {doctoress.estado}
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex border-1 rounded-md p-4 w-full">
                                                            <div className="flex sm:flex-row flex-col justify-between items-center w-full sm:gap-0 gap-4">
                                                                <div className="flex gap-2 items-center">
                                                                    <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                                                                        <Avatar className={"h-full w-full"}>
                                                                            <AvatarImage src={UserRoundPlus} alt="@shadcn" />
                                                                            <AvatarFallback>PC</AvatarFallback>
                                                                        </Avatar>
                                                                    </div>
                                                                    <div className="flex flex-col w-auto">
                                                                        <p>Jhon Smith</p>
                                                                        <p className="text-gray-500">Consulta de seguimiento</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex sm:flex-col flex-row-reverse sm:items-end items-center sm:gap-0 gap-2">
                                                                    <p>2024-01-25 - 09:00 AM</p>
                                                                    {/* <div className={`w-min text-xs px-2 py-1 rounded-xl flex sm:self-end whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-black text-white"
                                                                        : doctoress.estado === "En consulta" ? "bg-gray-100 text-black" : "bg-red-600 text-white"}`}>
                                                                        {doctoress.estado}
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex border-1 rounded-md p-4 w-full">
                                                            <div className="flex sm:flex-row flex-col justify-between items-center w-full sm:gap-0 gap-4">
                                                                <div className="flex gap-2 items-center">
                                                                    <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                                                                        <Avatar className={"h-full w-full"}>
                                                                            <AvatarImage src={UserRoundPlus} alt="@shadcn" />
                                                                            <AvatarFallback>PC</AvatarFallback>
                                                                        </Avatar>
                                                                    </div>
                                                                    <div className="flex flex-col w-auto">
                                                                        <p>Jhon Smith</p>
                                                                        <p className="text-gray-500">Consulta de seguimiento</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex sm:flex-col flex-row-reverse sm:items-end items-center sm:gap-0 gap-2">
                                                                    <p className="sm:text-md">2024-01-25 - 09:00 AM</p>
                                                                    {/* <div className={`w-min text-xs px-2 py-1 rounded-xl flex sm:self-end whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-black text-white"
                                                                        : doctoress.estado === "En consulta" ? "bg-gray-100 text-black" : "bg-red-600 text-white"}`}>
                                                                        {doctoress.estado}
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <div className="flex justify-end gap-2 pt-3">
                                                            <DialogClose asChild>
                                                                <button className={'flex items-self-center text-sm border-1 rounded-sm bg-white hover:bg-gray-200 px-3 py-2'}>Cerrar</button>
                                                            </DialogClose>
                                                            <button className={'flex items-center gap-1 text-sm border-1 rounded-sm px-3 py-2 bg-black hover:bg-gray-800 text-white'}>
                                                                <Calendar className="h-4 w-4" />
                                                                <p>Ver Horario</p>
                                                            </button>
                                                        </div>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                            <Dialog>
                                                {/* Editar */}
                                                <DialogTrigger asChild>
                                                    <button variant="secundary" className={'flex text-sm transition hover:bg-gray-100 h-max'}>
                                                        <SquarePen className="h-[90%] w-[90%]" />
                                                    </button>
                                                </DialogTrigger>
                                                {/* Modal editar */}
                                                <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
                                                    <DialogHeader>
                                                        <DialogTitle className={"text-xl font-semibold"}>Editar Doctor - {doctoress.nombreDoc} {doctoress.apellidoDoc}</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="flex flex-col mt-2">
                                                        {/* Info Personal */}
                                                        <div className="flex flex-col gap-3">
                                                            <p className="text-xl font-semibold">Información Personal</p>
                                                            <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-5">
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p className="text-md">Nombre *</p>
                                                                    <Input type="text" defaultValue={`${doctoress.nombreDoc}`} className="w-full" />
                                                                </div>
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p>Apellido *</p>
                                                                    <Input type="text" defaultValue={`${doctoress.apellidoDoc}`} className="w-full" />
                                                                </div>
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p>Genero *</p>
                                                                    <Select defaultValue={doctoress.genero}>
                                                                        <SelectTrigger className="w-full">
                                                                            <SelectValue placeholder="Selecciona género" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectGroup>
                                                                                <SelectItem value="Masculino">Masculino</SelectItem>
                                                                                <SelectItem value="Femenino">Femenino</SelectItem>
                                                                                <SelectItem value="otro">Otro</SelectItem>
                                                                            </SelectGroup>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="border-0.5 mt-5 mb-5" />
                                                        {/* Info Profesional */}
                                                        <div className="flex flex-col gap-3">
                                                            <p className="text-xl font-semibold">Información Profesional</p>
                                                            <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-5">
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p>Especialidad</p>
                                                                    <Select defaultValue={`${doctoress.especialidad}`}>
                                                                        <SelectTrigger className="w-full">
                                                                            <SelectValue placeholder="Selecciona especialidad" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectGroup>
                                                                                <SelectItem value="Cardiología">Cardiología</SelectItem>
                                                                                <SelectItem value="Pediatría">Pediatría</SelectItem>
                                                                                <SelectItem value="Dermatología">Dermatología</SelectItem>
                                                                                <SelectItem value="Neurología">Neurología</SelectItem>
                                                                                <SelectItem value="Oftalmología">Oftalmología</SelectItem>
                                                                                <SelectItem value="Ginecología y Obstetricia">Ginecología y Obstetricia</SelectItem>
                                                                                <SelectItem value="Nutrición">Nutrición</SelectItem>
                                                                                <SelectItem value="Flebología">Flebología</SelectItem>
                                                                                <SelectItem value="Urología">Urología</SelectItem>
                                                                                <SelectItem value="Otorrinolaringología">Otorrinolaringología</SelectItem>
                                                                                <SelectItem value="Cirugía General">Cirugía General</SelectItem>
                                                                                <SelectItem value="Psicología">Psicología</SelectItem>
                                                                                <SelectItem value="Traumatología">Traumatología</SelectItem>
                                                                                <SelectItem value="Medicina General">Medicina General</SelectItem>
                                                                                <SelectItem value="Pediatría">Pediatría</SelectItem>
                                                                                <SelectItem value="Neurocirugía">Neurocirugía</SelectItem>
                                                                            </SelectGroup>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p>Número de Licencia *</p>
                                                                    <Input type="text" defaultValue={`LIC-${doctoress.num}`} className="w-full" />
                                                                </div>
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p>Años de Experiencia *</p>
                                                                    <Input type="text" defaultValue={`${doctoress.exp}`} className="w-full" />
                                                                </div>
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p>Tarifa de Consulta ($) *</p>
                                                                    <Input type="text" defaultValue={`${doctoress.monto}`} className="w-full" />
                                                                </div>
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p>Genero *</p>
                                                                    <Select defaultValue={doctoress.estado}>
                                                                        <SelectTrigger className="w-full">
                                                                            <SelectValue placeholder="Selecciona un estado" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectGroup>
                                                                                <SelectItem value="Disponible">Disponible</SelectItem>
                                                                                <SelectItem value="En consulta">En consulta</SelectItem>
                                                                                <SelectItem value="Ausente">Ausente</SelectItem>
                                                                            </SelectGroup>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="border-0.5 mt-5 mb-5" />
                                                        {/* Info Contacto */}
                                                        <div className="flex flex-col gap-3">
                                                            <p className="text-xl font-semibold">Información de Contacto</p>
                                                            <div className="grid sm:grid-cols-2 sm:grid-rows-1 gap-5">
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p className="text-md">Teléfono *</p>
                                                                    <Input type="text" defaultValue={`${doctoress.telefono}`} className="w-full" />
                                                                </div>
                                                                <div className="flex flex-col w-full gap-1">
                                                                    <p className="text-md">Email *</p>
                                                                    <Input type="text" defaultValue={`${doctoress.correo}`} className="w-full" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <div className="flex justify-end gap-2 pt-3">
                                                            <DialogClose asChild>
                                                                <button className={'flex justify-center gap-1 items-center text-sm border-1 rounded-sm bg-white hover:bg-gray-200 px-3 py-2'}>
                                                                    <X className="h-4 w-4" />
                                                                    <p>Cancelar</p>
                                                                </button>
                                                            </DialogClose>
                                                            <button className={'flex justify-center gap-1 items-center text-sm border-1 rounded-sm px-3 py-2 bg-green-500 hover:bg-green-700 text-white'}>
                                                                <Save className="h-4 w-4" />
                                                                <p>Guardar</p>
                                                            </button>
                                                        </div>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </div>
        </section >
    </>)
}
export default InputListaComponent;