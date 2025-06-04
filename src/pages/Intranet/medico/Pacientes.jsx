import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Activity, ArrowLeft, Calendar, ChevronDown, Eye, File, FileText, Funnel, MoveLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
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

            <div className="flex flex-wrap items-center gap-4 py-4 justify-between">



                <div className="flex flex-row gap-5 items-center">
                    <Input
                        placeholder="Buscar paciente..."
                        onChange={(event) =>
                            setSorting(event.target.value)
                        }
                        className="w-full"
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



                </div>
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

                            <TableBody className="items-center">
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
                <div className="px-4 sm:px-6 lg:px-8">
                    <TabsContent value="tarjetas" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {filtrarPacientes.map((item, index) => (
                            <Card key={index} className="w-full">
                                <CardHeader>
                                    <CardTitle className="flex flex-row space-x-3 items-center">
                                        <Avatar className="size-12">
                                            <AvatarImage src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png" alt="Hallie Richards" />
                                            <AvatarFallback className="text-blue-600 mb-2">HR</AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                            <h2 className="truncate">{item.nombre}</h2>
                                            <p className="text-sm text-muted-foreground truncate">{item.edad} años • {item.sexo}</p>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3">
                                    <div className="flex flex-row justify-between flex-wrap gap-3">
                                        <div className="flex flex-row items-center gap-2 min-w-[45%]">
                                            <Activity />
                                            <div>
                                                <p className="text-xs text-muted-foreground">Condición:</p>
                                                <p className="text-sm">{item.condicion}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 min-w-[45%]">
                                            <Calendar />
                                            <div>
                                                <p className="text-xs text-muted-foreground">Última visita:</p>
                                                <p className="text-sm">{item.ultimaVisita}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2 w-full flex-wrap">
                                        <Badge
                                            className={`px-2 py-1 text-xs ${item.estado === "En tratamiento"
                                                    ? "bg-blue-100 text-blue-600"
                                                    : item.estado === "Activo"
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-yellow-100 text-yellow-600"
                                                }`}>
                                            {item.estado}
                                        </Badge>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm" className="w-full sm:w-auto justify-center text-xs sm:text-sm" onClick={() => setSelected(item)}>
                                                    <Eye className="size-3 sm:size-4 mr-1" /> Ver perfil
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="w-[90%] sm:max-w-md p-4 sm:p-6 rounded-lg">
                                                <div className="flex flex-col space-y-3">
                                                    <div className="flex items-center space-x-3">
                                                        <Avatar className="size-10">
                                                            <AvatarImage src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png" alt={selected?.nombre}/>
                                                            <AvatarFallback className="text-blue-600">
                                                                {selected?.nombre
                                                                    ?.split(" ")
                                                                    .map((n) => n[0])
                                                                    .join("")}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <h3 className="text-lg font-semibold">{selected?.nombre}</h3>
                                                    </div>
                                                    {selected && (
                                                        <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-3">
                                                            <ul className="text-sm space-y-2">
                                                                <li className="flex justify-between">
                                                                    <span className="text-muted-foreground">Edad:</span>
                                                                    <span className="font-medium">{selected.edad} años</span>
                                                                </li>
                                                                <li className="flex justify-between">
                                                                    <span className="text-muted-foreground">Sexo:</span>
                                                                    <span className="font-medium">{selected.sexo}</span>
                                                                </li>
                                                                <li className="flex justify-between">
                                                                    <span className="text-muted-foreground">Condición:</span>
                                                                    <span className="font-medium">{selected.condicion}</span>
                                                                </li>
                                                                <li className="flex justify-between">
                                                                    <span className="text-muted-foreground">Última visita:</span>
                                                                    <span className="font-medium">{selected.ultimaVisita}</span>
                                                                </li>
                                                                <li className="flex justify-between">
                                                                    <span className="text-muted-foreground">Estado:</span>
                                                                    <span>
                                                                        <Badge
                                                                            className={`px-2 py-1 text-xs ${selected.estado === "En tratamiento"
                                                                                    ? "bg-blue-100 text-blue-600"
                                                                                    : selected.estado === "Activo"
                                                                                        ? "bg-green-100 text-green-600"
                                                                                        : "bg-yellow-100 text-yellow-600"
                                                                                }`}>{selected.estado}
                                                                        </Badge>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-end pt-2">
                                                        <Button size="sm" variant="outline" className="text-xs sm:text-sm">
                                                            <FileText className="size-3 sm:size-4 mr-1" /> Ver expediente completo
                                                        </Button>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )

}