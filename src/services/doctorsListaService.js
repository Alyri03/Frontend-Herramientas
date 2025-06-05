import axiosInstance from "./axiosInstance";

const obtenerMedico = async () => {
  try {
    const [resMedicos, resHorarios] = await Promise.all([
      axiosInstance.get("/medico-especialidad"),
      axiosInstance.get(`/horario-bloques/medico/1`)
    ]);

    const medicos = resMedicos.data;
    const horarios = resHorarios.data;

    const doctoresTransformados = medicos.map((doc, index) => {

      const bloques = horarios.filter(
        (h) => h.disponibilidadId === doc.medicoId
      );

      const horarioTexto = bloques.length > 0
        ? `Lun-Jue, ${bloques[0].horaInicio.slice(0, 5)}-${bloques[bloques.length - 1].horaFin.slice(0, 5)}`
        : "Sin horario";

      return {
        nombreDoc: doc.nombreMedico,
        apellidoDoc: doc.apellidoDoc,
        genero: index % 2 === 0 ? "Masculino" : "Femenino",
        especialidad: doc.nombreEspecialidad,
        telefono: "(555) 123-4567",
        correo: "dr.wilson@clinicare.com",
        pacientes: 145,
        horario: horarioTexto,
        exp: 3,
        calificacion: "4.8",
        consultas: 23,
        monto: 150,
        num: `D${String(doc.medicoId).padStart(3, "0")}`
      };
    });

    return doctoresTransformados;
  } catch (error) {
    console.error("Error al obtener médicos con horario", error);
    throw error;
  }
};

export default obtenerMedico;