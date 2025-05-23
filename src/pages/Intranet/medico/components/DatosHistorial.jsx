import { Eye, FileText, Pill, User } from "lucide-react";
import { Link } from "react-router-dom";

const DatosHistorial = () => {
    return (<>
        <section className="pb-4">
            <div className="flex justify-between gap-7">
                {/* Card */}
                <div className="flex flex-col bg-white rounded-xl shadow-md">
                    <div className="flex items-center pl-5 gap-5 w-full rounded-t-xl py-3 bg-gradient-to-r from-green-600 via-green-600 to-green-500">
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                            <User />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-white text-md font-semibold ">Luis Enrique Martínez</p>
                            <p className="text-white text-sm">38 años • Masculino</p>
                            <p className="text-white text-sm">ID:</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full p-4">
                        <div flex className="flex justify-between items-center">
                            <p className="text-sm">Grupo sanguíneo</p>
                            <p className="w-min px-2 h-min rounded-xl flex items-center bg-red-100 text-red-600 border-red-200 border-1 text-sm">O+</p>
                        </div>
                        <hr className="border-1 mt-4 mb-4" />
                        <div flex className="flex flex-col gap-2">
                            <p className="text-sm">Alergias</p>
                            <div className="flex gap-2">
                                <p className="w-min px-2 h-min rounded-xl flex items-center whitespace-nowrap bg-red-100 text-red-600 border-red-200 border-1 text-sm">Penicilina</p>
                                <p className="w-min px-2 h-min rounded-xl flex items-center whitespace-nowrap bg-red-100 text-red-600 border-red-200 border-1 text-sm">Sulfamidas</p>
                            </div>
                        </div>
                        <hr className="border-1 mt-4 mb-4" />
                        <div flex className="flex flex-col gap-2">
                            <p className="text-sm">Condiciones cronicas</p>
                            <div className="flex gap-2">
                                <p className="w-min px-2 h-min rounded-xl flex items-center whitespace-nowrap bg-blue-100 text-blue-600 border-blue-200 border-1 text-sm">Hipertensión arterial</p>
                                <p className="w-min px-2 h-min rounded-xl flex items-center whitespace-nowrap bg-blue-100 text-blue-600 border-blue-200 border-1 text-sm">Dislipidemia</p>
                            </div>
                        </div>
                        <hr className="border-1 mt-4 mb-4" />
                        <div flex className="flex flex-col gap-2">
                            <p className="text-sm">Motivo de consulta:</p>
                            <p className="text-sm">Control de hipertensión. Revisar Medicación actual.</p>
                        </div>
                    </div>
                </div>
                {/* Historial Clínico */}
                <div className="flex flex-col w-full h-max rounded-xl bg-white shadow-md">
                    <div className="flex flex-col px-3 py-4">
                        <div className="flex justify-between items-center px-3">
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-semibold">Historial Clínico</p>
                                <p className="text-gray-500 text-md">Registros médicos anteriores del paciente</p>
                            </div>
                            <button className="flex items-self-center text-sm border-1 rounded-sm px-3 py-2 text-green-500 border-green-500 hover:bg-green-100 hover:text-black transition">Ver historial completo</button>
                        </div>
                    </div>
                    <hr className="mb-2" />
                    {/* Seccion1 */}
                    <div className="flex flex-col px-4 py-2">
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col gap-1">
                                <p className="text-md text-green-700">Hipertensión arterial no controlada</p>
                                <p className="text-sm ">10 de Abril, 2023 • Dr. Roberto Sánchez</p>
                            </div>
                            <Link className="flex items-center justify-center pr-4 gap-2">
                                <Eye className="text-sm" />
                                <p className="text-sm">Ver detalle</p>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex items-center gap-2">
                                    <Pill className="text-xs text-green-700" />
                                    <p className="text-sm">Tratamiento</p>
                                </div>
                                <div className="text-sm pl-8">
                                    Losartán 50mg cada 12 horas, Hidroclorotiazida 25mg cada mañana
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex items-center gap-2">
                                    <FileText className="text-xs text-green-700" />
                                    <p className="text-sm">Notas</p>
                                </div>
                                <div className="text-sm pl-8">
                                    Paciente refiere cefalea ocasional. Se recomienda monitoreo diario de presión arterial.
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-2" />
                    {/* Seccion2 */}
                    <div className="flex flex-col px-4 py-2">
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col gap-1">
                                <p className="text-md text-green-700">Dislipidemia mixta</p>
                                <p className="text-sm ">15 de Marzo, 2023 • Dra. María Rodríguez</p>
                            </div>
                            <Link className="flex items-center justify-center pr-4 gap-2">
                                <Eye className="text-sm" />
                                <p className="text-sm">Ver detalle</p>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex items-center gap-2">
                                    <Pill className="text-xs text-green-700" />
                                    <p className="text-sm">Tratamiento</p>
                                </div>
                                <div className="text-sm pl-8">
                                    Atorvastatina 20mg cada noche, dieta baja en grasas saturadas
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex items-center gap-2">
                                    <FileText className="text-xs text-green-700" />
                                    <p className="text-sm">Notas</p>
                                </div>
                                <div className="text-sm pl-8">
                                    Perfil lipídico alterado. Control en 3 meses con nuevo perfil lipídico.
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-2" />
                    {/* Seccion3 */}
                    <div className="flex flex-col px-4 py-2">
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col gap-1">
                                <p className="text-md text-green-700">Cefalea tensional</p>
                                <p className="text-sm ">20 de Febrero, 2023 • Dr. Roberto Sánchez</p>
                            </div>
                            <Link className="flex items-center justify-center pr-4 gap-2">
                                <Eye className="text-sm" />
                                <p className="text-sm">Ver detalle</p>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex items-center gap-2">
                                    <Pill className="text-xs text-green-700" />
                                    <p className="text-sm">Tratamiento</p>
                                </div>
                                <div className="text-sm pl-8">
                                    Paracetamol 500mg cada 8 horas por dolor, técnicas de relajación
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex items-center gap-2">
                                    <FileText className="text-xs text-green-700" />
                                    <p className="text-sm">Notas</p>
                                </div>
                                <div className="text-sm pl-8">
                                    Asociada a estrés laboral. Se recomienda evaluación por psicología.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default DatosHistorial;