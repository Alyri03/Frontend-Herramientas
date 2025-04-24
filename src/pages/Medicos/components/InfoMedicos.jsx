import ImagenDoctorGenerica from '../../../assets/images/ImagenDoctorGenerica.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const InfoMedicos = () => {
    return (<>
        <section className="pt-10 pb-10">
            <div className="flex flex-wrap justify-around container m-auto gap-16">
                {/* Item1 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm">
                    <img src={ImagenDoctorGenerica} alt="Doctor" className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center font-semibold text-sm">
                            Cardiología
                        </p>
                        <div>
                            <p className="font-bold text-gray-800">Dr. Martinez Quijandria Luis</p>
                            <p className="text-gray-400 text-sm pt-2">CMP: 55124</p>
                        </div>

                        <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                            <p className='pr-2'><b>Conoce al médico</b></p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Item2 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm">
                    <img src={ImagenDoctorGenerica} alt="Doctor" className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center font-semibold text-sm">
                            Cardiología
                        </p>
                        <div>
                            <p className="font-bold text-gray-800">Dr. Martinez Quijandria Luis</p>
                            <p className="text-gray-400 text-sm pt-2">CMP: 55124</p>
                        </div>
                        <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                            <p className='pr-2'><b>Conoce al médico</b></p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Item3 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm">
                    <img src={ImagenDoctorGenerica} alt="Doctor" className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center font-semibold text-sm">
                            Cardiología
                        </p>
                        <div>
                            <p className="font-bold text-gray-800">Dr. Martinez Quijandria Luis</p>
                            <p className="text-gray-400 text-sm pt-2">CMP: 55124</p>
                        </div>
                        <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                            <p className='pr-2'><b>Conoce al médico</b></p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Item4 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm">
                    <img src={ImagenDoctorGenerica} alt="Doctor" className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center font-semibold text-sm">
                            Cardiología
                        </p>
                        <div>
                            <p className="font-bold text-gray-800">Dr. Martinez Quijandria Luis</p>
                            <p className="text-gray-400 text-sm pt-2">CMP: 55124</p>
                        </div>
                        <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                            <p className='pr-2'><b>Conoce al médico</b></p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Item5 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm">
                    <img src={ImagenDoctorGenerica} alt="Doctor" className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center font-semibold text-sm">
                            Cardiología
                        </p>
                        <div>
                            <p className="font-bold text-gray-800">Dr. Martinez Quijandria Luis</p>
                            <p className="text-gray-400 text-sm pt-2">CMP: 55124</p>
                        </div> 
                         <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                            <p className='pr-2'><b>Conoce al médico</b></p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Item6 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm">
                    <img src={ImagenDoctorGenerica} alt="Doctor" className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center font-semibold text-sm">
                            Cardiología
                        </p>
                        <div>
                            <p className="font-bold text-gray-800">Dr. Martinez Quijandria Luis</p>
                            <p className="text-gray-400 text-sm pt-2">CMP: 55124</p>
                        </div>
                        <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                            <p className='pr-2'><b>Conoce al médico</b></p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Item7 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm">
                    <img src={ImagenDoctorGenerica} alt="Doctor" className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center font-semibold text-sm">
                            Cardiología
                        </p>
                        <div>
                            <p className="font-bold text-gray-800">Dr. Martinez Quijandria Luis</p>
                            <p className="text-gray-400 text-sm pt-2">CMP: 55124</p>
                        </div>
                        <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                            <p className='pr-2'><b>Conoce al médico</b></p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* Item8 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm">
                    <img src={ImagenDoctorGenerica} alt="Doctor" className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center font-semibold text-sm">
                            Cardiología
                        </p>
                        <div>
                            <p className="font-bold text-gray-800">Dr. Martinez Quijandria Luis</p>
                            <p className="text-gray-400 text-sm pt-2">CMP: 55124</p>
                        </div>
                        <Link to="/detalle-medico" className="flex text-blue-600 justify-center items-center pt-1">
                            <p className='pr-2'><b>Conoce al médico</b></p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default InfoMedicos