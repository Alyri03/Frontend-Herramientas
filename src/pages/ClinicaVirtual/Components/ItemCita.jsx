import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ItemCita({ doctor, specialty, date, time, status }) {
  return (
    <div className="p-4 border-b border-[#e4e4e4] last:border-b-0 hover:bg-slate-50 transition-colors">
      {/* Scroll horizontal si no cabe */}
      <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
        {/* Icono */}
        <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faUser} className="text-slate-500 text-xl" />
        </div>

        {/* Info del doctor */}
        <div className="min-w-[150px] flex-shrink-0">
          <h4 className="font-medium text-slate-900">{doctor}</h4>
          <p className="text-sm text-slate-500">{specialty}</p>
        </div>

        {/* Fecha y hora */}
        <div className="text-sm flex flex-col text-slate-900 flex-shrink-0 min-w-[120px]">
          <span>{date}</span>
          <span className="text-slate-500">{time}</span>
        </div>

        {/* Estado */}
        <div className="ml-auto flex-shrink-0">
          <span
            className={`
              inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
              ${
                status === "confirmed"
                  ? "bg-green-50 text-green-700"
                  : status === "pending"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-slate-100 text-slate-700"
              }
            `}
          >
            {status === "confirmed"
              ? "Confirmada"
              : status === "pending"
              ? "Pendiente"
              : "Cancelada"}
          </span>
        </div>
      </div>
    </div>
  );
}
