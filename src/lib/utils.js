import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Unifica clases tailwind correctamente
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Convierte "NO_ASISTIO" → "No Asistio"
 */
export function formatearEstado(estado) {
  return estado
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

/**
 * Normaliza texto (minúsculas, sin tildes)
 */
export function normalizarTipo(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Filtra objetos por campos exactos.
 * Si el valor del filtro es null/undefined/empty, lo ignora.
 * Para fechas (campo 'fecha'), se compara en formato ISO "YYYY-MM-DD"
 */
export function filtrarPorCamposExactos(data, filtros = {}) {
  return data.filter((item) =>
    Object.entries(filtros).every(([campo, valor]) => {
      if (!valor) return true;

      const valorItem = item[campo];

      // Si es fecha, comparar exactamente
      if (campo === "fecha") {
        return valorItem === valor;
      }

      // Si no, normalizar para evitar errores por tildes/mayúsculas
      return normalizarTipo(valorItem) === normalizarTipo(valor);
    })
  );
}

/**
 * Convierte una fecha ISO "2025-04-24" a "Jueves, 24 de Abril"
 */
export function formatearFechaISO(fechaISO) {
  if (!fechaISO) return "";

  // Partimos fecha como string para evitar shift de zona horaria
  const [year, month, day] = fechaISO.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day)); // MES -1

  const raw = new Intl.DateTimeFormat("es-PE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);

  return raw
    .split(" ")
    .map((word) =>
      word === "de"
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}
