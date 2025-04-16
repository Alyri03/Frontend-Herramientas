import { useState } from "react";
import Logo from "../assets/images/Logo.png";

const Header = () => {

  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);


  return (

    <nav className=" bg-white-900 w-full border-b-2 border-gray-200 mx-auto md:w-auto ">

      <div className="w-full h-6" style={{ backgroundColor: "#1B669A" }}>

      </div>

      <div className=" bg-white-900 max-auto flex flex-wrap items-center justify-between mx-auto p-5">


      <div class="flex items-center md:hidden">
          <button onClick={() => setNav(!nav)} type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>

            <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <a href="/" className="hidden sm:flex items-center space-x-3 rtl:space-x-reverse h-19 w-auto">
          <img src={Logo} alt="" />
        </a>
        
        <div className={`${nav ? 'flex w-full mb-5' : 'hidden'} sm:items-stretch  w-full lg:block lg:w-auto`} id="navbar-default">

          <ul className="pl-7 sm:w-full font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md:dark:bg-white-900 dark:border-white-700">

            <li>
              <a href="/nosotros" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nosotros</a>
            </li>

            <li>
              <div className="relative group">
                <button onClick={() => setMenu(!menu)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Servicios
                  <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div className={`${menu ? "block" : "hidden"} group-hover:block absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-white-700 dark:divide-gray-600`} id="navbar-default">
                  <ul className="py-2 text-sm text-gray-700 dark:text-black-400" aria-labelledby="dropdownLargeButton">
                    <li >
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">Dashboard</a>
                    </li>
                    <li >
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">Settings</a>
                    </li>
                    <li >
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">Earnings</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>


            <li>
              <a href="" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Equipo médico</a>

            </li>

            <li>
              <a href="" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Especialidades</a>

            </li>



            <li>
              <a href="/Contactanos" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contactanos</a>

            </li>
          </ul>
        </div>

        <button className="sm:w-full pl-7 outline-2 outline-offset-2 px-7 py-1 rounded-xl transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 " style={{ color: "#1B669A" }}>
          <a href="">Mi clínica virtual</a>
        </button>
      </div>



    </nav>
  );
};

export default Header;
