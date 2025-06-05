import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useDatosEspecialidades } from "@/hooks/useDatosEspecialidades";
import { usePaginacion } from "@/hooks/usePaginacion";

export default function CrearCita() {
  const [especialidadSeleccionada, setEspecialidadSeleccionada] =
    useState(null);
  const [medicoSeleccionado, setMedicoSeleccionado] = useState(null);

  const { especialidades, cargandoEspecialidades, medicos, cargandoDetalle } =
    useDatosEspecialidades(especialidadSeleccionada?.id);

  const {
    datosPaginados: especialidadesPaginadas,
    paginaActual,
    totalPaginas,
    cambiarPagina,
  } = usePaginacion(especialidades, 8);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Solicitar una Cita</h1>
        <p className="text-muted-foreground">
          Agenda tu cita médica de manera rápida y sencilla
        </p>
      </div>

      <Tabs defaultValue="especialidad" className="w-full">
        <div className="w-fit mb-4">
          <TabsList className="inline-flex rounded-lg border bg-muted p-1">
            <TabsTrigger value="especialidad">Por Especialidad</TabsTrigger>
            <TabsTrigger value="medico">Por Médico</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="especialidad">
          <div className="border rounded-lg p-4">
            <p className="font-medium mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded-full">
                1
              </span>
              Selecciona una especialidad
            </p>

            {cargandoEspecialidades ? (
              <p className="text-sm text-muted-foreground">
                Cargando especialidades...
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {especialidadesPaginadas.map((especialidad) => (
                    <Card
                      key={especialidad.id}
                      onClick={() => setEspecialidadSeleccionada(especialidad)}
                      className={`cursor-pointer transition ${
                        especialidadSeleccionada?.id === especialidad.id
                          ? "ring-2 ring-blue-500 bg-blue-50"
                          : "hover:ring-2 hover:ring-blue-500"
                      }`}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-4">
                        <FontAwesomeIcon
                          icon={especialidad.icono}
                          className="text-blue-600 text-2xl mb-2"
                        />
                        <p className="text-sm font-medium text-center">
                          {especialidad.nombre}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {totalPaginas > 1 && (
                  <div className="flex justify-end items-center gap-3 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => cambiarPagina(paginaActual - 1)}
                      disabled={paginaActual === 1}
                    >
                      Anterior
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      Página {paginaActual} de {totalPaginas}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => cambiarPagina(paginaActual + 1)}
                      disabled={paginaActual === totalPaginas}
                    >
                      Siguiente
                    </Button>
                  </div>
                )}
              </>
            )}

            {especialidadSeleccionada && (
              <div className="mt-6 border-t pt-6">
                <p className="font-medium mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded-full">
                    2
                  </span>
                  Selecciona un médico
                </p>

                {cargandoDetalle ? (
                  <p className="text-sm text-muted-foreground">
                    Cargando médicos...
                  </p>
                ) : medicos.length > 0 ? (
                  <div className="grid gap-4">
                    {medicos.map((medico) => (
                      <Card
                        key={medico.medicoId}
                        onClick={() => setMedicoSeleccionado(medico)}
                        className={`cursor-pointer transition border rounded-lg px-4 py-3 flex justify-between items-center ${
                          medicoSeleccionado?.medicoId === medico.medicoId
                            ? "ring-2 ring-blue-500 bg-blue-50"
                            : "hover:ring-2 hover:ring-blue-300"
                        }`}
                      >
                        <div>
                          <p className="font-semibold">{medico.nombreMedico}</p>
                          <p className="text-sm text-muted-foreground">
                            {especialidadSeleccionada.nombre}
                          </p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">
                          Disponible
                        </Badge>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No hay médicos disponibles para esta especialidad.
                  </p>
                )}
              </div>
            )}
          </div>
          {/* Paso 3: Selecciona fecha y hora */}
          <div className="mt-6 border-t pt-6">
            <p className="font-medium mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded-full">
                3
              </span>
              Selecciona fecha y hora
            </p>

            <div className="bg-muted rounded-lg p-6 text-center text-muted-foreground text-sm">
              Selecciona un médico para ver los horarios disponibles
            </div>
          </div>

          {/* Paso 4: Completa tu solicitud */}
          <div className="mt-6 border-t pt-6">
            <p className="font-medium mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded-full">
                4
              </span>
              Completa tu solicitud
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Motivo de la consulta
                </label>
                <textarea
                  className="w-full mt-2 border rounded-md p-2 min-h-[100px] text-sm"
                  placeholder="Describe detalladamente el motivo de tu consulta"
                />
              </div>

              <div className="flex justify-center">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Solicitar Cita
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="medico">
          <div className="border rounded-lg p-4 text-muted-foreground">
            Aquí irá el contenido para seleccionar directamente por médico.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
