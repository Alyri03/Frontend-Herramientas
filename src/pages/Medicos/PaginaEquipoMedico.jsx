import { useEffect, useState } from "react";
import Preefooter from "../../components/Preefooter"
import InfoMedicos from "./components/InfoMedicos"
import ReservaBusqueda from "./components/ReservaBusqueda"
import axios from 'axios'

const EquipoMedico = () => {
    const [buscarMedicos, setBuscarMedicos] = useState("");

    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        axios.get('https://backend-dev-desarrollo.up.railway.app/api/medicos').then((res) => {
            setMedicos(res.data)
        })


    }, [])

    const filtrarMedicos = medicos.filter((medico) => {
        return (
            medico.nombres.toLowerCase().includes(buscarMedicos.toLowerCase()) 
            // || medico.especialidad.toLowerCase().includes(buscarMedicos.toLowerCase())
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