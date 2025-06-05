import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { usePaciente } from "../hooks/usePaciente";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ItemsCita from "../components/ItemsCita";

import bienvenidaImg from "@/assets/images/doctora.png";
import resultadosImg from "@/assets/images/ubicanos_footer.png";
import soporteImg from "@/assets/images/central_footer.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function InicioPaciente() {
  const { user } = useContext(AuthContext);
  const { paciente } = usePaciente(user?.usuarioId);

  const citas = [
    {
      nombre: "Dra. María Rodríguez",
      especialidad: "Cardiología",
      fecha: "Lunes, 24 de Abril",
      hora: "10:30 AM",
      estado: "Confirmada",
    },
    {
      nombre: "Dr. Carlos Mendoza",
      especialidad: "Medicina General",
      fecha: "Miércoles, 26 de Abril",
      hora: "3:15 PM",
      estado: "Confirmada",
    },
  ];

  const tarjetas = [
    {
      titulo: "Conoce tus resultados",
      descripcion: "Accede a tus resultados de laboratorio de forma segura",
      boton: "Ver resultados",
      icono: faFlask,
      colorTexto: "text-blue-600",
      colorFondoIcono: "bg-blue-100",
      colorFondoCirculo: "bg-blue-50",
      imagen: resultadosImg,
      botonVariant: "default",
    },
    {
      titulo: "Canales de atención",
      descripcion: "Contacta con nuestro equipo de soporte 24/7",
      boton: "Contactar",
      icono: faHeadset,
      colorTexto: "text-yellow-600",
      colorFondoIcono: "bg-yellow-100",
      colorFondoCirculo: "bg-yellow-50",
      imagen: soporteImg,
      botonVariant: "outline",
    },
  ];

  return (
    <main className="space-y-8">
      {/* Bienvenida */}
      <section>
        <Card as="article" className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8 rounded-2xl shadow-sm w-full">
          <div className="space-y-3 max-w-xl w-full">
            <span className="text-[0.65rem] sm:text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block w-fit">
              Bienvenido de vuelta
            </span>
            <header>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold my-4">
                Hola, {paciente?.nombres || "Paciente"}
              </h1>
            </header>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Bienvenido a tu clínica virtual. Agenda tu cita médica de manera rápida y sencilla.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
              <Button className="w-full sm:w-fit">Por Especialidad</Button>
              <Button variant="outline" className="w-full sm:w-fit">Por médico</Button>
            </div>
          </div>

          <figure className="relative w-44 md:w-60 mt-8 md:mt-0 shrink-0">
            <div className="absolute inset-0 rounded-full bg-blue-50 scale-125 z-0" />
            <img src={bienvenidaImg} alt="Doctora" className="relative z-10 w-full" />
          </figure>
        </Card>
      </section>

      {/* Tarjetas informativas */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" aria-label="Sección informativa">
        {tarjetas.map((item, i) => (
          <Card key={i} as="article" className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 rounded-2xl shadow-sm">
            <div className="space-y-2 flex-1 w-full">
              <div className={`flex items-center gap-2 ${item.colorTexto} font-bold text-base`}>
                <div className={`${item.colorFondoIcono} p-2 rounded-md`}>
                  <FontAwesomeIcon icon={item.icono} />
                </div>
              </div>
              <h2 className="text-black text-base font-semibold">{item.titulo}</h2>
              <p className="text-sm text-muted-foreground">{item.descripcion}</p>
              <Button className="mt-2" variant={item.botonVariant}>{item.boton}</Button>
            </div>
            <figure className="relative w-24 md:w-28 lg:w-32 aspect-square overflow-hidden rounded-full shrink-0">
              <div className={`absolute inset-0 ${item.colorFondoCirculo} z-0 rounded-full`} />
              <img src={item.imagen} alt={item.titulo} className="relative z-10 w-full h-full object-contain" />
            </figure>
          </Card>
        ))}
      </section>

      {/* Citas */}
      <section className="md:col-span-2 space-y-2" aria-labelledby="proximas-citas">
        <header className="flex justify-between items-center px-1 md:px-0">
          <h2 id="proximas-citas" className="text-lg font-semibold">Próximas citas</h2>
          <Button variant="link" className="text-sm font-medium p-0 h-auto">Ver todas</Button>
        </header>
        <div className="overflow-x-auto">
          <ul className="min-w-[640px] space-y-2">
            {citas.map((cita, index) => (
              <li key={index}>
                <ItemsCita {...cita} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
