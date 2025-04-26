import { useState } from "react";
import Preefooter from "../../components/Preefooter"
import InfoMedicos from "./components/InfoMedicos"
import ReservaBusqueda from "./components/ReservaBusqueda"

const EquipoMedico = () => {
    const [buscarMedicos, setBuscarMedicos] = useState("");

    const medicos = [
        { id: 1, nombre: "Dr. Martinez Quijandria Luis", especialidad: "Cardiología", CMP: "55124", img: "https://www.clinicauandes.cl/images/default-source/default-album/medicos/l/dr-pablo_llorens_odontologia_398x263.webp?sfvrsn=432e83e5_3"},
        { id: 2, nombre: "Dra. Ramírez Soto Ana", especialidad: "Pediatría", CMP: "44120" , img: "https://previews.123rf.com/images/lacheev/lacheev2101/lacheev210100305/161788245-personal-de-perfil-feliz-doctora-terapeuta-m%C3%A9dico-general-mirando-la-c%C3%A1mara-de-pie-en-el-hospital.jpg"},
        { id: 3, nombre: "Dr. Herrera Díaz Carlos", especialidad: "Dermatología", CMP: "38951" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2kOSRJyIgPq-8tpdG2vpYQYwzfct3Gi6DA&s"},
        { id: 4, nombre: "Dra. Mendoza Paredes Sofía", especialidad: "Ginecología", CMP: "47285" , img: "https://previews.123rf.com/images/fizkes/fizkes2012/fizkes201201245/160815196-imagen-de-perfil-de-una-joven-doctora-especialista-capaz-y-segura-de-s%C3%AD-misma-que-participa-en-un.jpg"},
        { id: 5, nombre: "Dr. Torres León Ricardo", especialidad: "Neurología", CMP: "50873", img: "https://studikard.com/wp-content/uploads/2021/02/doctor-perfil.jpg" },
        { id: 6, nombre: "Dra. Villanueva Ríos Marta", especialidad: "Oftalmología", CMP: "49217" , img: "https://img.freepik.com/fotos-gratis/mulher-medica-vestindo-jaleco-com-estetoscopio-isolado_1303-29791.jpg"},
        { id: 7, nombre: "Dr. Gutiérrez Salas Jorge", especialidad: "Ortopedia", CMP: "46502", img: "https://img.freepik.com/foto-gratis/doctor-barbudo-gafas_23-2147896187.jpg?semt=ais_hybrid&w=740" },
        { id: 8, nombre: "Dra. Chávez Meza Liliana", especialidad: "Endocrinología", CMP: "47896", img: "https://plus.unsplash.com/premium_photo-1667520580687-a85c9080a9bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { id: 9, nombre: "Dr. Peña Morales Andrés", especialidad: "Psiquiatría", CMP: "50123" , img: "https://egresados.cayetano.edu.pe/wp-content/uploads/sites/36/2024/11/egresados-cayetano-angelo-gaffo-perfil.png"},
        { id: 10, nombre: "Dra. Vargas Lucero Carmen", especialidad: "Gastroenterología", CMP: "48751", img: "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww" },
        { id: 11, nombre: "Dr. Silva Cuellar Mario", especialidad: "Urología", CMP: "47987", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQI691_8YwA0EIfsF8amMhcux15bjteOKZg&s" },
        { id: 12, nombre: "Dra. Fuentes Rojas Paula", especialidad: "Reumatología", CMP: "46612" , img: "https://static.vecteezy.com/system/resources/previews/004/520/002/large_2x/portrait-of-beautiful-female-doctor-of-asian-ethnicity-in-uniform-with-stethoscope-smiling-and-looking-at-the-camera-in-hospital-s-clinic-one-person-who-has-expertise-in-professional-treatment-free-photo.jpg"},
        { id: 13, nombre: "Dr. Delgado Ponce Álvaro", especialidad: "Oncología", CMP: "49534", img: "https://eldoctor.pe/app/images/medico/perfil/imagen-medico.20200901171053.jpg" },
        { id: 14, nombre: "Dra. Cabrera Torres Fiorella", especialidad: "Otorrinolaringología", CMP: "48845" , img: "https://img.freepik.com/foto-gratis/cerrar-doctor-preparandose-trabajo_23-2149152500.jpg"},
        { id: 15, nombre: "Dr. Núñez Salazar Bruno", especialidad: "Psicología", CMP: "46231" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V4okpPIJva_SZWp2Xz9lE71Y47GjXHOqFg&s"},
        { id: 16, nombre: "Dra. Palacios Guerra Andrea", especialidad: "Nefrología", CMP: "45320" , img: "https://staticnew-prod.topdoctors.com.co/provider/810328/image/profile/large/beatriz-cuervo-suarez-1734989048"},
        { id: 17, nombre: "Dr. Ríos Castro Sebastián", especialidad: "Traumatología", CMP: "51024" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t0cxEvKtYNW8CahLL_MggsU-qJ30NUvTaA&s"},
        { id: 18, nombre: "Dra. Soto Díaz Milagros", especialidad: "Infectología", CMP: "47563" , img: "https://img.freepik.com/fotos-premium/retrato-confianza-sonrisa-radiante-dentuda-calificado-medico-inteligente-inteligente-experimentado-ropa-formal-blanca-que-esta-pie-brazos-cruzados-cruzados-aislado-sobre-fondo-gris_432566-1503.jpg"},
        { id: 19, nombre: "Dr. López Rodríguez Felipe", especialidad: "Alergología", CMP: "52134" , img: "https://jlpradosc.com/wp-content/uploads/2022/10/doctor-perfil.jpg"},
        { id: 20, nombre: "Dra. González Ávila Patricia", especialidad: "Neumología", CMP: "50928" , img: "https://thumbs.dreamstime.com/b/la-enfermera-adentro-friega-103558181.jpg"}
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