import { useState, useEffect, Suspense } from "react"
import { Link, useLocation, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChevronDown,
    faCalendar,
    faFileAlt,
    faBars,
    faTimes,
    faClipboardList,
    faBell,
    faSearch,
    faUser
} from "@fortawesome/free-solid-svg-icons"

export default function ClientLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [searchFocused, setSearchFocused] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-[#e4e4e4] shadow-sm z-10">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                        <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                    </button>
                    <span className="text-xl font-bold text-slate-800">Clínica ICA</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors relative">
                        <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                        <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-slate-500" />
                    </div>
                </div>
            </div>

            {/* Sidebar - Overlay móvil */}
            {sidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-200"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
          ${sidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"} 
          md:translate-x-0
          fixed md:sticky top-0 left-0 h-full z-40
          w-64 md:w-72 md:min-h-screen border-r border-[#e4e4e4] flex flex-col bg-white
          transition-all duration-300 ease-in-out
        `}
            >
                <div className="p-6 border-b border-[#e4e4e4] flex items-center justify-between">
                    <Link to="/" className="text-lg font-bold text-slate-800">
                        Clínica ICA
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                        <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
                    </button>
                </div>

                <div className="px-4 py-6">
                    <div className="relative mb-6">
                        <div
                            className={`absolute inset-y-0 left-3 flex items-center pointer-events-none transition-opacity duration-200 ${searchFocused ? "opacity-0" : "opacity-100"
                                }`}
                        >
                            <FontAwesomeIcon icon={faSearch} className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className={`w-full py-2 pl-10 pr-4 rounded-lg bg-slate-100 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 ${searchFocused ? "pl-4" : "pl-10"
                                }`}
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                        />
                    </div>

                    <div className="space-y-1">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider px-3 mb-2">Principal</p>
                        <NavItem to="/clinica-virtual/inicio" icon={faCalendar} label="Inicio" />
                        <NavItem to="/clinica-virtual/mis-citas" icon={faCalendar} label="Mis citas" />
                        <NavItem to="/clinica-virtual/resultados" icon={faClipboardList} label="Resultados" />
                        <NavItem to="/clinica-virtual/historial-clinico" icon={faFileAlt} label="Historial Clínico" />
                    </div>
                </div>

                <div className="mt-auto p-4 border-t border-[#e4e4e4]">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-medium">
                            LE
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-900 truncate">Luis Enrique</p>
                            <p className="text-xs text-slate-500 truncate">luis.enrique@email.com</p>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4 text-slate-400" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
                <header className="hidden md:flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-900">Clínica Regional</h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors relative">
                            <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-2 border rounded-full pl-2 pr-1 py-1 hover:bg-slate-50 transition-colors cursor-pointer">
                            <span className="text-sm font-medium">Mi Perfil</span>
                            <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-medium">
                                LE
                            </div>
                        </div>
                    </div>
                </header>

                {/* Aquí se renderiza la página según la ruta */}
                <Suspense fallback={<div>Loading...</div>}>
                    <main>
                        <Outlet />
                    </main>
                </Suspense>
            </div>
        </div>
    )
}

function NavItem({ icon, label, to }) {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <Link
            to={to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
        >
            <FontAwesomeIcon icon={icon} className={`h-5 w-5 ${isActive ? "text-blue-600" : "text-slate-500"}`} />
            <span>{label}</span>
            {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"></span>}
        </Link>
    )
}
