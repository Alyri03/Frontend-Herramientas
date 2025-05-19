import ProxCitas from "./components/ProxCitas";
import SaludoRegistro from "./components/SaludoRegistro";

const InicioMedico = () => {

    const pacientes = [
        { id: 1, nombre: "Luis Enrique Martínez", hora: "09:00 AM", estado: "Confirmada" },
        { id: 2, nombre: "María Gonzáles", hora: "10:30 AM", estado: "Confirmada" },
        { id: 3, nombre: "Carlos Rodríguez", hora: "11:45 AM", estado: "Pendiente" },
        { id: 4, nombre: "Ana López", hora: "03:15 PM", estado: "Confirmada" }
    ]

    return (<>
        <SaludoRegistro />
        <ProxCitas paciente={pacientes}/>
    </>)
}

export default InicioMedico;