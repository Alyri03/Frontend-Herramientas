import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { UserRound, HeartPulse, PencilLine, Save, FlaskConical, Mail, Calendar, Flag, MapPin, Syringe, AlertCircle, Info } from "lucide-react";

const tiposAlergia = ["ALIMENTARIA", "MEDICA", "AMBIENTAL", "OTRO"],
  nivelesGravedad = ["LEVE", "MODERADA", "SEVERA"],
  alergiasEspecificas = ["Polen", "Nueces", "Polvo", "Látex"];

const PerfilPaciente = () => {
  const [editarPersonales, setEditarPersonales] = useState(false);
  const [editarMedicos, setEditarMedicos] = useState(false);
  const [tieneAlergias, setTieneAlergias] = useState("Sí");

  const datosPaciente = {
    nombres: "Luis Enrique", DNI: "72384223", apellidos: "Martinez Quijandria", correo: "luis.enrique@email.com",
    fechaNacimiento: "1995-08-12", sexo: "Masculino", nacionalidad: "Peruano", direccion: "Av. Principal 123, Ica",
    grupoSanguineo: "O+", tieneAlergias: "Sí", tipoAlergia: "AMBIENTAL", gravedad: "MODERADA", alergiaEspecifica: "Polen"
  };

  const descripciones = {
    nombres: "Nombre completo del paciente.", apellidos: "Apellido completo del paciente.", correo: "Correo electrónico de contacto.",
    fechaNacimiento: "Fecha en la que nació el paciente.", sexo: "Sexo registrado del paciente.", nacionalidad: "País de origen del paciente.",
    direccion: "Ubicación o dirección de residencia.", grupoSanguineo: "Tipo de sangre del paciente.", tieneAlergias: "Indica si el paciente sufre alergias.",
    tipoAlergia: "Tipo de alergia que presenta el paciente.", gravedad: "Nivel de gravedad de la alergia.", alergiaEspecifica: "Sustancia específica que causa la alergia."
  };

  const obtenerColorEtiqueta = (campoId) => {
    const colores = {
      correo: "bg-blue-100 text-blue-600", sexo: "bg-pink-100 text-pink-600", nacionalidad: "bg-yellow-100 text-yellow-600",
      grupoSanguineo: "bg-red-100 text-red-600", gravedad: "bg-orange-100 text-orange-600"
    };
    return colores[campoId] || "bg-gray-100 text-gray-600";
  };

  const renderizarEtiquetaConTooltip = ({ id, icono, etiqueta }) => (
    <div className="flex items-center gap-2">
      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${obtenerColorEtiqueta(id)}`}>
        {icono}<span>{etiqueta}</span>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="w-4 h-4 text-muted-foreground cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-xs">
            {descripciones[id] || "Sin descripción."}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );

  const campos = {
    personales: [
      { id: "nombres", etiqueta: "Nombres", icono: <UserRound className="w-3.5 h-3.5" />, editable: true },
      { id: "apellidos", etiqueta: "Apellidos", icono: <UserRound className="w-3.5 h-3.5" />, editable: true },
      { id: "correo", etiqueta: "Correo", icono: <Mail className="w-3.5 h-3.5" />, type: "email", editable: true },
      { id: "fechaNacimiento", etiqueta: "Fecha de nacimiento", icono: <Calendar className="w-3.5 h-3.5" />, type: "date", editable: false },
      { id: "sexo", etiqueta: "Sexo", icono: <UserRound className="w-3.5 h-3.5" />, editable: false },
      { id: "nacionalidad", etiqueta: "Nacionalidad", icono: <Flag className="w-3.5 h-3.5" />, editable: false },
      { id: "direccion", etiqueta: "Dirección", icono: <MapPin className="w-3.5 h-3.5" />, editable: true }
    ],
    medicos: [
      { id: "grupoSanguineo", etiqueta: "Grupo sanguíneo", icono: <Syringe className="w-3.5 h-3.5" />, editable: false },
      { id: "tieneAlergias", etiqueta: "¿Tiene alergias?", icono: <AlertCircle className="w-3.5 h-3.5" />, editable: true, opciones: ["Sí", "No"] }
    ]
  };

  return (
    <main className="p-6 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold tracking-tight">Mi Perfil</h1>
      <header className="flex flex-col sm:flex-row items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarFallback className="h-full w-full rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center">LE</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">{datosPaciente.nombres} {datosPaciente.apellidos}</h2>
          <p className="text-sm text-muted-foreground">Paciente registrado</p>
          <p className="text-sm text-muted-foreground">{datosPaciente.correo} | {datosPaciente.DNI}</p>
        </div>
      </header>

      <section>
        <Tabs defaultValue="personales" className="w-full">
          <TabsList className="flex w-max gap-2 mb-4">
            {["personales", "medicos"].map(id => {
              const tab = id === "personales"
                ? { icono: UserRound, etiqueta: "Datos personales" }
                : { icono: FlaskConical, etiqueta: "Información médica" };
              const Icono = tab.icono;
              return (
                <TabsTrigger key={id} value={id} className="flex items-center gap-2 whitespace-nowrap">
                  <Icono className="h-4 w-4 text-muted-foreground" />{tab.etiqueta}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="personales">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              {campos.personales.map(campo => (
                <div key={campo.id} className="space-y-2">
                  {renderizarEtiquetaConTooltip({ id: campo.id, icono: campo.icono, etiqueta: campo.etiqueta })}
                  <Input
                    id={campo.id} type={campo.type || "text"} defaultValue={datosPaciente[campo.id]}
                    readOnly={!editarPersonales || campo.editable === false} className="text-sm"
                  />
                </div>
              ))}
            </article>
            <footer className="flex justify-end mt-8 gap-3">
              {editarPersonales ? (
                <>
                  <Button variant="outline" onClick={() => setEditarPersonales(false)}>Cancelar</Button>
                  <Button><Save className="w-4 h-4 mr-2" /> Guardar</Button>
                </>
              ) : (
                <Button variant="outline" onClick={() => setEditarPersonales(true)}>
                  <PencilLine className="w-4 h-4 mr-2" /> Editar
                </Button>
              )}
            </footer>
          </TabsContent>

          <TabsContent value="medicos">
            <article className="space-y-6">

              {/* Fila 1: Grupo sanguíneo y ¿Tiene alergias? */}
              <div className="grid md:grid-cols-2 gap-6">
                {campos.medicos.map(campo => (
                  <div key={campo.id} className="space-y-2">
                    {renderizarEtiquetaConTooltip({ id: campo.id, icono: campo.icono, etiqueta: campo.etiqueta })}
                    {campo.opciones ? (
                      <Select
                        defaultValue={campo.id === "tieneAlergias" ? tieneAlergias : datosPaciente[campo.id]}
                        onValueChange={campo.id === "tieneAlergias" ? setTieneAlergias : undefined}
                        disabled={!editarMedicos}
                      >
                        <SelectTrigger className="text-sm bg-white shadow-sm rounded-md">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {campo.opciones.map(op => (
                            <SelectItem key={op} value={op}>{op}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        value={datosPaciente[campo.id]}
                        readOnly
                        className="text-sm bg-white shadow-sm rounded-md"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Fila 2: Campos si tiene alergias */}
              {tieneAlergias === "Sí" && (
                <div className="grid md:grid-cols-3 gap-6">
                  {[{ id: "tipoAlergia", label: "Tipo de alergia", opciones: tiposAlergia },
                  { id: "gravedad", label: "Gravedad", opciones: nivelesGravedad },
                  { id: "alergiaEspecifica", label: "Alergia específica", opciones: alergiasEspecificas }].map(({ id, label, opciones }) => (
                    <div key={id} className="space-y-2">
                      {renderizarEtiquetaConTooltip({ id, icono: <FlaskConical className="w-3.5 h-3.5" />, etiqueta: label })}
                      <Select defaultValue={datosPaciente[id]} disabled={!editarMedicos}>
                        <SelectTrigger className="text-sm bg-white shadow-sm rounded-md">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {opciones.map(op => (
                            <SelectItem key={op} value={op}>{op}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              )}

            </article>

            {/* Botones */}
            <footer className="flex justify-end mt-10 gap-4">
              {editarMedicos ? (
                <>
                  <Button variant="outline" onClick={() => setEditarMedicos(false)}>Cancelar</Button>
                  <Button><Save className="w-4 h-4 mr-2" /> Guardar</Button>
                </>
              ) : (
                <Button variant="outline" onClick={() => setEditarMedicos(true)}>
                  <PencilLine className="w-4 h-4 mr-2" /> Editar
                </Button>
              )}
            </footer>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default PerfilPaciente;
