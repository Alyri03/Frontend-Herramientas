import CardMedico from "./cardMedico"

const InfoMedicos = ({ medicoss }) => {

    return (<>
        <section className="pt-10 pb-10">
            <div className="flex flex-wrap justify-around container m-auto sm:gap-9 gap-7">
                {medicoss.map((doctores) => (
                    <CardMedico
                        key={doctores.id}
                        especialidad={doctores.especialidad}
                        nombre={doctores.nombre}
                        cmp={doctores.CMP}
                    />
                ))}
            </div>
        </section>

    </>)
}

export default InfoMedicos