export function validarEmailCompleto(email) {
  if (!email.trim()) return "El correo es obligatorio";
  if (email.length < 5) return "Correo demasiado corto";
  if (email.length > 320) return "Correo demasiado largo";

  const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/;
  if (!regex.test(email)) return "Formato de correo inválido";

  return null;
}


export function validarTelefono(telefono) {
  const regex = /^[0-9]{9}$/;
  if (!telefono.trim()) return "El teléfono es obligatorio";
  if (!regex.test(telefono))
    return "El teléfono debe tener 9 dígitos numéricos";
  return null; // válido
}

export function validarTextoNombre(texto) {
  if (!texto.trim()) return "Este campo es obligatorio";

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/;

  if (!regex.test(texto))
    return "Solo se permiten letras y espacios (mínimo 2 caracteres)";
  return null; // válido
}
