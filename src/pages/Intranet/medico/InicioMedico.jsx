import PacienteReciente from "./components/PacienteReciente";
import ProxCitas from "./components/ProxCitas";
import SaludoRegistro from "./components/SaludoRegistro";

const InicioMedico = () => {
    return (<>
        <SaludoRegistro />
        <ProxCitas/>
        <PacienteReciente/>
    </>)
}

export default InicioMedico;