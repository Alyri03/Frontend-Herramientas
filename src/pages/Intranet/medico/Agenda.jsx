import { useState } from "react"
import { AgendaContenido } from "./components/AgendaContenido";



const paciente = [
    { id: 1, fecha: '22 de mayo de 2025', nombre: "Maria Lopez", hora: "11:00 AM", estado: "Confirmada", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 2, fecha: '12 de mayo de 2025', nombre: "Carlos Sanchez", hora: "12:00 PM", estado: "Pendiente", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 3, fecha: '1 de mayo de 2025', nombre: "Ana Torres", hora: "01:00 PM", estado: "Pendiente", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 4, fecha: '14 de mayo de 2025', nombre: "Luis Garcia", hora: "02:00 PM", estado: "Confirmada", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 5, fecha: '22 de mayo de 2025', nombre: "Martha Lopez", hora: "11:00 AM", estado: "Confirmada", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 6, fecha: '22 de mayo de 2025', nombre: "Lisa Lopez", hora: "11:00 AM", estado: "Confirmada", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 7, fecha: '12 de mayo de 2025', nombre: "Carlos Sanchez", hora: "12:00 PM", estado: "Pendiente", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 8, fecha: '1 de mayo de 2025', nombre: "Jenifer Torres", hora: "01:00 PM", estado: "Pendiente", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 9, fecha: '14 de mayo de 2025', nombre: "Luis Garcia", hora: "02:00 PM", estado: "Confirmada", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },
    { id: 10, fecha: '22 de mayo de 2025', nombre: "Luhana Lopez", hora: "11:00 AM", estado: "Confirmada", especialidad: "Cardiologia", ubicacion: 'Consultorio 105, Sede Central', nota: 'Primera consulta por dolor en el pecho y dificultad para respirar.' },

];

const Agenda = () => {

    const [date, setDate] = useState(null)


    const [filterOptions, setFilterOptions] = useState([{
        estado: 'Todos los estados',
        visible: true
    },
    {
        estado: 'Pendiente',
        visible: false
    },
    {
        estado: 'Confirmada',
        visible: false
    },
    {
        estado: 'Cancelada',
        visible: false

    },
    {
        estado: 'Atendida',
        visible: false
    }])

    return (
        <>
            <AgendaContenido
                paciente={paciente}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                date={date}
                setDate={setDate} />

        </>
    )
}

export default Agenda