import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SaludoRegistro = () => {
    return (<>
        <section className="flex flex-col gap-4 pb-5">
            {/* Saludo */}
            <div className="flex flex-col gap-1">
                <p className="text-green-600 text-sm">Bienvenido de vuelta</p>
                <p className="text-3xl font-semibold">Dr. Roberto Sánchez</p>
                <p className="text-gray-500 text-md">Panel de control para gestionar tus pacientes, citas y expedientes médicos.</p>
            </div>

            {/* Registro */}
            <div className="grid grid-cols-3 gap-4 pt-3">
                {/* Pacientes */}
                <div className="flex flex-col gap-2 bg-white shadow-sm border-1 rounded-lg p-4">
                    {/* <FontAwesomeIcon/> */}
                    <div>
                        <p>Total Pacientes</p>
                        <p>128</p>
                    </div>
                </div>

                {/* Citas */}
                <div className="flex flex-col gap-2 bg-white shadow-sm border-1 rounded-lg p-4">
                    {/* <FontAwesomeIcon/> */}
                    <div>
                        <p>Total Pacientes</p>
                        <p>128</p>
                    </div>
                </div>

                {/* Informes */}
                <div className="flex flex-col gap-2 bg-white shadow-sm border-1 rounded-lg p-4">
                    {/* <FontAwesomeIcon/> */}
                    <div>
                        <p>Total Pacientes</p>
                        <p>128</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default SaludoRegistro;