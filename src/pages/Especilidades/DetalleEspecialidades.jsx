import EncabezadoEspecialidad from "./components/EmcabezadoEspecialidades"
import EspecialistaCard from "./components/EspecialistasCard"
import Preefooter from "../../components/Preefooter";
import ImagenDoctorGenerica from '../../assets/images/ImagenDoctorGenerica.jpg'

export default function DetalleEspecialidades() {
  // Datos de la especialidad (podrían venir de una API o CMS)
  const especialidad = {
    titulo: "Cardiología",
    descripcion: [
      "Protege el motor de tu vida con nuestra especialidad en cardiología.",
      "Nuestro equipo de cardiólogos altamente capacitados está dedicado al cuidado de tu corazón. Ofrecemos diagnóstico preciso y tratamiento de enfermedades del corazón, desde la prevención de factores de riesgo hasta procedimientos avanzados, para mantener tu corazón fuerte y saludable de manera sostenible.",
    ],
    imagenSrc: "https://csjt.s3.us-east-2.amazonaws.com/media/web/especialidades/vista-previa/Cardiolog%C3%ADa.png",
  }

  const especialistas = [
    {
      id: 1,
      nombre: "Dr. Martínez Quijandría Luis",
      titulo: "CARDIÓLOGO",
      imagen: ImagenDoctorGenerica,
    },
    {
      id: 2,
      nombre: "Dr. Martínez Quijandría Luis",
      titulo: "CARDIÓLOGO",
      imagen: ImagenDoctorGenerica,
    },
    {
      id: 3,
      nombre: "Dr. Martínez Quijandría Luis",
      titulo: "CARDIÓLOGO",
      imagen: ImagenDoctorGenerica,
    },
    {
      id: 4,
      nombre: "Dr. Martínez Quijandría Luis",
      titulo: "CARDIÓLOGO",
      imagen: ImagenDoctorGenerica,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Sección de encabezado */}
      <section className="mb-16">
        <EncabezadoEspecialidad
          titulo={especialidad.titulo}
          descripcion={especialidad.descripcion}
          imagenSrc={especialidad.imagenSrc}
        />
      </section>

      {/* Sección de especialistas */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Los especialistas en cardiología</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {especialistas.map((especialista) => (
            <EspecialistaCard
              key={especialista.id}
              nombre={especialista.nombre}
              titulo={especialista.titulo}
              imagen={especialista.imagen}
            />
          ))}
        </div>
      </section>
      <Preefooter/>
    </div>
  )
}
