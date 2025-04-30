import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
// import ImagenDoctorGenerica from '../../../assets/images/ImagenDoctorGenerica.jpg'

const CardMedico = ({especialidad, nombre, cmp, img}) => {
    return (
        <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm w-70">
            <img src={img} alt="Doctor" className="w-full h-60 object-cover" />
            <div className="p-4 space-y-2">
                <p className="bg-blue-100 rounded-full px-5 w-min h-8 flex justify-center items-center font-semibold text-sm">
                    {especialidad}
                </p>
                <div>
                    <p className="font-bold text-gray-800">{nombre}</p>
                    <p className="text-gray-400 text-sm pt-2">CMP: {cmp}</p>
                </div>
                <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                    <p className='pr-2'><b>Conoce al médico</b></p>
                    <FontAwesomeIcon icon={faLongArrowRight} />
                </Link>
            </div>
        </div>
    )
}

export default CardMedico