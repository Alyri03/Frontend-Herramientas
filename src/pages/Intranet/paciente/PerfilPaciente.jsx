import { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { usePaciente } from "../hooks/usePaciente";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  UserRound,
  PencilLine,
  Save,
  FlaskConical,
  Mail,
  Calendar,
  Flag,
  MapPin,
  Syringe,
  Info,
} from "lucide-react";

const PerfilPaciente = () => {
  const { user } = useContext(AuthContext);
  const {
    paciente: datosPaciente,
    actualizarCampo,
    restaurarDatosOriginales,
  } = usePaciente(user?.usuarioId);

  const [editarPersonales, setEditarPersonales] = useState(false);

  const formatearGrupoSanguineo = (valor) => {
    if (!valor) return "";
    return valor
      .replace("POSITIVO", "+")
      .replace("NEGATIVO", "-")
      .replace("_", " ");
  };

  const descripciones = {
    nombres: "Nombre completo del paciente.",
    apellidos: "Apellido completo del paciente.",
    correo: "Correo electrónico de contacto.",
    fechaNacimiento: "Fecha de nacimiento del paciente.",
    sexo: "Sexo registrado del paciente.",
    nacionalidad: "País de origen.",
    direccion: "Dirección de residencia.",
    grupoSanguineo: "Tipo de sangre.",
    documento: "Número de identificación",
  };

  const obtenerColorEtiqueta = (campoId) => {
    const colores = {
      correo: "bg-blue-100 text-blue-600",
      sexo: "bg-pink-100 text-pink-600",
      nacionalidad: "bg-yellow-100 text-yellow-600",
      grupoSanguineo: "bg-red-100 text-red-600",
    };
    return colores[campoId] || "bg-gray-100 text-gray-600";
  };

  const renderizarEtiquetaConTooltip = ({ id, icono, etiqueta }) => (
    <div className="flex items-center gap-2">
      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${obtenerColorEtiqueta(id)}`}>
        {icono}
        <span>{etiqueta}</span>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="w-4 h-4 text-muted-foreground cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-xs">
            {descripciones[id]}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );

  if (!datosPaciente) {
    return <p className="text-center py-10">Cargando información del perfil...</p>;
  }

  const campos = {
    personales: [
      { id: "nombres", etiqueta: "Nombres", icono: <UserRound className="w-3.5 h-3.5" />, editable: false },
      { id: "apellidos", etiqueta: "Apellidos", icono: <UserRound className="w-3.5 h-3.5" />, editable: false },
      { id: "correo", etiqueta: "Correo", icono: <Mail className="w-3.5 h-3.5" />, editable: true },
      { id: "fechaNacimiento", etiqueta: "Fecha de nacimiento", icono: <Calendar className="w-3.5 h-3.5" />, editable: false },
      { id: "sexo", etiqueta: "Sexo", icono: <UserRound className="w-3.5 h-3.5" />, editable: false },
      { id: "nacionalidad", etiqueta: "Nacionalidad", icono: <Flag className="w-3.5 h-3.5" />, editable: false },
      { id: "direccion", etiqueta: "Dirección", icono: <MapPin className="w-3.5 h-3.5" />, editable: true },
    ],
    medicos: [
      { id: "grupoSanguineo", etiqueta: "Grupo sanguíneo", icono: <Syringe className="w-3.5 h-3.5" />, editable: false },
    ],
  };

  const getIniciales = () => {
    return `${datosPaciente.nombres?.[0] ?? ""}${datosPaciente.apellidos?.[0] ?? ""}`.toUpperCase();
  };

  return (
    <main className="p-6 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold tracking-tight">Mi Perfil</h1>

      <header className="flex flex-col sm:flex-row items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarFallback className="h-full w-full rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center">
            {getIniciales()}
          </AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">
            {datosPaciente.nombres} {datosPaciente.apellidos}
          </h2>
          <p className="text-sm text-muted-foreground">Paciente registrado</p>
          <p className="text-sm text-muted-foreground">
            {datosPaciente.correo} | {datosPaciente.documento}
          </p>
        </div>
      </header>

      <section>
        <Tabs defaultValue="personales" className="w-full">
          <TabsList className="flex w-max gap-2 mb-4">
            <TabsTrigger value="personales" className="flex items-center gap-2 whitespace-nowrap">
              <UserRound className="h-4 w-4 text-muted-foreground" /> Datos personales
            </TabsTrigger>
            <TabsTrigger value="medicos" className="flex items-center gap-2 whitespace-nowrap">
              <FlaskConical className="h-4 w-4 text-muted-foreground" /> Información médica
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personales">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              {campos.personales.map((campo) => (
                <div key={campo.id} className="space-y-2">
                  {renderizarEtiquetaConTooltip(campo)}
                  <Input
                    id={campo.id}
                    type="text"
                    value={datosPaciente[campo.id] || ""}
                    readOnly={!editarPersonales || campo.editable === false}
                    onChange={(e) =>
                      editarPersonales && campo.editable
                        ? actualizarCampo(campo.id, e.target.value)
                        : null
                    }
                    className="text-sm"
                  />
                </div>
              ))}
            </article>
            <footer className="flex justify-end mt-8 gap-3">
              {editarPersonales ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      restaurarDatosOriginales();
                      setEditarPersonales(false);
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button>
                    <Save className="w-4 h-4 mr-2" /> Guardar
                  </Button>
                </>
              ) : (
                <Button variant="outline" onClick={() => setEditarPersonales(true)}>
                  <PencilLine className="w-4 h-4 mr-2" /> Editar
                </Button>
              )}
            </footer>
          </TabsContent>

          <TabsContent value="medicos">
            <article className="grid md:grid-cols-2 gap-6">
              {campos.medicos.map((campo) => (
                <div key={campo.id} className="space-y-2">
                  {renderizarEtiquetaConTooltip(campo)}
                  <Input
                    value={formatearGrupoSanguineo(datosPaciente[campo.id])}
                    readOnly
                    className="text-sm bg-white shadow-sm rounded-md"
                  />
                </div>
              ))}
            </article>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default PerfilPaciente;
