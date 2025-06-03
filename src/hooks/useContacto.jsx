import { useState, useEffect } from "react";
import {
  validarEmailCompleto,
  validarTelefono,
  validarTextoNombre,
} from "@/lib/validations";

export function useContacto() {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    motivo: "",
    consulta: "",
    acepto: false,
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validarConsulta = (texto) => {
    if (!texto.trim()) return "Por favor escribe tu consulta";
    return null;
  };

  const validarMotivo = (valor) => {
    if (!valor) return "Selecciona un motivo de consulta";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {
      nombres: validarTextoNombre(form.nombres),
      apellidos: validarTextoNombre(form.apellidos),
      email: validarEmailCompleto(form.email.toLowerCase()),
      telefono: validarTelefono(form.telefono),
      motivo: validarMotivo(form.motivo),
      consulta: validarConsulta(form.consulta),
      acepto: form.acepto ? null : "Debes aceptar la cláusula de protección de datos",
    };

    setErrores(nuevosErrores);

    const hayErrores = Object.values(nuevosErrores).some((e) => e !== null);
    if (!hayErrores) {
      alert("Formulario enviado correctamente ✅");
      setForm({
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
        motivo: "",
        consulta: "",
        acepto: false,
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errores).length > 0) {
      const timeout = setTimeout(() => setErrores({}), 3000);
      return () => clearTimeout(timeout);
    }
  }, [errores]);

  return {
    form,
    errores,
    handleChange,
    handleSubmit,
    setForm,
  };
}
