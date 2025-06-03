
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";

import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditarCita } from "./EditarCita";


export const TablaCita = ({ filtrarCitas, from, to, cita, setCita, loading, setLoading, tiempos, tiposCitas, estados }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell colSpan={7}>
                        <CardTitle className={` text-xl font-semibold w-full`}>
                            <div className="flex flex-col gap-2 px-4 w-full">
                                <span>
                                    {from ? (
                                        format(from, "dd/MM/yyyy ")
                                    ) : (
                                        "Desde "
                                    )}
                                    -
                                    {to ? (
                                        format(to, " dd/MM/yyyy")
                                    ) : (
                                        " Hasta"
                                    )}
                                </span>
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
                {filtrarCitas.map((appointment, i) => (
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
                            <Badge className={`px-2 py-1 text-xs  ${appointment.estado === "Pendiente" ? "bg-red-100 text-white-600 "
                                : appointment.estado === "Confirmado" ? "bg-blue-100 text-white-600"
                                    : appointment.estado === "En progreso" ? "bg-gray-300 text-black-600"
                                        : appointment.estado === "En espera" ? "bg-white-100 text-black-600" : "bg-green-100 text-green-600"}`}>{appointment.estado}</Badge>

                        </TableCell>

                        <TableCell className={'flex flex-row justify-center gap-3 p-4'}>

                            <EditarCita cita={cita} setCita={setCita} loading={loading} setLoading={setLoading} appointment={appointment} tiempos={tiempos} tiposCitas={tiposCitas} estados={estados} />
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
    )
}