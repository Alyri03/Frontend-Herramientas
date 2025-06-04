import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerMedicoPorId } from "@/services/equipoMedicoService";
import ImagenDoctorGenerica from "@/assets/images/ImagenDoctorGenerica.jpg";
import Spinner from "@/components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { obtenerEspecialidadPorMedico } from "@/services/equipoMedicoService";

const DetalleMedico = () => {
  const { id } = useParams();
  const [medico, setMedico] = useState(null);
  const [especialidad, setEspecialidad] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const medicoData = await obtenerMedicoPorId(id);
        setMedico(medicoData);

        const especialidadData = await obtenerEspecialidadPorMedico(id);
        setEspecialidad(
          especialidadData?.nombreEspecialidad || "Especialidad no registrada"
        );
      } catch (error) {
        console.error("Error al cargar datos del médico:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!medico) {
    return (
      <p className="text-center text-red-600 mt-10">
        No se encontró información del médico.
      </p>
    );
  }

  return (
    <>
      <section className="lg:pt-5 pt-1 lg:pb-5 pb-1 xl:p-5 lg:p-3">
        <div className="lg:flex justify-center align-center gap-10">
          {/* Imagen | Nav */}
          <div
            className="flex flex-col justify-center items-center relative h-auto 2xl:w-[800px] xl:w-[700px] lg:w-[600px] lg:p-0 sm:p-10 p-5"
            data-aos="fade-right"
          >
            <img
              src={medico.imagen || ImagenDoctorGenerica}
              alt="doctor"
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 w-full flex justify-between items-center border border-stone-200 bg-white border-t rounded-t-3xl sm:px-5 px-3 sm:py-3 py-2">
              <Link
                to="/medicos-equipo"
                className="flex items-center text-blue-900 font-medium"
              >
                <FontAwesomeIcon icon={faLongArrowLeft} className="mr-2" />
                <p className="lg:text-lg md:text-md sm:text-sm text-[13px]">
                  Volver al listado
                </p>
              </Link>
              <Link
                to="#"
                className="bg-cyan-700 text-white rounded-full lg:w-45 md:w-40 sm:w-35 lg:h-10 md:h-9 sm:h-8 w-30 h-7 flex justify-center items-center font-semibold hover:bg-cyan-800 transition lg:text-lg md:text-md sm:text-sm text-[13px]"
              >
                Reservar Cita
              </Link>
            </div>
          </div>

          {/* Info Doctor */}
          <div
            className="2xl:w-[750px] xl:w-[650px] lg:w-[550px] h-auto lg:p-0 sm:pl-10 sm:pr-10 p-5"
            data-aos="fade-left"
          >
            <div className="flex flex-col">
              <p className="2xl:text-5xl xl:text-4xl sm:text-2xl xl:pt-2 sm:pt-1 text-2xl pt-1">
                <b>
                  Dr. {medico.nombres} {medico.apellidos}
                </b>
              </p>
              <div className="flex gap-20 2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1">
                <p className="2xl:text-2xl xl:text-lg sm:text-md text-md text-gray-400">
                  CMP: {medico.numeroColegiatura}
                </p>
                {medico.numeroRNE && (
                  <p className="2xl:text-2xl xl:text-lg sm:text-md text-md text-gray-400">
                    RNE: {medico.numeroRNE}
                  </p>
                )}
              </div>
            </div>

            {/* Especialidades */}
            <div className="2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1">
              <p className="2xl:text-3xl xl:text-2xl sm:text-md text-md">
                <b>Especialidades</b>
              </p>
              <div className="2xl:pt-3 xl:pt-2 sm:pt-1 pt-1">
                <p className="bg-blue-100 rounded-full flex justify-center items-center font-semibold 2xl:w-45 xl:w-45 lg:w-35 sm:w-30 2xl:h-10 xl:h-9 lg:h-7 2xl:text-lg xl:text-lg lg:text-md sm:text-sm text-sm w-30 h-7">
                  {especialidad}
                </p>
              </div>
            </div>

            {/* Sobre mí (solo texto de ejemplo) */}
            <div className="2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1">
              <p className="2xl:text-3xl xl:text-2xl sm:text-md text-md">
                <b>Sobre mí</b>
              </p>
              <p className="2xl:text-xl xl:text-lg sm:text-sm 2xl:pt-3 xl:pt-2 sm:pt-1 text-sm pt-1">
                {medico.descripcion ||
                  "Este médico aún no ha registrado una descripción personalizada."}
              </p>
            </div>

            {/* Horarios (ejemplo estático aún) */}
            <div className="2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1">
              <p className="2xl:text-3xl xl:text-2xl sm:text-md text-md">
                <b>Horarios</b>
              </p>
              <ul className="flex flex-col text-md">
                <li className="flex items-center border-b justify-between py-2">
                  <p>Martes</p>
                  <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center">
                    16:00 - 17:00
                  </p>
                </li>
                <li className="flex items-center border-b justify-between py-2">
                  <p>Miércoles</p>
                  <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center">
                    12:00 - 15:00
                  </p>
                </li>
              </ul>
            </div>

            <div className="2xl:text-lg xl:text-md sm:text-sm text-sm 2xl:pt-3 xl:pt-2 sm:pt-1 pt-1 text-gray-400 ">
              <p>
                *Los horarios de los médicos se encuentran sujetos a variaciones
                sin previo aviso
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default DetalleMedico;
