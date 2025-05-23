import AtencionMedica from "./components/AtencionMedica";
import DatosHistorial from "./components/DatosHistorial";
import { RegistroAtencion } from "./components/RegistroAtencion";

const Atencion = () => {
    return(<>
        <AtencionMedica/>
        <DatosHistorial/>
        <RegistroAtencion/>
    </>)
}

export default Atencion;