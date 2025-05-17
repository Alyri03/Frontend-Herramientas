import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";

export default function ItemsCita({ nombre, especialidad, fecha, hora, estado }) {
  const estadoVariant = estado.toLowerCase(); // confirmada, pendiente, cancelada

  return (
    <div className="w-full flex justify-between items-center px-3 sm:px-4 my-0 h-[72px] sm:h-[80px] border rounded-xl last:border-b-2 border-gray-200 text-sm sm:text-base">
      
      {/* Izquierda: icono + nombre */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="bg-blue-100 text-blue-600 p-2.5 sm:p-3 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faUserDoctor} className="w-4 h-4" />
        </div>
        <div className="leading-tight">
          <p className="font-semibold text-xs sm:text-sm">{nombre}</p>
          <p className="text-xs sm:text-sm text-muted-foreground">{especialidad}</p>
        </div>
      </div>

      {/* Derecha: fecha, hora, estado */}
      <div className="flex items-center gap-2 sm:gap-4 text-right leading-tight">
        <div className="min-w-[110px] sm:min-w-[130px]">
          <p className="text-xs sm:text-sm">{fecha}</p>
          <p className="text-xs sm:text-sm text-muted-foreground">{hora}</p>
        </div>
        <Badge variant={estadoVariant} className="text-[10px] sm:text-xs px-2 py-0.5">
          {estado}
        </Badge>
      </div>
    </div>
  );
}
