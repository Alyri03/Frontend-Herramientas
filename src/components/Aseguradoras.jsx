import rimac from '../assets/images/1-rimac.png';
import pacifico from '../assets/images/2-pacifico.png';
import mapfre from '../assets/images/3-mapfre.png';
import positiva from '../assets/images/4-positiva.png';
import protecta from '../assets/images/4-protecta.svg';

const aseguradoras = [
    { nombre: 'RIMAC', logo: rimac },
    { nombre: 'Pacífico', logo: pacifico },
    { nombre: 'MAPFRE', logo: mapfre },
    { nombre: 'La Positiva', logo: positiva },
    { nombre: 'Protecta Security', logo: protecta },
];

const Aseguradoras = () => {
    return (
        <section className="py-14 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-gray-700 text-sm sm:text-base mb-10">
                    ¡Estás cubierto! Trabajamos con las compañías de seguro para brindarte la mejor atención y beneficios.
                    <br /> <span className="font-semibold">Tu salud es nuestra prioridad.</span>
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {aseguradoras.map((aseg, idx) => (
                        <div
                            key={idx}
                            className="bg-white px-6 py-4  border-gray-100 flex items-center justify-center h-[80px] w-full max-w-[160px]"
                        >
                            <img
                                src={aseg.logo}
                                alt={aseg.nombre}
                                className="object-contain h-full w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Aseguradoras;
