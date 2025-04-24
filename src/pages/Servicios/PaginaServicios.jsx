import React from "react";
import CardServicio from "./components/CardServicio";
import Preefooter from "../../components/Preefooter";
const servicios = [
    {
        id: 1,
        titulo: "Centro Quirúrgico",
        imagenUrl: "https://www.clinicapj.org.pe/store-imagenes/clinica/Servicios/Quirurgico/Cl__nica_0374.jpg",
        colSpan: "md:col-span-2",
        aspectRatio: "aspect-[2/1] md:aspect-[2/1]",
    },
    {
        id: 2,
        titulo: "Medicina física y rehabilitación",
        imagenUrl: "https://web.sisol.gob.pe/wp-content/uploads/2023/04/9-TERAPIA-FISICA-Y-REHABILITACION.jpg",
        aspectRatio: "aspect-[1/1] md:aspect-[1/1]",
    },
    {
        id: 3,
        titulo: "Atención Hospitalaria",
        imagenUrl: "https://www.esan.edu.pe/images/blog/2020/08/20/1500x844-flujo-pacientes.jpg",
    },
    {
        id: 4,
        titulo: "Emergencia adulta",
        imagenUrl: "https://cdn.sanity.io/images/1gm9mx7i/production/5498774875d711f9ce7c570834bbd761b4efb532-1060x424.jpg?w=1920&q=90&fit=max&auto=format",
    },
    {
        id: 5,
        titulo: "Emergencia pediátrica",
        imagenUrl: "https://www.insnsb.gob.pe/wp-content/uploads/2020/01/DSC_3027.jpg",
    },
    {
        id: 6,
        titulo: "Unidad de cuidados intensivos e intermedios",
        imagenUrl: "https://cdn.www.gob.pe/uploads/document/file/605980/uci.jpg",
    },
    {
        id: 7,
        titulo: "Laboratorio clínico",
        imagenUrl: "https://www.medvidasalud.com/wp-content/uploads/que-es-un-laboratorio-clinico-medvida-salud.webp",
    },
];
const PaginaServicios = () => {
    return (
        <div className="p-4 max-w-7xl mx-auto">
            <div className="mb-6 px-4 py-16 " data-aos="fade-down">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight text-left max-w-4xl mx-auto">
                    Contamos con una amplia
                    <br className="hidden sm:block" />
                    variedad de <span className="text-[#1B669A]">servicios médicos</span>.
                    <br className="hidden sm:block" />
                    Al alcance de tus necesidades
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {servicios.map((servicio) => (
                    <CardServicio key={servicio.id} servicio={servicio} />
                ))}
            </div>

            <Preefooter/>

        </div>
    );
};

export default PaginaServicios;