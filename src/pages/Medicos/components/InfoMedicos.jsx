import CardMedico from "./CardMedico"

const InfoMedicos = ({ medicoss }) => {

    return (<>
        <section className="pt-10 pb-10">
            <div className="flex flex-wrap justify-evenly container m-auto sm:gap-10 gap-7">
                {medicoss.map((doctores) => (
                    <CardMedico
                        key={doctores.id}
                        especialidad={doctores.especialidad}
                        nombre={doctores.nombre}
                        cmp={doctores.CMP}
                        img={doctores.img}
                    />
                ))}
            </div>
        </section>

    </>)
}

export default InfoMedicos