import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Activity, ArrowLeft, Calendar, ChevronDown, Eye, File, FileText, Funnel, MoveLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
} from "../../../components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { Tabs, TabsTrigger } from "../../../components/ui/tabs"
import { TabsContent, TabsList } from "@radix-ui/react-tabs";
import { Avatar } from "../../../components/ui/avatar"
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";



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

    const [sorting, setSorting] = useState("");
    const [selected, setSelected] = useState(null);
    const [filterOptions, setFilterOptions] = useState([{
        estado: 'Todos',
        visible: true
    },
    {
        estado: 'Activo',
        visible: false
    },
    {
        estado: 'En tratamiento',
        visible: false
    },
    {
        estado: 'En evaluación',
        visible: false
    }])


    const filtrarPacientes = data.filter((paciente) => {
        return (
            paciente.nombre.toLowerCase().includes(sorting.toLowerCase())
            && paciente.estado.includes(
                filterOptions.find(opcion => opcion.visible === true).estado === 'Todos'
                    ? ''
                    : filterOptions.find(opcion => opcion.visible === true).estado)
        );
    });

    return (
        <div className="flex flex-col gap-3">

            <div>

                <Link className="inline-flex items-center text-blue-600 mb-2" to="/intranet/medico">
                    <ArrowLeft /> Volver al dashboard
                </Link>
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-3xl">
                    Mis pacientes
                </h1>
                <span className="leading-7 [&:not(:first-child)]:mt-6">Gestiona la información de tus pacientes</span>
            </div>

            <div className="flex items-center py-4 gap-6">

                <Button className={`bg-green-500 text-green-50 shadow hover:bg-green-600`}> + Nuevo paciente</Button>

                <Input
                    placeholder="Buscar paciente..."
                    onChange={(event) =>
                        setSorting(event.target.value)
                    }
                    className="max-w-sm"
                />


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Todos <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        {filterOptions.map((opt, index) => (
                            <DropdownMenuCheckboxItem
                                key={index}
                                className={"capitalize"}
                                checked={opt.visible}
                                onCheckedChange={() => {
                                    const updated = filterOptions.map((item, i) => ({
                                        ...item,
                                        visible: i === index
                                    }))

                                    setFilterOptions(updated)
                                }
                                }
                            >
                                {opt.estado}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>



                </DropdownMenu>



                <Button>
                    <Funnel /> Mas filtros
                </Button>

            </div>

            <Tabs defaultValue="lista">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="lista">Lista</TabsTrigger>
                    <TabsTrigger value="tarjetas">Tarjetas</TabsTrigger>

                </TabsList>

                <TabsContent value="lista">
                    <div className="rounded-xl border overflow-x-auto p-4 ">
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
                                {filtrarPacientes.map((item, index) => (
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
                                                        <FileText className="h-4 w-4" />
                                                    </Button>
                                                </DialogTrigger>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </div>
                </TabsContent>

                <TabsContent value="tarjetas" className="grid grid-cols-3">
                    {data.map((item, index) => (
                        <div className="p-4">

                            <Card className="w-[442px] items-left p-4">
                                <div className="flex flex-row gap-3">
                                    <Avatar className='size-12'>
                                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
                                        <AvatarFallback className="text-blue-600 mb-2">HR</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <h1>{item.nombre}</h1>
                                        <span>{item.edad} años • {item.sexo}</span>
                                    </div>

                                </div>

                                <div className="flex flex-row gap-30">
                                    <div className="flex flex-row items-center gap-2">
                                        <Activity />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Condicion:</p>
                                            <h1>{item.condicion}</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <Calendar />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Última visita:</p>
                                            <h1>{item.ultimaVisita}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-20 items-center">
                                    <Badge
                                        className={`px-2 py-1 text-xs ${item.estado === "En tratamiento" ? 'bg-blue-100 text-blue-600'
                                            : item.estado === 'Activo' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                            }`}
                                    >{item.estado}</Badge>

                                    <div className="flex flex-row gap-4">
                                        <Button>
                                            <Eye /> Ver perfil
                                        </Button>
                                        <Button>
                                            <FileText /> Expediente
                                        </Button>
                                    </div>

                                </div>

                            </Card>

                        </div>
                    ))}
                </TabsContent>

            </Tabs>

        </div>
    )

}