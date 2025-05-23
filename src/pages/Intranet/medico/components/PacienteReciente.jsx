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
        { nombre: "Carlos Sanchez", edad: "29 años", hora: "Hoy, 12:00 PM", estado: "Evaluación", condicion: "Hipertension" },
        { nombre: "Ana Torres", edad: "19 años", hora: "Hoy, 01:00 PM", estado: "Estable", condicion: "Hipertension" },
        { nombre: "Luis Garcia", edad: "23 años", hora: "Hoy, 02:00 PM", estado: "Evaluación", condicion: "Hipertension" },
    ];

    return (<>
        <section className="pt-4">
            <Tabs defaultValue="recientes" className="bg-white shadow-sm border-1 rounded-lg p-6">
                <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3">
                    {}
                    <div className="flex flex-col gap-1 sm:w-1/2">
                        <p className="text-xl sm:text-2xl font-semibold">Pacientes recientes</p>
                        <p className="text-gray-500 text-sm sm:text-base">Pacientes que has atendido recientemente</p>
                    </div>

                    {}
                    <div className="w-full sm:w-auto">
                        <Input type="text" placeholder="Buscar paciente" className="w-full sm:w-[250px]"/>
                    </div>
                </CardTitle>
                <TabsContent value="recientes">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-4">
                        {paciente.map((paciente, i) => (
                            <div key={i} className="flex flex-col transition hover:bg-blue-100 hover:border-blue-300 border-1 rounded-lg p-5 shadow-xs">
                                <div className="flex gap-4 mt-1 pb-4">
                                    <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faUserCircle} className="" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-semibold text-lg">{paciente.nombre}</p>
                                        <p className="text-gray-500 text-lg">{paciente.edad}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 grid-rows-2 gap-5">
                                    <div className="flex">
                                        <div className="flex flex-col">
                                            <p className="text-gray-500 text-md">Ultima visita:</p>
                                            <p className="text-md">{paciente.hora}</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex flex-col">
                                            <p className="text-gray-500 text-md">Condición:</p>
                                            <p className="text-md">{paciente.condicion}</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex items-center">
                                            <p className="text-gray-500 text-md pr-2">Estado:</p>
                                            <div className={`w-min px-2 h-min rounded-xl flex items-center whitespace-nowrap ${paciente.estado === "En tratamiento" ? "bg-blue-100 text-blue-600"
                                                : paciente.estado === "Estable" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-700"}`}>
                                                <p className="text-md">{paciente.estado}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pt-3 justify-end items-center">
                                    <button className={'flex items-self-center text-sm border-1 border-gray-300 rounded-sm px-3 py-2 bg-white'}>Ver expediente</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <hr className="border-1 mt-5 mb-3" />
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