import { useQuery } from "@tanstack/react-query";
import obtenerMedico from "../services/doctorsListaService";

const UseDoctorLista = () => {
    return useQuery({
        queryKey: ['medicos'],  // clave única para el caché
        queryFn: obtenerMedico, // función que obtiene los datos
    });
}
export default UseDoctorLista;