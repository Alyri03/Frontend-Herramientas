import { useQuery } from "@tanstack/react-query";
import { obtenerServicios } from "@/services/servicioService";

export const useDatosServicios = () => {
  const {
    data: servicios = [],
    isLoading: cargandoServicios,
    error: errorServicios,
  } = useQuery({
    queryKey: ["servicios"],
    queryFn: obtenerServicios,
  });

  return {
    servicios,
    cargandoServicios,
    errorServicios,
  };
};
