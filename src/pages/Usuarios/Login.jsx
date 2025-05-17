import { useContext, useState } from 'react'
import login from '../../assets/images/login.png'
import { loginRequest } from '../../services/Login'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';

export const Login = () => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError(false)
        setLoading(true)

        const email = e.target.email.value
        const password = e.target.password.value

        try {
            const resLogin = await loginRequest(email, password);
            navigate("/")
            setUser(resLogin)
            console.log(resLogin)
        } catch (error) {
            console.error('Error del servidor')
            setError(true)
        } finally {
            setLoading(false)
        }
    }



    return (
        <article className="flex flex-col md:flex-row items-center justify-center h-full w-full ">

            <div className="hidden md:block w-1/2">
                <img src={login} className='object-contain w-full h-dvh' />

            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full md:w-1/2  p-8 justify-center text-center'>


                <h1 className='text-5xl font-bold mb-12 '>Inicia sesion</h1>

                <p className='font-semibold text-left text-2xl'>Ingresa tus datos</p>

                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
                    <input required type="text" name="email" id="email" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Correo electrónico" />
                </div>

                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
                    <input required type="text" name="password" id="password" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Contraseña" />
                </div>

                <span className={`${error ? 'block' : 'hidden'}`}>* Credenciales incorrectas</span>

                <div className='flex flex-col sm:flex-row gap-4 items-center justify-between'>

                    <label className='flex gap-2 items-center'>
                        <input type="checkbox" />
                        <span>Recuerdame</span>
                    </label>

                    <a href="" className='text-[#2F71A1] font-bold'>Olvide mi contraseña</a>
                </div>


                <button
                    type='submit'
                    className=" text-white bg-[#2F71A1] mt-3 md:w-auto pl-7 outline-2 outline-offset-2 px-7 py-2 rounded-xl transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 "
                    disabled={loading}
                >
                    {loading ? 'Cargando...' : 'Ingresar'}
                </button>
                <hr />

                <div className='flex gap-4 justify-center'>
                    <p>
                        ¿No tienes una cuenta?
                    </p>

                    <a href="/registro" className='text-[#2F71A1] font-bold'>Registrate aqui</a>
                </div>



            </form>



        </article>
    )
}