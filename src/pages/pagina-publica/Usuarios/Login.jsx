import { useContext, useState } from 'react';
import loginImg from '../../../assets/images/login.png';
import { loginRequest } from '@/services/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/authContext';
import Spinner from '@/components/Spinner'; // ✅ IMPORTADO

export const Login = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setLoading(true);

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const resLogin = await loginRequest(email, password);
            login(resLogin);
            const role = resLogin?.role;

            if (role === "PACIENTE") {
                navigate("/intranet/paciente");
            } else if (role === "MEDICO") {
                navigate("/intranet/medico");
            } else if (role === "RECEPCIONISTA") {
                navigate("/intranet/recepcionista"); 
            } else if (role === "ADMINISTRADOR") {
                navigate("/intranet/admin/usuarios"); 
            } else {
                navigate("/404");
            }


        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex flex-col md:flex-row h-screen w-full bg-white">
            {/* Ilustración izquierda */}
            <div className="hidden md:flex w-1/2 bg-[#ffffff] items-start justify-center pt-10">
                <div className="bg-[#e4e9f5] rounded-3xl w-[740px] h-[92%] flex items-end justify-center overflow-hidden">
                    <img
                        src={loginImg}
                        alt="Login Illustration"
                        className="w-[99%] object-contain mb-0"
                    />
                </div>
            </div>

            {/* Formulario o Spinner */}
            <div className="flex w-full md:w-[50%] items-center justify-center px-4 sm:px-12 min-h-screen">
                {loading ? (
                    <Spinner size={10} /> // ✅ Spinner mientras se carga
                ) : (
                    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
                        <h1 className="text-4xl font-bold text-center">Inicia sesión</h1>

                        <div>
                            <p className="font-semibold mb-2">Ingresa tus datos</p>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="Correo Electrónico"
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F71A1]"
                            />
                        </div>

                        <div>
                            <input
                                required
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F71A1]"
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm">* Credenciales incorrectas</p>
                        )}

                        <div className="flex justify-between items-center text-sm text-gray-700">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Recuérdame
                            </label>
                            <a href="#" className="text-[#2F71A1] font-medium">
                                Olvide mi contraseña
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#2F71A1] text-white py-2 rounded-full font-semibold hover:bg-[#1B4F73] transition"
                        >
                            Ingresa
                        </button>

                        <hr />

                        <p className="text-center text-sm">
                            ¿No tienes una cuenta?{' '}
                            <a href="/registro" className="text-[#2F71A1] font-semibold">
                                Regístrate aquí
                            </a>
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
};
