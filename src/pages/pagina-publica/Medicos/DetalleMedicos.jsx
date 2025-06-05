import { useParams } from "react-router-dom";
import { useDatosMedico } from "@/hooks/useDatosMedico";
import ImagenDoctorGenerica from "@/assets/images/ImagenDoctorGenerica.jpg";
import Spinner from "@/components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DetalleMedico = () => {
  const { id } = useParams();
  const { medico, especialidad, cargandoMedico, errorMedico } = useDatosMedico(id);

  if (cargandoMedico) return <Spinner />;
  if (!medico || errorMedico) {
    return (
      <p className="text-center text-red-600 mt-10">
        No se encontró información del médico.
      </p>
    );
  }

  return (
    <section className="lg:pt-5 pt-1 lg:pb-5 pb-1 xl:p-5 lg:p-3">
      {/* Imagen y botones */}
      <div className="lg:flex justify-center align-center gap-10">
        <div className="flex flex-col justify-center items-center relative h-auto 2xl:w-[800px] xl:w-[700px] lg:w-[600px] lg:p-0 sm:p-10 p-5" data-aos="fade-right">
          <img
            src={medico.imagen || ImagenDoctorGenerica}
            alt="doctor"
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 w-full flex justify-between items-center border border-stone-200 bg-white border-t rounded-t-3xl sm:px-5 px-3 sm:py-3 py-2">
            <Link to="/medicos-equipo" className="flex items-center text-blue-900 font-medium">
              <FontAwesomeIcon icon={faLongArrowLeft} className="mr-2" />
              <p className="lg:text-lg md:text-md sm:text-sm text-[13px]">Volver al listado</p>
            </Link>
            <Link to="#" className="bg-cyan-700 text-white rounded-full w-30 h-7 flex justify-center items-center font-semibold hover:bg-cyan-800 text-sm">
              Reservar Cita
            </Link>
          </div>
        </div>

        {/* Información del médico */}
        <div className="2xl:w-[750px] xl:w-[650px] lg:w-[550px] h-auto p-5" data-aos="fade-left">
          <p className="text-2xl font-bold">Dr. {medico.nombres} {medico.apellidos}</p>
          <div className="flex gap-20 pt-2 pb-2 text-gray-400">
            <p className="text-md">CMP: {medico.numeroColegiatura}</p>
            {medico.numeroRNE && <p className="text-md">RNE: {medico.numeroRNE}</p>}
          </div>

          <p className="text-xl font-bold pt-4">Especialidades</p>
          <p className="bg-blue-100 rounded-full px-4 py-1 w-fit font-semibold mt-2 text-sm">
            {especialidad}
          </p>

          <p className="text-xl font-bold pt-4">Sobre mí</p>
          <p className="text-sm pt-2">{medico.descripcion || "Este médico aún no ha registrado una descripción personalizada."}</p>
        </div>
      </div>
    </section>
  );
};

export default DetalleMedico;
