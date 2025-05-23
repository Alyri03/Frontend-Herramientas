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
import { Link } from "react-router-dom";
import { TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const ProxCitas = () => {

    const paciente = [
        { nombre: "Juan Perez", hora: "10:00 AM", estado: "Pendiente", dia: "Lunes, 24 de Mayo", ubicacion: "Consultorio 1", notas: "Paciente con antecedentes de hipertensión" },
        { nombre: "Maria Lopez", hora: "11:00 AM", estado: "Confirmada", dia: "Lunes, 25 de Mayo", ubicacion: "Consultorio 2", notas: "Paciente con alergias a medicamentos" },
        { nombre: "Carlos Sanchez", hora: "12:00 PM", estado: "Cancelada", dia: "Lunes, 27 de Mayo", ubicacion: "Consultorio 3", notas: "Paciente sufre de dolores de cabeza frecuentemente" },
        { nombre: "Ana Torres", hora: "01:00 PM", estado: "Pendiente", dia: "Lunes, 28 de Mayo", ubicacion: "Consultorio 4", notas: "Paciente con antecedentes de diabetes" },
        { nombre: "Luis Garcia", hora: "02:00 PM", estado: "Confirmada", dia: "Lunes, 29 de Mayo", ubicacion: "Consultorio 5", notas: "Paciente con antecedentes de asma" },
    ];

    return (<>
        <section className="pt-4 pb-4">
            <Tabs defaultValue="citas" className=" bg-white shadow-sm border-1 rounded-lg p-6">
                <CardTitle className="flex justify-between gap-2 pb-3">
                    <div className="flex flex-col gap-2 w-1/2">
                        <p className="text-2xl">Próximas Citas</p>
                        <p className="text-gray-500 text-sm">Gestiona tus próximas citas médicas</p>
                    </div>
                <div className="flex items-center justify-end w-full">
                    <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 rounded-sm bg-transparent p-0">
                       <TabsTrigger value="citas" className="w-full text-center py-2 px-4 text-sm sm:text-base rounded-sm overflow-hidden whitespace-nowrap truncate transition-all duration-200 hover:bg-blue-100 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                       Hoy</TabsTrigger>
                       <TabsTrigger value="citasMañana" className="w-full text-center py-2 px-4 text-sm sm:text-base rounded-sm overflow-hidden whitespace-nowrap truncate transition-all duration-200 hover:bg-blue-100 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                       Mañana</TabsTrigger>
                       <TabsTrigger value="citasSemana" className="w-full text-center py-2 px-4 text-sm sm:text-base rounded-sm overflow-hidden whitespace-nowrap truncate transition-all duration-200 hover:bg-blue-100 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                       Esta semana
                       </TabsTrigger>
                    </TabsList>
                </div>
                </CardTitle>
                <TabsContent value="citas" className="flex flex-col gap-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className={"text-gray-500"}>
                                    Paciente
                                </TableHead>
                                <TableHead className={"text-gray-500"}>
                                    Hora
                                </TableHead>
                                <TableHead className={"text-gray-500"}>
                                    Estado
                                </TableHead>
                                <TableHead className={'text-gray-500 flex items-center justify-self-end pr-8'}>
                                    Acciones
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paciente.map((pacientess, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <FontAwesomeIcon icon={faUserCircle} className="pr-2" />
                                        {pacientess.nombre}
                                    </TableCell>
                                    <TableCell>
                                        <FontAwesomeIcon icon={faClock} className="pr-2" />
                                        {pacientess.hora}
                                    </TableCell>
                                    <TableCell>
                                        <div className={`w-min px-2 py-1 rounded-xl flex items-center ${pacientess.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                            : pacientess.estado === "Confirmada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                            {pacientess.estado}
                                        </div>
                                    </TableCell>
                                    <TableCell className={'flex justify-self-end pr-2'}>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button variant="outline" className={'flex items-self-center text-sm border-1 rounded-lg px-2 py-2'}>Ver detalles</button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
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
                                                        <p className="font-semibold text-lg">{pacientess.nombre}</p>
                                                        <p className="text-gray-500">{pacientess.dia}</p>
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
                                                            <p className="text-sm">{pacientess.hora}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <FontAwesomeIcon icon={faBuildingUser} className="pr-2 text-sm" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm">Estado:</p>
                                                            <div className={`w-min px-2 py-1 rounded-xl flex items-center ${pacientess.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                                                : pacientess.estado === "Confirmada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                                                <p className="text-xs">{pacientess.estado}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <FontAwesomeIcon icon={faLocationPin} className="pr-2 text-sm" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm">Ubicación:</p>
                                                            <p className="text-sm">{pacientess.ubicacion}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div>
                                                        <FontAwesomeIcon icon={faFileText} className="pr-2 text-sm" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm">Notas:</p>
                                                        <p className="text-sm">{pacientess.notas}</p>
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
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <hr className="border-1 mt-1 mb-1" />
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">Mostrando 5 de 20 citas para hoy</p>
                        <div className="flex gap-2">
                            <Link to="/intranet/medico/pacientes" className="flex items-self-center text-sm border-1 rounded-sm px-2 py-2">Ver todas las citas</Link>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="citasMañana" className="flex flex-col gap-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className={"text-gray-500"}>
                                    Paciente
                                </TableHead>
                                <TableHead className={"text-gray-500"}>
                                    Hora
                                </TableHead>
                                <TableHead className={"text-gray-500"}>
                                    Estado
                                </TableHead>
                                <TableHead className={'text-gray-500 flex items-center justify-self-end pr-8'}>
                                    Acciones
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paciente.map((pacientess, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <FontAwesomeIcon icon={faUserCircle} className="pr-2" />
                                        {pacientess.nombre}
                                    </TableCell>
                                    <TableCell>
                                        <FontAwesomeIcon icon={faClock} className="pr-2" />
                                        {pacientess.hora}
                                    </TableCell>
                                    <TableCell>
                                        <div className={`w-min px-2 py-1 rounded-xl flex items-center ${pacientess.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                            : pacientess.estado === "Confirmada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                            {pacientess.estado}
                                        </div>
                                    </TableCell>
                                    <TableCell className={'flex justify-self-end pr-2'}>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button variant="outline" className={'flex items-self-center text-sm border-1 rounded-lg px-2 py-2'}>Ver detalles</button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
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
                                                        <p className="font-semibold text-lg">{pacientess.nombre}</p>
                                                        <p className="text-gray-500">{pacientess.dia}</p>
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
                                                            <p className="text-sm">{pacientess.hora}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <FontAwesomeIcon icon={faBuildingUser} className="pr-2 text-sm" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm">Estado:</p>
                                                            <div className={`w-min px-2 py-1 rounded-xl flex items-center ${pacientess.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                                                : pacientess.estado === "Confirmada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                                                <p className="text-xs">{pacientess.estado}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <FontAwesomeIcon icon={faLocationPin} className="pr-2 text-sm" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm">Ubicación:</p>
                                                            <p className="text-sm">{pacientess.ubicacion}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div>
                                                        <FontAwesomeIcon icon={faFileText} className="pr-2 text-sm" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm">Notas:</p>
                                                        <p className="text-sm">{pacientess.notas}</p>
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
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <hr className="border-1 mt-1 mb-1" />
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">Mostrando 5 de 20 citas para mañana</p>
                        <div className="flex gap-2">
                            <Link to="/intranet/medico/pacientes" className="flex items-self-center text-sm border-1 rounded-sm px-2 py-2">Ver todas las citas</Link>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="citasSemana" className="flex flex-col gap-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className={"text-gray-500"}>
                                    Paciente
                                </TableHead>
                                <TableHead className={"text-gray-500"}>
                                    Hora
                                </TableHead>
                                <TableHead className={"text-gray-500"}>
                                    Estado
                                </TableHead>
                                <TableHead className={'text-gray-500 flex items-center justify-self-end pr-8'}>
                                    Acciones
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paciente.map((pacientess, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <FontAwesomeIcon icon={faUserCircle} className="pr-2" />
                                        {pacientess.nombre}
                                    </TableCell>
                                    <TableCell>
                                        <FontAwesomeIcon icon={faClock} className="pr-2" />
                                        {pacientess.hora}
                                    </TableCell>
                                    <TableCell>
                                        <div className={`w-min px-2 py-1 rounded-xl flex items-center ${pacientess.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                            : pacientess.estado === "Confirmada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                            {pacientess.estado}
                                        </div>
                                    </TableCell>
                                    <TableCell className={'flex justify-self-end pr-2'}>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button variant="outline" className={'flex items-self-center text-sm border-1 rounded-lg px-2 py-2'}>Ver detalles</button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
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
                                                        <p className="font-semibold text-lg">{pacientess.nombre}</p>
                                                        <p className="text-gray-500">{pacientess.dia}</p>
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
                                                            <p className="text-sm">{pacientess.hora}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <FontAwesomeIcon icon={faBuildingUser} className="pr-2 text-sm" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm">Estado:</p>
                                                            <div className={`w-min px-2 py-1 rounded-xl flex items-center ${pacientess.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                                                : pacientess.estado === "Confirmada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                                                <p className="text-xs">{pacientess.estado}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <FontAwesomeIcon icon={faLocationPin} className="pr-2 text-sm" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm">Ubicación:</p>
                                                            <p className="text-sm">{pacientess.ubicacion}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div>
                                                        <FontAwesomeIcon icon={faFileText} className="pr-2 text-sm" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm">Notas:</p>
                                                        <p className="text-sm">{pacientess.notas}</p>
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
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <hr className="border-1 mt-1 mb-1" />
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">Mostrando 5 de 20 citas para esta semana</p>
                        <div className="flex gap-2">
                            <Link to="/intranet/medico/pacientes" className="flex items-self-center text-sm border-1 rounded-sm px-2 py-2">Ver todas las citas</Link>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    </>)
}

export default ProxCitas;