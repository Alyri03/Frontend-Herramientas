import { useQuery } from "@tanstack/react-query"
import { obtenerPacientesPorMedicoId } from "../services/medicoPaciente"

export const useMedicoPacientes = (id = null) => {
    const {
        data: medicoPacientes = [],
        isLoading: cargandoPacientesMedico,
        error: errorMedicoPacientes
    } = useQuery({
        queryKey: ['MedicoPacientes', id],
        queryFn: () => obtenerPacientesPorMedicoId(id),
        enabled: !!id,

    })

    return {
        medicoPacientes,
        cargandoPacientesMedico,
        errorMedicoPacientes
    }

}