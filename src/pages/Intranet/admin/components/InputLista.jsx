import { Calendar, Clock, DollarSign, Eye, File, FileText, Funnel, Gem, Mail, Phone, Search } from "lucide-react";
import { Tabs, TabsContent } from "@radix-ui/react-tabs"
import { CardTitle } from "../../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBuildingUser } from '@fortawesome/free-solid-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const InputListaComponent = () => {

    const doctores = [
        { nombreDoc: "Juan Perez", num: "D001", especialidad: "Cardiologia", horario: "Lun-Vie, 9:00-17:00", estado: "Disponible", pacientes: "145", ubicacion: "Consultorio 1", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "8 años", calificacion: "4.8", consultas: "1247", proxDispo: "Hoy 3:00 PM", monto: "150" },
        { nombreDoc: "Maria Lopez", num: "D002", especialidad: "Pediatria", horario: "Lun-Jue, 8:00-16:00", estado: "En consulta", pacientes: "145", ubicacion: "Consultorio 2", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "7 años", calificacion: "4.8", consultas: "1154", proxDispo: "Hoy 7:00 PM", monto: "75" },
        { nombreDoc: "Carlos Sanchez", num: "D003", especialidad: "Dermatologia", horario: "Lun-Jue, 8:00-17:00", estado: "Disponible", pacientes: "145", ubicacion: "Consultorio 3", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "3 años", calificacion: "4.8", consultas: "320", proxDispo: "Mañana 9:00 AM", monto: "80" },
        { nombreDoc: "Ana Torres", num: "D004", especialidad: "Neurologia", horario: "Lun-Jue, 8:00-16:00", estado: "Ausente", pacientes: "145", ubicacion: "Consultorio 4", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "5 años", calificacion: "4.8", consultas: "583", proxDispo: "Mañana 1:00 PM", monto: "125" },
        { nombreDoc: "Luis Garcia", num: "D005", especialidad: "Oftalmologia", horario: "Lun-Jue, 8:00-16:00", estado: "En consulta", pacientes: "145", ubicacion: "Consultorio 5", telefono: "(555) 123-4567", correo: "dr.wilson@cliniccare.com", exp: "6 años", calificacion: "4.8", consultas: "823", proxDispo: "Hoy 4:00 PM", monto: "90" },
    ];

    return (<>
        <section className="pt-3">
            {/* Input y Filtro */}
            <div className="flex justify-between items-center gap-4 mb-4 bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-center justify-center py-2 w-full border rounded-md gap-2">
                    <div className="flex justify-center items-center pl-3 h-7 w-7">
                        <Search className="text-gray-400" />
                    </div>
                    <input type="text" placeholder="Buscar por nombre o especialidad..." className="w-full focus:outline-none bg-transparent text-sm" />
                </div>
                <button className="flex bg-white hover:bg-gray-100 gap-2 border px-4 py-2">
                    <Funnel />
                    <p>Filtros</p>
                </button>
            </div>
            {/* Lista de doctores */}
            <div>
                <Tabs defaultValue="doctores" className=" bg-white shadow-sm border-1 rounded-lg p-6">
                    <CardTitle className="flex flex-col lg:flex-row justify-between gap-4 pb-4">
                        { }
                        <div className="flex flex-col gap-1">
                            <p className="text-xl sm:text-2xl font-semibold">Lista de Doctores (5)</p>
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
                                    <TableHead className={"text-gray-500"}>
                                        Estado
                                    </TableHead>
                                    <TableHead className={'text-gray-500 text-center'}>
                                        Acciones
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {doctores.map((doctoress, i) => (
                                    <TableRow key={i}>
                                        <TableCell className={"flex items-center gap-2"}>
                                            <FontAwesomeIcon icon={faUserCircle} className="pr-2" />
                                            <div className="flex flex-col">
                                                <div>{doctoress.nombreDoc}</div>
                                                <div>{doctoress.num}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {doctoress.especialidad}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
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
                                        <TableCell>
                                            <div className={`w-min px-2 py-1 rounded-xl flex items-center whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-black text-white"
                                                : doctoress.estado === "En consulta" ? "bg-gray-100 text-black" : "bg-red-600 text-white"}`}>
                                                {doctoress.estado}
                                            </div>
                                        </TableCell>
                                        <TableCell className={'flex gap-1 items-center justify-center'}>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button variant="outline" className={'flex text-sm transition hover:bg-gray-100 px-2 py-2'}>
                                                        <Eye className="h-4 w-4 font-extrabold" />
                                                    </button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
                                                    <DialogHeader>
                                                        <DialogTitle>Perfil del Doctor</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="flex border-1 gap-4 rounded-md p-4">
                                                        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                                                            <FontAwesomeIcon icon={faUserCircle} className="w-16 h-16" />
                                                        </div>
                                                        <div className="flex flex-col w-full justify-center">
                                                            <div className="flex flex-col w-full justify-center">
                                                                <div className="flex items-center justify-between w-full">
                                                                    <div className="flex w-full">
                                                                        <p className="font-semibold text-lg">{doctoress.nombreDoc}</p>
                                                                    </div>
                                                                    <div className={`w-min text-sm px-2 py-1 rounded-xl flex items-center whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-black text-white"
                                                                        : doctoress.estado === "En consulta" ? "bg-gray-100 text-black" : "bg-red-600 text-white"}`}>
                                                                        {doctoress.estado}
                                                                    </div>
                                                                </div>
                                                                <p className="text-md">{doctoress.especialidad}</p>
                                                                <p className="text-sm text-gray-500">ID: {doctoress.num}</p>
                                                            </div>
                                                            <div className="flex justify-center gap-15 pt-4">
                                                                <div className="flex flex-col items-center">
                                                                    <p className="text-lg text-blue-600 font-semibold">{doctoress.pacientes}</p>
                                                                    <p className="text-sm">Pacientes</p>
                                                                </div>
                                                                <div className="flex flex-col items-center">
                                                                    <p className="text-lg text-green-600 font-semibold">{doctoress.exp}</p>
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
                                                    <div className="grid grid-cols-2 gap-5">
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
                                                            <div className="flex items-center gap-2 w-full">
                                                                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                                                                    <FontAwesomeIcon icon={faUserCircle} className="w-full h-full" />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <p>Jhon Smith</p>
                                                                    <p className="text-gray-500">Consulta de seguimiento</p>
                                                                </div>
                                                                <div className="flex flex-col items-end ml-auto">
                                                                    <p>2024-01-25 - 09:00 AM</p>
                                                                    <div className={`w-min text-xs px-2 py-1 rounded-xl flex items-center whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-black text-white"
                                                                        : doctoress.estado === "En consulta" ? "bg-gray-100 text-black" : "bg-red-600 text-white"}`}>
                                                                        {doctoress.estado}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex border-1 rounded-md p-4 w-full">
                                                            <div className="flex items-center gap-2 w-full">
                                                                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                                                                    <FontAwesomeIcon icon={faUserCircle} className="w-full h-full" />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <p>Jhon Smith</p>
                                                                    <p className="text-gray-500">Consulta de seguimiento</p>
                                                                </div>
                                                                <div className="flex flex-col items-end ml-auto">
                                                                    <p>2024-01-25 - 09:00 AM</p>
                                                                    <div className={`w-min text-xs px-2 py-1 rounded-xl flex items-center whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-black text-white"
                                                                        : doctoress.estado === "En consulta" ? "bg-gray-100 text-black" : "bg-red-600 text-white"}`}>
                                                                        {doctoress.estado}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex border-1 rounded-md p-4 w-full">
                                                            <div className="flex items-center gap-2 w-full">
                                                                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                                                                    <FontAwesomeIcon icon={faUserCircle} className="w-full h-full" />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <p>Jhon Smith</p>
                                                                    <p className="text-gray-500">Consulta de seguimiento</p>
                                                                </div>
                                                                <div className="flex flex-col items-end ml-auto">
                                                                    <p>2024-01-25 - 09:00 AM</p>
                                                                    <div className={`w-min text-xs px-2 py-1 rounded-xl flex items-center whitespace-nowrap ${doctoress.estado === "Disponible" ? "bg-black text-white"
                                                                        : doctoress.estado === "En consulta" ? "bg-gray-100 text-black" : "bg-red-600 text-white"}`}>
                                                                        {doctoress.estado}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <div className="flex gap-2 pt-3">
                                                            <DialogClose asChild>
                                                                <button className={'flex items-self-center text-sm border-1 rounded-sm px-3 py-2'}>Cerrar</button>
                                                            </DialogClose>
                                                            <button className={'flex items-self-center text-sm border-1 rounded-sm px-3 py-2 bg-green-500 text-white'}>Reprogramar</button>
                                                        </div>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button variant="secundary" className={'flex text-sm transition hover:bg-gray-100 px-2 py-2'}>
                                                        <FontAwesomeIcon icon={faPenToSquare} className="h-4 w-4" />
                                                    </button>
                                                </DialogTrigger>
                                                {/* Modal editar */}
                                                {/* <DialogContent className="sm:max-w-[425px]">
                                                    <DialogHeader>
                                                        <DialogTitle>Detalles de la Cita</DialogTitle>
                                                        <DialogDescription>
                                                            Información completa de la cita médica.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="flex gap-4 mt-2">
                                                        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                                                            <FontAwesomeIcon icon={faUserCircle} className="w-16 h-16" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <p className="font-semibold text-lg">{doctoress.nombre}</p>
                                                            <p className="text-gray-500">{doctoress.dia}</p>
                                                        </div>
                                                    </div>
                                                    <hr className="border-1" />
                                                    <div className="grid grid-cols-2 grid-rows-2 gap-5">
                                                        <div className="flex">
                                                            <div>
                                                                <FontAwesomeIcon icon={faClock} className="pr-2 text-sm" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="text-sm">Hora:</p>
                                                                <p className="text-sm">{doctoress.hora}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <div>
                                                                <FontAwesomeIcon icon={faBuildingUser} className="pr-2 text-sm" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="text-sm">Estado:</p>
                                                                <div className={`w-min px-2 py-1 rounded-xl flex items-center ${doctoress.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                                                    : doctoress.estado === "Confirmada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                                                    <p className="text-xs">{doctoress.estado}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <div>
                                                                <FontAwesomeIcon icon={faLocationPin} className="pr-2 text-sm" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="text-sm">Ubicación:</p>
                                                                <p className="text-sm">{doctoress.ubicacion}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <FontAwesomeIcon icon={faFileText} className="pr-2 text-sm" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm">Notas:</p>
                                                            <p className="text-sm">{doctoress.notas}</p>
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <div className="flex gap-2 pt-3">
                                                            <DialogClose asChild>
                                                                <button className={'flex items-self-center text-sm border-1 rounded-sm px-3 py-2'}>Cerrar</button>
                                                            </DialogClose>
                                                            <button className={'flex items-self-center text-sm border-1 rounded-sm px-3 py-2 bg-green-500 text-white'}>Reprogramar</button>
                                                        </div>
                                                    </DialogFooter>
                                                </DialogContent> */}
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    </>)
}
export default InputListaComponent;