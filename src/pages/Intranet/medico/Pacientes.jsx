import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, File } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input"

const data = [
    {
        nombre: 'Luis Enrique Martínez',
        sexo: 'Masculino',
        edad: 38,
        condicion: 'Hipertension',
        ultimaVisita: 'Hoy, 09:00 AM',
        estado: 'Activo'
    },
    {
        nombre: 'María González',
        sexo: 'Femenino',
        edad: 45,
        condicion: 'Diabetes Tipo 2',
        ultimaVisita: 'Hoy, 10:30 AM',
        estado: 'Activo'
    },
    {
        nombre: 'Carlos Rodríguez',
        sexo: 'Masculino',
        edad: 29,
        condicion: 'Dolor torácico',
        ultimaVisita: 'Hoy, 11:45 AM',
        estado: 'En evaluación'
    },
    {
        nombre: 'Ana López',
        sexo: 'Femenino',
        edad: 52,
        condicion: 'Arritmia',
        ultimaVisita: '18/05/2023',
        estado: 'Activo'
    },
    {
        nombre: 'Jorge Méndez',
        sexo: 'Masculino',
        edad: 61,
        condicion: 'Post infarto',
        ultimaVisita: '10/05/2023',
        estado: 'En tratamiento'
    }
]




export const MisPacientes = () => {

    const [selected, setSelected] = useState(null);


    return (
        <>

            <div className="flex items-center py-4 gap-6">

                <Button className={`bg-green-500 text-green-50 shadow hover:bg-green-600`}> + Nuevo paciente</Button>

                <Input
                    placeholder="Filter emails..."
                    //   value={(table.getColumn("email")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />

                    


            </div>


            <div className="rounded-xl border overflow-x-auto p-4">
                <CardTitle className={`mb-4 text-xl font-semibold`}>Listado de pacientes</CardTitle>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Paciente</TableHead>
                            <TableHead>Edad</TableHead>
                            <TableHead>Condicion</TableHead>
                            <TableHead>Ultima visita</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className={'flex flex-col'}>
                                    <span className="font-medium">{item.nombre}</span>
                                    <span className="text-muted-foreground text-sm">{item.sexo}</span>
                                </TableCell>
                                <TableCell>{item.edad}</TableCell>
                                <TableCell>{item.condicion}</TableCell>
                                <TableCell>{item.ultimaVisita}</TableCell>
                                <TableCell>
                                    <Badge className={`px-2 py-1 text-xs ${item.estado === "En tratamiento" ? 'bg-blue-100 text-blue-600'
                                        : item.estado === 'Activo' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                        }`}>{item.estado}</Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="ghost" size="icon" onClick={() => setSelected(item)}>
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-md">
                                            <h3 className="text-lg font-semibold mb-2">Detalle del registro</h3>
                                            {selected && (
                                                <ul className="text-sm space-y-1">
                                                    <li><strong>Nombre:</strong> {selected.nombre}</li>
                                                    <li><strong>Edad:</strong> {selected.edad}</li>
                                                    <li><strong>Condicion:</strong> {selected.condicion}</li>
                                                    <li><strong>Ultima visita:</strong> {selected.ultimaVisita}</li>
                                                    <li><strong>Estado:</strong> {selected.estado}</li>
                                                </ul>
                                            )}
                                        </DialogContent>
                                    </Dialog>


                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="ghost" size="icon" onClick={() => setSelected(item)}>
                                                <File className="h-4 w-4" />
                                            </Button>
                                        </DialogTrigger>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>




        </>
    )

}