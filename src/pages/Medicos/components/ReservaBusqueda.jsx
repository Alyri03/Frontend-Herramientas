import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ReservaBusqueda = () => {
    return (<>
        <section className="bg-sky-200 w-auto h-55  flex flex-col items-center">
            <div className="flex flex-col items-center w-auto h-auto pt-15">
                <p className="text-2xl"><b>¡Hola!, Encuentra aquí a tu</b></p> 
                <p className="text-2xl"><b>médico y</b> <b className="text-cyan-800">reserva tu cita</b></p>
            </div>
            <div className="w-auto h-auto pt-10">
                <div className="flex bg-stone-50 text-xs rounded-xl h-10" >
                    <div className="flex justify-center items-center w-10 h-10">
                        <FontAwesomeIcon icon={faSearch} className=''/> 
                    </div>
                    <div className="w-full h-full">
                        <input className="min-w-2xs h-full focus:outline-none bg-transparent" type="text" placeholder=" Busca a tu medico o escribe la especialidad"/>  
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default ReservaBusqueda