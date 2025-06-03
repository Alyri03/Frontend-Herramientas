import { BriefcaseMedical, HeartPulse, Syringe, UserPlus, UserRoundCheck, UserRoundPlus, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";
import { Input } from "../../../../components/ui/input";

const DoctorRegistroComponent = () => {
    return (<>
        <section className="flex flex-col gap-4 pb-4">
            {/* Nombre y botón */}
            <div className="flex justify-between items-center">
                <p className="sm:text-3xl text-2xl font-semibold">Doctores</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <button variant="outline" className={"bg-zinc-950 text-white sm:px-4 px-3 py-2 rounded-md shadow-xs hover:bg-zinc-800 transition-colors flex items-center gap-2"}>
                            <UserPlus className="sm:w-auto w-5 sm:h-auto h-5"/>
                            <p className="sm:text-sm text-xs">Añadir Doctor</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className={"text-xl font-semibold"}>Añadir Nuevo Doctor</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col mt-2">
                            <div className="flex flex-col gap-5">
                                <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-5">
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="text-md">Nombre</p>
                                        <Input type="text" className="w-full" />
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Apellido</p>
                                        <Input type="text"className="w-full" />
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Especialidad</p>
                                        <Select>
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
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Genero</p>
                                        <Select>
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
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Telefono</p>
                                        <Input type="text"className="w-full" />
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Email</p>
                                        <Input type="text"className="w-full" />
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Número de Licencia</p>
                                        <Input type="text"className="w-full" />
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Años de Experiencia</p>
                                        <Input type="text"className="w-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Horario de Trabajo</p>
                                        <Input type="text"className="w-full" placeholder="Ej: Lun-Vie, 9:00-17:00"/>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p>Educación</p>
                                        <Textarea type="text"className="w-full" placeholder="Universidad, títulos, certificaciones..."/>
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
                                    <UserRoundPlus className="h-4 w-4" />
                                    <p>Guardar</p>
                                </button>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-3">
                {/* Total doctores */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-green-600 bg-green-100 flex items-center justify-center">
                        <BriefcaseMedical />
                    </div>
                    <div className="flex flex-col text-lg gap-0.5">
                        <p>Total Doctores</p>
                        <p className="font-semibold text-xl">5</p>
                        <p className="text-sm text-gray-500">en plantilla</p>
                    </div>
                </div>

                {/* Disponibles */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-blue-600 bg-blue-100 flex items-center justify-center">
                        <UserRoundCheck />
                    </div>
                    <div className="flex flex-col text-lg gap-0.5">
                        <p>Disponibles</p>
                        <p className="font-semibold">2</p>
                        <p className="text-sm text-gray-500">para consultas</p>
                    </div>
                </div>

                {/* Consulta */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-amber-600 bg-amber-100 flex items-center justify-center">
                        <HeartPulse />
                    </div>
                    <div className="flex flex-col text-lg gap-0.5">
                        <p>En consulta</p>
                        <p className="font-semibold">2</p>
                        <p className="text-sm text-gray-500">atendiendo pacientes</p>
                    </div>
                </div>

                {/* Especialidades */}
                <div className="flex items-center gap-4 bg-white shadow-sm border rounded-lg p-4 min-w-[220px]">
                    <div className="w-12 h-12 rounded-full text-purple-600 bg-purple-100 flex items-center justify-center">
                        <Syringe />
                    </div>
                    <div className="flex flex-col text-lg gap-0.5">
                        <p>Especialidades</p>
                        <p className="font-semibold">5</p>
                        <p className="text-sm text-gray-500">áreas médicas</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default DoctorRegistroComponent;