import CardMedico from "./CardMedico"

const InfoMedicos = ({ medicoss }) => {

    return (<>
        <section className="pt-10 pb-10" data-aos="fade-up">
            <div className="flex flex-wrap justify-evenly container m-auto sm:gap-9 gap-7">
                {medicoss.map((doctores, idx) => (
                    <CardMedico
                        key={idx}
                        // especialidad={doctores.especialidad}
                        nombre={doctores.nombres}
                        cmp={doctores.numeroColegiatura}
                        id={doctores.id}
                    />
                ))}
            </div>
        </section>
    </>)
}

export default InfoMedicos