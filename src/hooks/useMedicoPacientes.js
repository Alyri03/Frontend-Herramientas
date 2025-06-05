import { useQuery } from "@tanstack/react-query"
import { obtenerPacientesPorMedicoId } from "../services/medicoPaciente"
import { medicosPorIdUsuario } from "../services/medicos"

export const useMedicoPacientes = (id = null) => {
    
    // const {
    //     data: medicoId,
    //     isLoading: cargandoIdMedico,
    //     error: errorIdMedico
    // } = useQuery({
    //     queryKey: ['MedicoId', id],
    //     queryFn: () => medicosPorIdUsuario(id),
    //     enabled: !!id
    // })

    const {
        data: medicoPacientes = [],
        isLoading: cargandoPacientesMedico,
        error: errorMedicoPacientes
    } = useQuery({
        queryKey: ['MedicoPacientes', 
            // medicoId
            id
        ],
        queryFn: () => obtenerPacientesPorMedicoId(
            // medicoId
            id
        ),
        enabled: !!id
    })

    return {
        medicoPacientes,
        cargandoPacientesMedico,
        errorMedicoPacientes
    }

}