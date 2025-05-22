import { Link } from "react-router-dom";
import { CardTitle } from "../../../../components/ui/card";
import { Tabs, TabsContent } from "../../../../components/ui/tabs";
import { Input } from "../../../../components/ui/input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const PacienteReciente = () => {

    const paciente = [
        { nombre: "Juan Perez", edad: "38 años", hora: "Hoy, 10:00 AM", estado: "Estable", condicion: "Hipertension" },
        { nombre: "Maria Lopez", edad: "45 años", hora: "Hoy, 11:00 AM", estado: "En tratamiento", condicion: "Hipertension" },
        { nombre: "Carlos Sanchez", edad: "29 años", hora: "Hoy, 12:00 PM", estado: "Evaluacion", condicion: "Hipertension" },
        { nombre: "Ana Torres", edad: "19 años", hora: "Hoy, 01:00 PM", estado: "Estable", condicion: "Hipertension" },
        { nombre: "Luis Garcia", edad: "23 años", hora: "Hoy, 02:00 PM", estado: "Evaluacion", condicion: "Hipertension" },
    ];

    return (<>
        <section className="pt-4">
            <Tabs defaultValue="recientes" className="bg-white shadow-sm border-1 rounded-lg p-6">
                <CardTitle className="flex justify-between gap-2 pb-3">
                    <div className="flex flex-col gap-2 w-1/2">
                        <p className="text-2xl">Pacientes recientes</p>
                        <p className="text-gray-500 text-sm">Pacientes que has atendido recientemente</p>
                    </div>
                    <div className="flex justify-end">
                        <Input type="text" placeholder="Buscar paciente" className="" />
                    </div>
                </CardTitle>
                <TabsContent value="recientes">
                    {paciente.map((paciente, i) => (
                        <div key={i} className="grid grid-cols-3 gap-4">
                            
                            {/* Card */}
                            <div className="flex gap-4 mt-2">
                                <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faUserCircle} className="w-16 h-16" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="font-semibold text-lg">{paciente.nombre}</p>
                                    <p className="text-gray-500">{paciente.dia}</p>
                                </div>
                            </div>
                            <hr className="border-1" />
                            <div className="grid grid-cols-2 grid-rows-2 gap-5">
                                <div className="flex">

                                    <div className="flex flex-col">
                                        <p className="text-sm">Hora:</p>
                                        <p className="text-sm">{paciente.hora}</p>
                                    </div>
                                </div>
                                <div className="flex">

                                    <div className="flex flex-col">
                                        <p className="text-sm">Estado:</p>
                                        <div className={`w-min px-2 py-1 rounded-xl flex items-center ${paciente.estado === "Pendiente" ? "bg-yellow-100 text-yellow-600 "
                                            : paciente.estado === "Confirmada" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                            <p className="text-xs">{paciente.estado}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">

                                    <div className="flex flex-col">
                                        <p className="text-sm">Ubicación:</p>
                                        <p className="text-sm">{paciente.ubicacion}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">

                                <div className="flex flex-col">
                                    <p className="text-sm">Notas:</p>
                                    <p className="text-sm">{paciente.notas}</p>
                                </div>
                            </div>



                        </div>
                    ))}
                </TabsContent>
                <hr className="border-1 mt-1 mb-1" />
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Mostrando 5 de 20 pacientes recientes</p>
                    <div className="flex gap-2">
                        <Link to="/intranet/medico/pacientes" className="flex items-self-center text-sm border-1 rounded-sm px-2 py-2">Ver todos los pacientes</Link>
                    </div>
                </div>
            </Tabs>
        </section>
    </>)
}

export default PacienteReciente;