import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarIcon, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
} from "../../../components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover"
import { Calendar } from "../../../components/ui/calendar";
import { format } from "date-fns";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from '../../../components/ui/menubar'


const Agenda = () => {


    const [filterOptions, setFilterOptions] = useState([{
        estado: 'Todos los estados',
        visible: true
    },
    {
        estado: 'Pendiente',
        visible: false
    },
    {
        estado: 'Confirmado',
        visible: false
    },
    {
        estado: 'Atendido',
        visible: false
    },
    {
        estado: 'Cancelado',
        visible: false

    }])


    // const filtrarPacientes = data.filter((paciente) => {
    //     return (
    //         paciente.nombre.toLowerCase().includes(sorting.toLowerCase())
    //         && paciente.estado.includes(
    //             filterOptions.find(opcion => opcion.visible === true).estado === 'Todos'
    //                 ? ''
    //                 : filterOptions.find(opcion => opcion.visible === true).estado)
    //     );
    // });


    const [date, setDate] = useState(null)

    return (
        <>
            <div>

                <Link className="inline-flex items-center text-blue-600 mb-2" to="/intranet/medico">
                    <ArrowLeft /> Volver al dashboard
                </Link>
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-3xl">
                    Mi agenda
                </h1>
                <span className="leading-7 [&:not(:first-child)]:mt-6">Gestiona tus citas y horarios de consultas</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 py-4 justify-between">




                    <div className="border-3 flex flex-row gap-5">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}

                                >
                                    {date ? (
                                        format(date, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>


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



                    <div className="flex flex-row gap-5 items-center border-3">

                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>Dia</MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Semana</MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Mes</MenubarTrigger>
                            </MenubarMenu>
                        </Menubar>


                        <Button className={`bg-green-500 text-green-50 shadow hover:bg-green-600`}> + Nuevo Cita</Button>


                    </div>
                </div>
        </>
    )
}

export default Agenda