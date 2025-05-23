import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AtencionMedica = () => {
    return (<>
        <section className="pb-4">
            <div className="flex justify-between items-center">
                <div>
                    <Link className="inline-flex items-center text-blue-600 mb-2" to="/intranet/medico">
                        <ArrowLeft /> Volver a mi agenda
                    </Link>
                    <div>
                        <p className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-3xl">
                            Atención Médica
                        </p>
                    </div>
                    <span className="leading-7 [&:not(:first-child)]:mt-6 text-gray-500 text-md">Cita con Luis Enrique Martínez - Lunes, 24 de Mayo a las 09:00 AM</span>
                </div>
                <div className="w-min px-2 py-1 rounded-xl flex items-center whitespace-nowrap bg-amber-100 text-amber-700">
                    <p>En atención</p>
                </div>
            </div>
        </section>
    </>)
}

export default AtencionMedica;