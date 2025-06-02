import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCalendarDay, faDollarSign, faClock, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"

const EstadisticasPanel = () => {
  const stats = [
    {
      title: "Total Pacientes",
      value: "2,847",
      change: "+12% desde el mes pasado",
      isPositive: true,
      icon: faUser,
      iconColor: "text-blue-500",
    },
    {
      title: "Citas de Hoy",
      value: "24",
      change: "+3 desde el mes pasado",
      isPositive: true,
      icon: faCalendarDay,
      iconColor: "text-green-500",
    },
    {
      title: "Ingresos Mensuales",
      value: "$45,230",
      change: "+8% desde el mes pasado",
      isPositive: true,
      icon: faDollarSign,
      iconColor: "text-purple-500",
    },
    {
      title: "Tiempo Promedio de Espera",
      value: "12 min",
      change: "-2 min desde el mes pasado",
      isPositive: true,
      icon: faClock,
      iconColor: "text-orange-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-gray-600 font-medium">{stat.title}</h2>
            <FontAwesomeIcon icon={stat.icon} className={`${stat.iconColor} text-xl`} />
          </div>
          <div className="text-3xl font-bold mb-2">{stat.value}</div>
          <div className={`flex items-center ${stat.isPositive ? "text-green-500" : "text-red-500"}`}>
            <FontAwesomeIcon icon={stat.isPositive ? faArrowUp : faArrowDown} className="mr-1 text-xs" />
            <span className="text-sm">{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EstadisticasPanel
