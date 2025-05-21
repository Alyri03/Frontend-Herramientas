import { useEffect, useState } from "react";
import Preefooter from "@/components/Preefooter"
import InfoMedicos from "./components/InfoMedicos"
import Spinner from "@/components/Spinner";
import ReservaBusqueda from "./components/ReservaBusqueda"
import { medicoEspecialidad } from "../../../services/equipoMedicoService";
const EquipoMedico = () => {
    const [buscarMedicos, setBuscarMedicos] = useState("");

    const [loading, setLoading] = useState(true);
    const [medicos, setMedicos] = useState([]);
    useEffect(() => {
        const obtenerMedicos = async () => {
            setLoading(true);
            try {
                const data = await medicoEspecialidad();
                setMedicos(data);
            } catch (error) {
                console.error("Error cargando médicos", error);
            } finally {
                setLoading(false);
            }
        };

        obtenerMedicos();
    }, []);

    const filtrarMedicos = medicos.filter((medico) => {
        return (
            medico.nombreMedico.toLowerCase().includes(buscarMedicos.toLowerCase())
            || medico.nombreEspecialidad.toLowerCase().includes(buscarMedicos.toLowerCase())
        );
    });


    const busqueda = (term) => {
        setBuscarMedicos(term)
    }

    return (
        <>
            <ReservaBusqueda onSearch={busqueda} />
            {loading ? (
                <Spinner />
            ) : (
                <InfoMedicos medicoss={filtrarMedicos} />
            )}
            <Preefooter />
        </>
    );

}

export default EquipoMedico