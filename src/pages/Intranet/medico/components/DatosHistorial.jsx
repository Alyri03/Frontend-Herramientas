import { Eye, FileText, Pill, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const DatosHistorial = () => {

    const { id } = useParams()

    return (
        <section className="pb-4 px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between gap-7">
                {}
                <div className="flex flex-col bg-white rounded-xl shadow-md w-full lg:w-1/3">
                    <div className="flex items-center pl-5 gap-5 w-full rounded-t-xl py-3 bg-gradient-to-r from-green-600 via-green-600 to-green-500">
                        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full">
                            <User />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-white text-sm sm:text-md font-semibold">Luis Enrique Martínez</p>
                            <p className="text-white text-xs sm:text-sm">38 años • Masculino</p>
                            <p className="text-white text-xs sm:text-sm">ID: {id}</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full p-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Grupo sanguíneo</p>
                            <p className="px-2 py-1 rounded-xl bg-red-100 text-red-600 border border-red-200 text-xs sm:text-sm">O+</p>
                        </div>
                        <hr className="border mt-4 mb-4" />
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Alergias</p>
                            <div className="flex flex-wrap gap-2">
                                <p className="px-2 py-1 rounded-xl bg-red-100 text-red-600 border border-red-200 text-xs sm:text-sm">Penicilina</p>
                                <p className="px-2 py-1 rounded-xl bg-red-100 text-red-600 border border-red-200 text-xs sm:text-sm">Sulfamidas</p>
                            </div>
                        </div>
                        <hr className="border mt-4 mb-4" />
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Condiciones crónicas</p>
                            <div className="flex flex-wrap gap-2">
                                <p className="px-2 py-1 rounded-xl bg-blue-100 text-blue-600 border border-blue-200 text-xs sm:text-sm">Hipertensión arterial</p>
                                <p className="px-2 py-1 rounded-xl bg-blue-100 text-blue-600 border border-blue-200 text-xs sm:text-sm">Dislipidemia</p>
                            </div>
                        </div>
                        <hr className="border mt-4 mb-4" />
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Motivo de consulta:</p>
                            <p className="text-sm">Control de hipertensión. Revisar medicación actual.</p>
                        </div>
                    </div>
                </div>

                {}
                <div className="flex flex-col w-full lg:w-2/3 rounded-xl bg-white shadow-md">
                    <div className="px-4 py-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div className="flex flex-col gap-1">
                                <p className="text-lg sm:text-xl font-semibold">Historial Clínico</p>
                                <p className="text-gray-500 text-sm sm:text-md">Registros médicos anteriores del paciente</p>
                            </div>
                            <button className="text-sm border border-green-500 text-green-500 rounded px-3 py-2 hover:bg-green-100 hover:text-black transition">
                                Ver historial completo
                            </button>
                        </div>
                    </div>
                    <hr className="mb-2" />

                    {}
                    {[{
                        titulo: "Hipertensión arterial no controlada",
                        fecha: "10 de Abril, 2023 • Dr. Roberto Sánchez",
                        tratamiento: "Losartán 50mg cada 12 horas, Hidroclorotiazida 25mg cada mañana",
                        notas: "Paciente refiere cefalea ocasional. Se recomienda monitoreo diario de presión arterial."
                    }, {
                        titulo: "Dislipidemia mixta",
                        fecha: "15 de Marzo, 2023 • Dra. María Rodríguez",
                        tratamiento: "Atorvastatina 20mg cada noche, dieta baja en grasas saturadas",
                        notas: "Perfil lipídico alterado. Control en 3 meses con nuevo perfil lipídico."
                    }, {
                        titulo: "Cefalea tensional",
                        fecha: "20 de Febrero, 2023 • Dr. Roberto Sánchez",
                        tratamiento: "Paracetamol 500mg cada 8 horas por dolor, técnicas de relajación",
                        notas: "Asociada a estrés laboral. Se recomienda evaluación por psicología."
                    }].map((item, idx) => (
                        <div key={idx} className="px-4 py-2">
                            <div className="flex flex-col sm:flex-row justify-between w-full gap-1 sm:gap-4">
                                <div className="flex flex-col">
                                    <p className="text-sm sm:text-md text-green-700">{item.titulo}</p>
                                    <p className="text-xs sm:text-sm">{item.fecha}</p>
                                </div>
                                <Link className="flex items-center gap-1 text-sm text-green-700 hover:underline">
                                    <Eye className="w-4 h-4" />
                                    <span>Ver detalle</span>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 mb-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <Pill className="w-4 h-4 text-green-700" />
                                        <p className="text-sm">Tratamiento</p>
                                    </div>
                                    <div className="text-sm pl-6">
                                        {item.tratamiento}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-green-700" />
                                        <p className="text-sm">Notas</p>
                                    </div>
                                    <div className="text-sm pl-6">
                                        {item.notas}
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DatosHistorial;
