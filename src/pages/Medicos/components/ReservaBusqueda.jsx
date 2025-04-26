import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ReservaBusqueda = ({ onSearch }) => {
    const [buscarMedicos, setBuscarMedicos] = useState("");

    const handleChange = (e) => {
        const value = e.target.value
        setBuscarMedicos(value)
        onSearch(value)
    }

    return (<>
        <section className="bg-sky-200 w-auto h-45 sm:h-55 md:h-65 flex flex-col items-center">
            <div className="flex flex-col items-center w-auto h-auto pt-10 sm:pt-15 md:pt-20">
                <p className="md:text-4xl sm:text-3xl text-2xl"><b>¡Hola!, Encuentra aquí a tu</b></p>
                <p className="md:text-4xl sm:text-3xl text-2xl"><b>médico y</b> <b className="text-cyan-800">reserva tu cita</b></p>
            </div>
            <div className="w-auto h-auto pt-7 sm:pt-10 md:pt-13">
                <div className="flex bg-stone-50 text-xs sm:text-sm md:text-base rounded-xl h-10" >
                    <div className="flex justify-center items-center w-10 h-10">
                        <FontAwesomeIcon icon={faSearch} className='' />
                    </div>
                    <div className="w-full h-full">
                        <input className="w-70 sm:w-100 md:w-130 h-full focus:outline-none bg-transparent pl-2" type="text" 
                        placeholder="Busca a tu medico o escribe la especialidad" onChange={handleChange} value={buscarMedicos} />
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default ReservaBusqueda