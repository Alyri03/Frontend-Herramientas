import { useState, useMemo } from "react";

export const usePaginacion = (datos = [], elementosPorPagina = 5) => {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(datos.length / elementosPorPagina);

  const datosPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * elementosPorPagina;
    return datos.slice(inicio, inicio + elementosPorPagina);
  }, [datos, paginaActual, elementosPorPagina]);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return {
    datosPaginados,
    paginaActual,
    totalPaginas,
    cambiarPagina,
    setPaginaActual, 
  };
};