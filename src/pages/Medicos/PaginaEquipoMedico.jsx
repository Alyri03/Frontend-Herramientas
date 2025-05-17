import { useEffect, useState } from "react";
import Preefooter from "../../components/Preefooter"
import InfoMedicos from "./components/InfoMedicos"
import ReservaBusqueda from "./components/ReservaBusqueda"
import axios from 'axios'
import { medicoEspecialidad } from "../../services/equipoMedico";

const EquipoMedico = () => {
    const [buscarMedicos, setBuscarMedicos] = useState("");

    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        const obtenerMedicos = async () => {
            const data = await medicoEspecialidad();
            setMedicos(data);
        }

        obtenerMedicos();
    }, [])

    const filtrarMedicos = medicos.filter((medico) => {
        return (
            medico.nombreMedico.toLowerCase().includes(buscarMedicos.toLowerCase())
            || medico.nombreEspecialidad.toLowerCase().includes(buscarMedicos.toLowerCase())
        );
    });


    const busqueda = (term) => {
        setBuscarMedicos(term)
    }

    return (<>
        <ReservaBusqueda onSearch={busqueda} />
        <InfoMedicos medicoss={filtrarMedicos} />
        <Preefooter />
    </>)
}

export default EquipoMedico