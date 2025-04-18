import ImagenDoctorGenerica from '../../assets/images/ImagenDoctorGenerica.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DetalleMedico = () => {
    return (<>
        <section className='pt-10 pb-10'>
            <div className="flex justify-center gap-10">
                {/* Imagen | Nav */}
                <div className="flex flex-col w-3xl justify-center items-center relative">
                    <img src={ImagenDoctorGenerica} alt="doctor" className="w-full object-cover" />
                    <div className="absolute bottom-0 left-0 w-full flex justify-between items-center border border-stone-200 bg-white border-t rounded-t-3xl px-5 py-3 z-10">
                        <a href="/equipo-medico" className="flex items-center text-blue-900 font-medium">
                            <FontAwesomeIcon icon={faLongArrowLeft} className="mr-2" />
                            <p className='text-lg'>Volver al listado</p>
                        </a>
                        <a href="#" className="bg-cyan-700 text-white rounded-full w-45 h-10 flex justify-center items-center font-semibold hover:bg-cyan-800 transition text-lg">
                            Reservar Cita
                        </a>
                    </div>
                </div>

                {/* Info Doctor */}
                <div className='w-[45%] h-auto'>
                    <div className='flex flex-col'>
                        <p className='text-6xl pt-2'><b>Dr. Reyes Pérez, Alvaro Orlando</b></p>
                        <div className='flex gap-20 pt-3 pb-3'>
                            <p className='text-2xl text-gray-400'>CMP: 55124</p>
                            <p className='text-2xl text-gray-400'>RNE: 032319</p>
                        </div>
                    </div>
                    {/* Especialidades */}
                    <div className='pt-3 pb-3'>
                        <p className='text-3xl'><b>Especialidades</b></p>
                        <div className='pt-3'>
                            <p className="bg-blue-100 rounded-full w-45 h-10 flex justify-center items-center font-semibold text-lg">
                                Cardiología
                            </p>
                        </div>
                    </div>
                    {/* Sobre mí */}
                    <div className='pt-3 pb-3'>
                        <p className='text-3xl'><b>Sobre mí</b></p>
                        <p className='text-xl pt-3'>Soy miembro de La Sociedad Estadounidense de Cirujanos Plásticos. A lo largo de mi carrera en el campo de la cirugía plástica y estética, he participado en una amplia gama de actividades educativas y eventos científicos entre las cuales destacan:</p>
                        <ul className='text-xl pt-3 list-disc list-outside pl-10'>
                            <li>Anatomy of Aging Bitesized y Clinical Practice</li>
                            <li>Transplante facial de La Sociedad Estadounidense de Cirujanos Plásticos.</li>
                        </ul>
                    </div>
                    {/* Formación */}
                    <div className='pt-3 pb-3'>
                        <p className='text-3xl'><b>Formación</b></p>
                        <ul className='text-xl pt-3 list-disc list-outside pl-10'>
                            <li>Médico Cirujano de Novgorod State University. (2002-2008)</li>
                            <li>Cirujano Plástico, Estético y Reconstructivo de la Universidad de Ciencias Médicas de La Habana. (2013-2017)</li>
                        </ul>
                    </div>
                    {/* Horarios */}
                    <div className='pt-3 pb-3'>
                        <p className='text-3xl'><b>Horarios</b></p>
                        <ul className="flex flex-col">
                            <li className='flex items-center border-b justify-between py-2'>
                                <p className='text-md'>Martes</p>
                                <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center text-md">
                                    16:00 - 17:00
                                </p>
                            </li>
                        </ul>
                        <ul className="flex flex-col">
                            <li className='flex items-center border-b justify-between py-2'>
                                <p className='text-md'>Miercoles</p>
                                <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center text-md">
                                    12:00 - 15:00
                                </p>
                            </li>
                        </ul>
                    </div>
                    {/* Aviso */}
                    <div className='text-lg pt-3 text-gray-400'>
                        <p>*Los horarios de los médicos se encuentran sujetos a variaciones sin previo aviso</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default DetalleMedico