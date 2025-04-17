import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DetalleMedico = () => {
    return(<>
        <section>
            <div className="flex w-full gap-5 container mx-auto" >
                <div className="flex flex-col bg-yellow-900 w-3xl justify-center items-center">
                    <div className="bg-yellow-400 h-full">
                       <img src="https://droscargaona.com/wp-content/uploads/Imagen-1.jpg" alt="doctor"/>
                    </div>
                    <div className="flex gap-5 bg-white w-full">
                        <div>
                            <FontAwesomeIcon icon={faLongArrowLeft}/>
                        </div>
                        <div>
                            <p>Volver al listado</p>
                        </div>
                        <div>
                            <p>Reservar Cita</p>
                        </div>
                    </div>
                </div>
                <div className='bg-yellow-600 w-[50%] h-full'>
                    <div>
                        <p><b>Dr Reyes Pérez, Alvaro Orlando</b></p>
                        <p>CMP: 55124</p>
                        <p>RNE: 032319</p>
                    </div>
                    <div>
                        <p><b>Especialidades</b></p>
                        <p>Cardiologia</p>
                    </div>
                    <div>
                        <p><b>Sobre mí</b></p>
                        <p>Soy miembro de La Sociedad Estadounidense de Cirujanos Plásticos. A lo largo de mi carrera en el campo de la cirugía plástica y estética, he participado en una amplia gama de actividades educativas y eventos científicos entre las cuales destacan:</p>
                        <ul>
                            <li>Anatomy of Aging Bitesized y Clinical Practice</li>
                            <li>Transplante facial de La Sociedad Estadounidense de Cirujanos Plásticos.</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>Formación</b></p>
                        <ul>
                            <li>Médico Cirujano de Novgorod State University. (2002-2008)</li>
                            <li>Cirujano Plástico, Estético y Reconstructivo de la Universidad de Ciencias Médicas de La Habana. (2013-2017)</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>Horarios</b></p>
                        <ul className="">
                            <li>
                                <p>Martes</p>
                                <p>16:00 - 17:00</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>Martes</p>
                                <p>16:00 - 17:00</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>*Los horarios de los médicos se encuentran sujetos a variaciones sin previo aviso</p>
                    </div>
                </div>
            </div>
            
        </section>
    </>)
}
export default DetalleMedico