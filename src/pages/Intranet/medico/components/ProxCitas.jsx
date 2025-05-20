import { Tabs, TabsContent } from "@radix-ui/react-tabs"
import { CardTitle } from "../../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ProxCitas = () => {

    const paciente = [
        { nombre: "Juan Perez", hora: "10:00 AM", estado: "Pendiente" },
        { nombre: "Maria Lopez", hora: "11:00 AM", estado: "Confirmada" },
        { nombre: "Carlos Sanchez", hora: "12:00 PM", estado: "Cancelada" },
        { nombre: "Ana Torres", hora: "01:00 PM", estado: "Pendiente" },
        { nombre: "Luis Garcia", hora: "02:00 PM", estado: "Confirmada" },
    ];

    return (<>
        <section className="pt-5">
            <Tabs defaultValue="citas" className=" bg-white shadow-sm border-1 rounded-lg p-6">
                <TabsContent value="citas" className="flex flex-col gap-4">
                    <CardTitle className="flex justify-between gap-2">
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl">Próximas Citas</p>
                            <p className="text-gray-500 text-sm">Gestiona tus próximas citas médicas</p>
                        </div>
                        <div className="flex items-center gap-5 h-15 bg-gray-100 rounded-lg ">
                            <button className="px-5 py-1 w-25 bg-gray-300">Hoy</button>
                            <button className="px-5 py-1 bg-gray-300">Mañana</button>
                            <button className="px-5 py-1 bg-gray-300">Esta semana</button>
                        </div>
                    </CardTitle>
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
                                    <TableCell className={"flex items-center gap-2"}>
                                        <FontAwesomeIcon icon={faUserCircle} className="" />
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
                                        <button className="flex items-self-center text-sm border-1 rounded-lg px-2 py-2">Ver detalle</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </section>
    </>)
}

export default ProxCitas;