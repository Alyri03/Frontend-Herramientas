import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import EncabezadoEspecialidad from "./components/EmcabezadoEspecialidades";
import EspecialistaCard from "./components/EspecialistasCard";
import Preefooter from "../../components/Preefooter";
import ImagenDoctorGenerica from '../../assets/images/ImagenDoctorGenerica.jpg';

export default function DetalleEspecialidades() {
  const { id } = useParams(); // ID desde la URL
  const [especialidad, setEspecialidad] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEspecialidad = async () => {
      try {
        const response = await axios.get(`https://backend-dev-desarrollo.up.railway.app/api/especialidades/${id}`);
        setEspecialidad(response.data);
      } catch (error) {
        console.error("Error al obtener la especialidad:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEspecialidad();
  }, [id]);

  // Datos de prueba para los especialistas 
  const especialistas = [
    {
      id: 1,
      nombre: "Dr. Martínez Quijandría Luis",
      titulo: "CARDIÓLOGO",
      imagen: ImagenDoctorGenerica,
    },
    {
      id: 2,
      nombre: "Dra. Fernández Ayala Mariana",
      titulo: "CARDIÓLOGA",
      imagen: ImagenDoctorGenerica,
    },
    {
      id: 3,
      nombre: "Dr. Soto Vargas Manuel",
      titulo: "CARDIÓLOGO",
      imagen: ImagenDoctorGenerica,
    },
    {
      id: 4,
      nombre: "Dra. Rojas Inostroza Paola",
      titulo: "CARDIÓLOGA",
      imagen: ImagenDoctorGenerica,
    },
  ];

  if (loading) return <p className="text-center py-10">Cargando...</p>;
  if (!especialidad) return <p className="text-center text-red-500 py-10">Especialidad no encontrada</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Encabezado de la especialidad (dinámico) */}
      <section className="mb-16">
        <EncabezadoEspecialidad
          titulo={especialidad.nombre}
          descripcion={especialidad.descripcion}
          imagenSrc={especialidad.imagen}
        />
      </section>

      {/* Especialistas (aún no conectados a API) */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Los especialistas en {especialidad.nombre?.toLowerCase()}
        </h2>

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

      <Preefooter />
    </div>
  );
}
