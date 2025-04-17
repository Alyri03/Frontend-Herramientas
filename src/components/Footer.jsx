import Logo from "../assets/images/Logo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


const Footer = () => {
    return (
        <>
            <div className="md:hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    spaceBetween={0}
                >
                    <SwiperSlide>
                        <footer className="bg-[#1B669A] py-12 text-white h-[250px]">
                            <div className="container mx-auto px-2 flex justify-center">
                                <div className="flex flex-col justify-center items-center p-3">
                                    <a
                                        href="/"
                                        className="inline-block transform transition duration-300 hover:translate-x-2 rounded-2xl h-19 w-35 bg-no-repeat bg-center bg-white sm:flex items-center space-x-3 rtl:space-x-reverse"
                                        style={{ backgroundImage: `url('${Logo}')` }}
                                    ></a>
                                    <a
                                        href="/"
                                        className="flex flex-row outline-2 outline-offset-2 px-3 py-1 rounded-xl mt-5 transition delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z" />
                                        </svg>
                                        Agenda tu cita
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </SwiperSlide>


                    <SwiperSlide>
                        <footer className="bg-[#1B669A] py-12 text-white  h-[250px]">
                            <div className="container mx-auto px-2">
                                <div className="items-center md:flex justify-between">
                                    <div >
                                        <h2 className="text-3xl font-bold mb-4">Explorar</h2>
                                        <ul className="ml-6">
                                            <li><a href="#" className="inline-block transform transition duration-300 hover:translate-x-2">Quienes somos</a></li>
                                            <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Acreditaciones</a></li>
                                            <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Convenios de salud</a></li>
                                            <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Especialidades</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </SwiperSlide>


                    <SwiperSlide>
                        <footer className="bg-[#1B669A] py-12 text-white  h-[250px]">
                            <div className="container mx-auto px-2">
                                <div className="items-center md:flex justify-between">
                                    <div >
                                        <h2 className="text-3xl font-bold mb-4">Términos</h2>
                                        <ul className="ml-6">
                                            <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Flujo de reclamaciones</a></li>
                                            <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Condiciones de uso médico virtual</a></li>
                                            <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Canal de integridad</a></li>
                                            <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Términos y condiciones</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </SwiperSlide>

                    <SwiperSlide>
                        <footer className="bg-[#1B669A] py-12 text-white  h-[250px]">
                            <div className="container mx-auto px-2">
                                <div className="items-center md:flex justify-between">
                                    <div >
                                        <h2 className="text-3xl font-bold mb-4">Canales</h2>
                                        <ul className="flex justify-center">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/p/Cl%C3%ADnica-Regional-Ica-61563832985063/?locale=es_LA"
                                                    className="inline-block transform transition duration-300 hover:translate-x-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="54"
                                                        height="54"
                                                        viewBox="0 0 24 24"
                                                        style={{ fill: "white" }}
                                                    >
                                                        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </SwiperSlide>



                </Swiper>
            </div>



            <footer className="hidden md:block bg-[#1B669A] py-12" >

                <div className="container mx-auto px-2 text-white">

                    <div className="items-center md:flex justify-between">

                        <div className="flex flex-col justify-center items-center p-3">
                            <a href="/" className="inline-block transform transition duration-300 hover:translate-x-2 rounded-2xl h-19 w-35 bg-no-repeat bg-center bg-white sm:flex items-center space-x-3 rtl:space-x-reverse"
                                style={{ backgroundImage: `url('${Logo}')` }}>
                            </a>
                            <a href="/"
                                className="flex flex-row outline-2 outline-offset-2 px-3 py-1 rounded-xl mt-5 transition delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z" />
                                </svg>
                                Agenda tu cita
                            </a>
                        </div>


                        <div >
                            <h2 className="text-3xl font-bold mb-4">Explorar</h2>
                            <ul className="ml-6">
                                <li><a href="#" className="inline-block transform transition duration-300 hover:translate-x-2">Quienes somos</a></li>
                                <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Acreditaciones</a></li>
                                <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Convenios de salud</a></li>
                                <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Especialidades</a></li>
                            </ul>
                        </div>

                        <div >
                            <h2 className="text-3xl font-bold mb-4">Terminos</h2>
                            <ul className="ml-6">
                                <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Flujo de reclamaciones</a></li>
                                <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Condiciones de uso médico virtual</a></li>
                                <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Canal de integridad</a></li>
                                <li><a href="" className="inline-block transform transition duration-300 hover:translate-x-2">Términos y condiciones</a></li>
                            </ul>
                        </div>

                        <div >
                            <h2 className="text-3xl font-bold mb-4">Canales</h2>
                            <ul className="flex justify-center">
                                <li>
                                    <a
                                        href="https://www.facebook.com/p/Cl%C3%ADnica-Regional-Ica-61563832985063/?locale=es_LA"
                                        className="inline-block transform transition duration-300 hover:translate-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="54"
                                            height="54"
                                            viewBox="0 0 24 24"
                                            style={{ fill: "white" }}
                                        >
                                            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                                        </svg>
                                    </a>
                                </li>


                            </ul>
                        </div>

                    </div>

                </div>


            </footer>

        </>


    )
}

export default Footer;