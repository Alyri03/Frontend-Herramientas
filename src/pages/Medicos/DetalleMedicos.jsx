import ImagenDoctorGenerica from '../../assets/images/ImagenDoctorGenerica.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DetalleMedico = () => {
    return (<>
        <section className='lg:pt-5 p-1 pb-10'>
            <div className="lg:flex justify-center align-center gap-10">
                {/* Imagen | Nav */}
                <div className="flex flex-col justify-center items-center relative h-auto 2xl:w-[800px] xl:w-[700px] lg:w-[600px] lg:p-0 sm:p-10 p-5">
                    <img src={ImagenDoctorGenerica} alt="doctor" className="w-full object-cover"/>
                    <div className="absolute bottom-0 w-full flex justify-between items-center border border-stone-200 bg-white border-t rounded-t-3xl sm:px-5 px-3 sm:py-3 py-2">
                        <a href="/equipo-medico" className="flex items-center text-blue-900 font-medium">
                            <FontAwesomeIcon icon={faLongArrowLeft} className="mr-2" />
                            <p className='lg:text-lg md:text-md sm:text-sm text-[13px]'>Volver al listado</p>
                        </a>
                        <a href="#" className="bg-cyan-700 text-white rounded-full lg:w-45 md:w-40 sm:w-35 lg:h-10 md:h-9 sm:h-8 w-30 h-7 flex justify-center items-center font-semibold hover:bg-cyan-800 transition lg:text-lg md:text-md sm:text-sm text-[13px]">
                            Reservar Cita
                        </a>
                    </div>
                </div>
                
                {/* Info Doctor */}
                <div className='2xl:w-[750px] xl:w-[650px] lg:w-[550px] h-auto lg:p-0 sm:pl-10 sm:pr-10 p-5'>
                    <div className='flex flex-col'>
                        <p className='2xl:text-5xl xl:text-4xl sm:text-2xl xl:pt-2 sm:pt-1 text-2xl pt-1'><b>Dr. Reyes Pérez, Alvaro Orlando</b></p>
                        <div className='flex gap-20 2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1'>
                            <p className='2xl:text-2xl xl:text-lg sm:text-md text-md text-gray-400'>CMP: 55124</p>
                            <p className='2xl:text-2xl xl:text-lg sm:text-md text-md text-gray-400'>RNE: 032319</p>
                        </div>
                    </div>
                    {/* Especialidades */}
                    <div className='2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1'>
                        <p className='2xl:text-3xl xl:text-2xl sm:text-md text-md'><b>Especialidades</b></p>
                        <div className='2xl:pt-3 xl:pt-2 sm:pt-1 pt-1'>
                            <p className="bg-blue-100 rounded-full flex justify-center items-center font-semibold 2xl:w-45 xl:w-45 lg:w-35 sm:w-30 2xl:h-10 xl:h-9 lg:h-7 2xl:text-lg xl:text-lg lg:text-md sm:text-sm text-sm w-30 h-7">
                                Cardiología
                            </p>
                        </div>
                    </div>
                    {/* Sobre mí */}
                    <div className='2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1'>
                        <p className='2xl:text-3xl xl:text-2xl sm:text-md text-md'><b>Sobre mí</b></p>
                        <p className='2xl:text-xl xl:text-lg sm:text-sm 2xl:pt-3 xl:pt-2 sm:pt-1 text-sm pt-1'>Soy miembro de La Sociedad Estadounidense de Cirujanos Plásticos. A lo largo de mi carrera en el campo de la cirugía plástica y estética, he participado en una amplia gama de actividades educativas y eventos científicos entre las cuales destacan:</p>
                        <ul className='2xl:text-xl xl:text-lg sm:text-sm 2xl:pt-3 xl:pt-2 sm:pt-1 text-sm pt-1 list-disc list-outside pl-10'>
                            <li>Anatomy of Aging Bitesized y Clinical Practice</li>
                            <li>Transplante facial de La Sociedad Estadounidense de Cirujanos Plásticos.</li>
                        </ul>
                    </div>
                    {/* Formación */}
                    <div className='2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1'>
                        <p className='2xl:text-3xl xl:text-2xl sm:text-md text-md'><b>Formación</b></p>
                        <ul className='2xl:text-xl xl:text-lg sm:text-sm text-sm 2xl:pt-3 xl:pt-2 sm:pt-1 pt-1 list-disc list-outside pl-10'>
                            <li>Médico Cirujano de Novgorod State University. (2002-2008)</li>
                            <li>Cirujano Plástico, Estético y Reconstructivo de la Universidad de Ciencias Médicas de La Habana. (2013-2017)</li>
                        </ul>
                    </div>
                    {/* Horarios */}
                    <div className='2xl:pt-3 xl:pt-2 sm:pt-1 2xl:pb-3 xl:pb-2 sm:pb-1 pt-1 pb-1'>
                        <p className='2xl:text-3xl xl:text-2xl sm:text-md text-md'><b>Horarios</b></p>
                        <ul className="flex flex-col text-md">
                            <li className='flex items-center border-b justify-between py-2'>
                                <p>Martes</p>
                                <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center">
                                    16:00 - 17:00
                                </p>
                            </li>
                        </ul>
                        <ul className="flex flex-col text-md">
                            <li className='flex items-center border-b justify-between py-2'>
                                <p>Miercoles</p>
                                <p className="bg-blue-100 rounded-full w-30 h-8 flex justify-center items-center">
                                    12:00 - 15:00
                                </p>
                            </li>
                        </ul>
                    </div>
                    {/* Aviso */}
                    <div className='2xl:text-lg xl:text-md sm:text-sm text-sm 2xl:pt-3 xl:pt-2 sm:pt-1 pt-1 text-gray-400 '>
                        <p>*Los horarios de los médicos se encuentran sujetos a variaciones sin previo aviso</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default DetalleMedico