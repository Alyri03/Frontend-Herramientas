import { useState } from "react";
import Preefooter from "../../components/Preefooter"
import InfoMedicos from "./components/InfoMedicos"
import ReservaBusqueda from "./components/ReservaBusqueda"

const EquipoMedico = () => {
    const [buscarMedicos, setBuscarMedicos] = useState("");

    const medicos = [
        { id: 1, nombre: "Dr. Martinez Quijandria Luis", especialidad: "Cardiología", CMP: "55124" },
        { id: 2, nombre: "Dra. Ramírez Soto Ana", especialidad: "Pediatría", CMP: "44120" },
        { id: 3, nombre: "Dr. Herrera Díaz Carlos", especialidad: "Dermatología", CMP: "38951" },
        { id: 4, nombre: "Dra. Mendoza Paredes Sofía", especialidad: "Ginecología", CMP: "47285" },
        { id: 5, nombre: "Dr. Torres León Ricardo", especialidad: "Neurología", CMP: "50873" },
        { id: 6, nombre: "Dra. Villanueva Ríos Marta", especialidad: "Oftalmología", CMP: "49217" },
        { id: 7, nombre: "Dr. Gutiérrez Salas Jorge", especialidad: "Ortopedia", CMP: "46502" },
        { id: 8, nombre: "Dra. Chávez Meza Liliana", especialidad: "Endocrinología", CMP: "47896" },
        { id: 9, nombre: "Dr. Peña Morales Andrés", especialidad: "Psiquiatría", CMP: "50123" },
        { id: 10, nombre: "Dra. Vargas Lucero Carmen", especialidad: "Gastroenterología", CMP: "48751" },
        { id: 11, nombre: "Dr. Silva Cuellar Mario", especialidad: "Urología", CMP: "47987" },
        { id: 12, nombre: "Dra. Fuentes Rojas Paula", especialidad: "Reumatología", CMP: "46612" },
        { id: 13, nombre: "Dr. Delgado Ponce Álvaro", especialidad: "Oncología", CMP: "49534" },
        { id: 14, nombre: "Dra. Cabrera Torres Fiorella", especialidad: "Otorrinolaringología", CMP: "48845" },
        { id: 15, nombre: "Dr. Núñez Salazar Bruno", especialidad: "Medicina Interna", CMP: "46231" },
        { id: 16, nombre: "Dra. Palacios Guerra Andrea", especialidad: "Nefrología", CMP: "45320" },
        { id: 17, nombre: "Dr. Ríos Castro Sebastián", especialidad: "Traumatología", CMP: "51024" },
        { id: 18, nombre: "Dra. Soto Díaz Milagros", especialidad: "Infectología", CMP: "47563" },
        { id: 19, nombre: "Dr. López Rodríguez Felipe", especialidad: "Alergología", CMP: "52134" },
        { id: 20, nombre: "Dra. González Ávila Patricia", especialidad: "Neumología", CMP: "50928" }
    ];

    const filtrarMedicos = medicos.filter((medico) => {
        return (
            medico.nombre.toLowerCase().includes(buscarMedicos.toLowerCase()) ||
            medico.especialidad.toLowerCase().includes(buscarMedicos.toLowerCase())
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