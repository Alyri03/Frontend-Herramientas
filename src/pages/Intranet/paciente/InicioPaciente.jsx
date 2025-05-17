import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import bienvenidaImg from "@/assets/images/doctora.png";
import resultadosImg from "@/assets/images/ubicanos_footer.png";
import soporteImg from "@/assets/images/central_footer.png";
import ItemsCita from "../components/ItemsCita";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function InicioPaciente() {
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
      estado: "Pendiente",
    },
  ];

  return (
    <div className="space-y-8">

      <Card className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8 rounded-2xl shadow-sm w-full break-words">
        <div className="space-y-3 max-w-xl w-full">
          <span className="text-[0.65rem] sm:text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block w-fit">
            Bienvenido de vuelta
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold my-4">
            Hola, Luis Enrique
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Bienvenido a tu clínica virtual. Agenda tu cita médica de manera rápida y sencilla.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
            <Button className="w-full sm:w-fit">Por Especialidad</Button>
            <Button variant="outline" className="w-full sm:w-fit">Por médico</Button>
          </div>
        </div>

        <div className="relative w-44 md:w-60 mt-8 md:mt-0 shrink-0">
          <div className="absolute inset-0 rounded-full bg-blue-50 scale-125 z-0" />
          <img src={bienvenidaImg} alt="Doctora" className="relative z-10 w-full" />
        </div>
      </Card>



      {/* Resultados y soporte */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

        {/* Resultados */}
        <Card className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 rounded-2xl shadow-sm">
          <div className="space-y-2 flex-1 w-full">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-base">
              <div className="bg-blue-100 p-2 rounded-md">
                <FontAwesomeIcon icon={faFlask} />
              </div>
            </div>
            <span className="text-black text-base font-semibold">Conoce tus resultados</span>
            <p className="text-sm text-muted-foreground">
              Accede a tus resultados de laboratorio de forma segura
            </p>
            <Button className="mt-2">Ver resultados</Button>
          </div>

          <div className="relative w-24 md:w-28 lg:w-32 aspect-square overflow-hidden rounded-full shrink-0">
            <div className="absolute inset-0 bg-blue-50 z-0 rounded-full" />
            <img
              src={resultadosImg}
              alt="Resultados"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </Card>

        <Card className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 rounded-2xl shadow-sm">
          <div className="space-y-2 flex-1 w-full">
            <div className="flex items-center gap-2 text-yellow-600 font-bold text-base">
              <div className="bg-yellow-100 p-2 rounded-md">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
            </div>
            <span className="text-black text-base font-semibold">Canales de atención</span>
            <p className="text-sm text-muted-foreground">
              Contacta con nuestro equipo de soporte 24/7
            </p>
            <Button variant="outline" className="mt-2">Contactar</Button>
          </div>

          <div className="relative w-24 md:w-28 lg:w-32 aspect-square overflow-hidden rounded-full shrink-0">
            <div className="absolute inset-0 bg-yellow-50 z-0 rounded-full" />
            <img
              src={soporteImg}
              alt="Soporte"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </Card>

        {/* Citas */}

        <div className="md:col-span-2 space-y-2">
          <div className="flex justify-between items-center px-1 md:px-0">
            <h2 className="text-lg font-semibold">Próximas citas</h2>
            <Button variant="link" className="text-sm font-medium p-0 h-auto">
              Ver todas
            </Button>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[640px] space-y-2">
              {citas.map((cita, index) => (
                <ItemsCita
                  key={index}
                  nombre={cita.nombre}
                  especialidad={cita.especialidad}
                  fecha={cita.fecha}
                  hora={cita.hora}
                  estado={cita.estado}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
