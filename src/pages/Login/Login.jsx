import login from '../../assets/images/login.png'


export const Login = () => {
    return (
        <article className="flex flex-col md:flex-row items-center justify-center h-full w-full ">

            <div className="hidden md:block w-1/2">
                <img src={login} className='object-contain w-full h-dvh' />

            </div>

            <form className='flex flex-col gap-6 w-full md:w-1/2  p-8 justify-center text-center'>

                
                <h1 className='text-5xl font-bold mb-12 '>Inicia sesion</h1>

                <p className='font-semibold text-left text-2xl'>Ingresa tus datos</p>

                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
                    <input required type="text" name="email" id="email" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Correo electrónico" />
                </div>

                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
                    <input required type="text" name="password" id="password" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Contraseña" />
                </div>


                <div className='flex flex-col sm:flex-row gap-4 items-center justify-between'>

                    <label className='flex gap-2 items-center'>
                        <input type="checkbox" />
                        <span>Recuerdame</span>
                    </label>

                    <a href="" className='text-[#2F71A1] font-bold'>Olvide mi contraseña</a>
                </div>


                <button type='submit' className=" text-white bg-[#2F71A1] mt-3 md:w-auto pl-7 outline-2 outline-offset-2 px-7 py-2 rounded-xl transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                    Ingresar
                </button>
                <hr />

                <div className='flex gap-4 justify-center'>
                    <p>
                        ¿No tienes una cuenta?
                    </p>

                    <a href="/registrar" className='text-[#2F71A1] font-bold'>Registrate aqui</a>
                </div>



            </form>



        </article>
    )
}