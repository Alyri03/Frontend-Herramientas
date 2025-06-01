import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

const CitasDeHoy = () => {
  const appointments = [
    {
      name: "Juan Pérez",
      doctor: "Dr. Wilson",
      time: "09:00 AM",
      type: "Consulta",
      status: "confirmado",
    },
    {
      name: "María González",
      doctor: "Dr. Brown",
      time: "10:30 AM",
      type: "Seguimiento",
      status: "en-progreso",
    },
    {
      name: "Carlos Rodríguez",
      doctor: "Dr. Wilson",
      time: "11:15 AM",
      type: "Chequeo",
      status: "esperando",
    },
    {
      name: "Ana Martínez",
      doctor: "Dr. García",
      time: "02:00 PM",
      type: "Consulta",
      status: "confirmado",
    },
  ]

  const renderStatusBadge = (status) => {
    switch (status) {
      case "confirmado":
        return <span className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded-full">confirmado</span>
      case "en-progreso":
        return <span className="px-3 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded-full">en progreso</span>
      case "esperando":
        return <span className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">esperando</span>
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold">Citas de Hoy</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {appointments.map((appointment, index) => (
          <div key={index} className="p-6 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faUser} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{appointment.name}</h3>
                <p className="text-gray-600">{appointment.doctor}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
              <div className="text-right">
                <p className="font-bold">{appointment.time}</p>
                <p className="text-gray-600">{appointment.type}</p>
              </div>
              <div>{renderStatusBadge(appointment.status)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CitasDeHoy
