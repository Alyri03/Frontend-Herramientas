import { useEffect, useState } from "react";
import { CardTitle, CardDescription } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pagination, PaginationNext, PaginationLink, PaginationEllipsis, PaginationPrevious, PaginationItem, PaginationContent } from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarPlus, CircleCheckBig, Clock, Eye, FileText, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export const AgendaTabla = ({ filtrarPacientes, date }) => {

    const [currentPage, setCurrentPage] = useState(1)

    const total_pages = Math.ceil(filtrarPacientes.length / 5);
    const rowsPerPage = 5

    const currentData = filtrarPacientes.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)



    const goTo = (page) => {
        if (page >= 1 && page <= total_pages) {
            setCurrentPage(page)
        }
    }


    useEffect(() => {
        setCurrentPage(1)
    }, [total_pages])


    return (
        <div className="rounded-xl border overflow-x-auto bg-white">

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell colSpan={5}>
                            <CardTitle className={` text-xl font-semibold`}>
                                <div className="flex flex-col gap-2 px-4">
                                    {date ? (
                                        format(date, "PPP")
                                    ) : (
                                        <span>Selecciona una fecha</span>
                                    )}
                                    <CardDescription className="text-sm">Mostrando todas las citas</CardDescription>
                                </div>
                            </CardTitle>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead className={"text-gray-500 text-center"}>Hora</TableHead>
                        <TableHead className={"text-gray-500 text-center"}>Paciente</TableHead>
                        <TableHead className={"text-gray-500 text-center"}>Especialidad</TableHead>
                        <TableHead className={"text-gray-500 text-center"}>Estado</TableHead>
                        <TableHead className={"text-gray-500 text-center"}>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className={'items-center text-center'}>
                    {currentData.map((pacientess, i) => (
                        <TableRow key={i}>
                            <TableCell >
                                <div className="flex flex-row items-center justify-center gap-2">
                                    <Clock />
                                    {pacientess.hora}
                                </div>

                            </TableCell>

                            <TableCell>

                                <div className="flex flex-row items-center gap-2 justify-center">
                                    <Avatar>
                                        <AvatarImage src="s" />
                                        <AvatarFallback className={'text-blue-600 mb-2'}>CN</AvatarFallback>
                                    </Avatar>
                                    {pacientess.nombre}
                                </div>

                            </TableCell>

                            <TableCell>
                                {pacientess.especialidad}
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
                                        <Button variant="secondary" size="sm">
                                            <Eye />
                                            Ver detalle
                                        </Button>
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
                                                <Avatar>
                                                    <AvatarImage src="s" />
                                                    <AvatarFallback className={'text-blue-600 mb-2'}>CN</AvatarFallback>
                                                </Avatar>
                                            </div>


                                            <div className="flex flex-col justify-center">
                                                <p className="font-semibold text-lg">{pacientess.nombre}</p>
                                                <p className="text-gray-500">{pacientess.dia}</p>
                                            </div>
                                        </div>
                                        <hr className="border-1" />


                                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                                            <div className="flex gap-4 items-center">
                                                <div>
                                                    <CalendarPlus />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm">Fecha:</p>
                                                    <p>{pacientess.fecha}</p>
                                                </div>
                                            </div>


                                            <div className="flex gap-4 items-center">
                                                <div>
                                                    <Clock />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm">Hora:</p>
                                                    <p className="text-sm">{pacientess.hora}</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 items-center">
                                                <div>
                                                    <User />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm">Estado:</p>
                                                    <Badge className={`px-2 py-1 text-xs  ${pacientess.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                                        : pacientess.estado === "Confirmada" ? "bg-blue-100 text-blue-600"
                                                            : pacientess.estado === "Cancelada" ? "bg-red-100 text-red-600"
                                                                : "bg-green-100 text-green-600"}`}>{pacientess.estado}</Badge>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 items-center">
                                                <div>
                                                    <MapPin />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm">Ubicación:</p>
                                                    <p className="text-sm">{pacientess.ubicacion}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div>
                                                <FileText />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-sm">Notas:</p>
                                                <p className="text-sm">{pacientess.nota}</p>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <div className="flex gap-2 pt-3">
                                                <DialogClose asChild>
                                                    <Button size="sm" className={`bg-gray-500 shadow hover:bg-gray-600`}>Cerrar</Button>
                                                </DialogClose>
                                                {
                                                    pacientess.estado === "Pendiente" &&
                                                    <Button size="sm" className={`bg-green-500 shadow hover:bg-green-600`}>
                                                        <CircleCheckBig />
                                                        Atender
                                                    </Button>
                                                }
                                            </div>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                                {
                                    pacientess.estado === "Pendiente" &&
                                    <Button size="sm" className={`bg-green-500 text-green-50 shadow hover:bg-green-600`}>
                                        <CircleCheckBig />
                                        Atender
                                    </Button>
                                }
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
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
                </TableFooter>
            </Table>
        </div>
    )
}