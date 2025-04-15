import Logo from "../assets/images/Logo.png";

const Header = () => {

  return (
    <nav className="bg-white-600 w-full border-b-2 border-gray-200 mx-auto">
      <div className="w-full dark:bg-sky-600">
        s
      </div>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} alt="" className=" border-2 border-solid h-19 w-auto" />
        </a>



        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md:dark:bg-white-900 dark:border-white-700">
            <li>
              <a href="/nosotros" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nosotros</a>
            </li>

            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Servicios <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>

              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-black-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-gray-600 dark:hover:text-black">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-gray-600 dark:hover:text-black">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-gray-600 dark:hover:text-black">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-black-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Sign out</a>
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

        <button className="outline-2 outline-offset-2 px-7 py-1 rounded-xl" style={{ color: "#1B669A" }}>
          <a href="">Mi clínica virtual</a>
        </button>
      </div>



    </nav>
  );
};

export default Header;
