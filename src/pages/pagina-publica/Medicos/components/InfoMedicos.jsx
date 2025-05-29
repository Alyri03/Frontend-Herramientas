import CardMedico from "./CardMedico"

const InfoMedicos = ({ medicoss }) => {

    return (<>
        <section className="pt-10 pb-10" data-aos="fade-up">
            <div className="flex flex-wrap justify-evenly container m-auto sm:gap-9 gap-7">
                {medicoss.map((doctores, idx) => (
                    <CardMedico
                        key={idx}
                        especialidad={doctores.nombreEspecialidad}
                        nombre={doctores.nombreMedico}
                        codigo={doctores.numeroColegiatura != null ? doctores.numeroColegiatura : doctores.numeroRNE }
                        id={doctores.medicoId}
                    />
                ))}
            </div>
        </section>
    </>)
}

export default InfoMedicos