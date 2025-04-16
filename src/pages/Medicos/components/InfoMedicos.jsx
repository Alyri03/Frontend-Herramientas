import ImagenDoctorGenerica from '../../../assets/images/ImagenDoctorGenerica.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

const InfoMedicos = () => {
    return (<>
        <section className="pt-10">
            <div className="flex container w-full h-auto bg-cyan-500">
                {/* Item1 */}
                <div className="w-75 h-auto bg-yellow-500">
                    
                        <div className="relative">
                            <img src={ImagenDoctorGenerica} alt="doctor" className='rounded-4xl'/>
                        </div>
                        <div className="flex flex-col rounded-4xl bg-stone-50 p-5">
                            <div className='rounded-2xl bg-sky-100 p-2 w-33 text-center'>
                                <p><b>Cardiologia</b></p>
                            </div>
                            <div className='pt-2'>
                                <p><b>Dr. Martinez Quijandria Luis</b></p>
                                <p className='pt-2 text-stone-400'>CMP: 55124</p>
                            </div>
                            <div className='flex pt-5 justify-center'>
                                <div className='flex justify-center items-center'>
                                    <a href="" className='text-blue-800'>
                                        <b className='pr-2'>Conoce al medico</b>
                                        <FontAwesomeIcon icon={faLongArrowRight} className='text-blue-800'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </section>
    </>)
}

export default InfoMedicos