import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarIcon, Clock, BadgeCheck, Stethoscope, ClipboardCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatearEstado } from "@/lib/utils";

const ModalDetalle = ({ tipo = "cita", data, open, onOpenChange }) => {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Detalles de la {tipo === "cita" ? "Cita" : "Atención"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-sm">
          <div>
            <p className="text-base font-semibold">{data.doctor}</p>
            <p className="text-sm text-muted-foreground">{data.especialidad}</p>
          </div>

          <hr />

          {/* Detalle tipo cita */}
          {tipo === "cita" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="font-medium">Fecha:</span>
                </p>
                <p className="ml-6">{data.fecha}</p>
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Hora:</span>
                </p>
                <p className="ml-6">{data.hora}</p>
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4" />
                  <span className="font-medium">Estado:</span>
                </p>
                <div className="ml-6">
                  <Badge variant={data.estado?.toLowerCase()} className="min-w-[100px] justify-center h-6">
                    {formatearEstado(data.estado)}
                  </Badge>
                </div>
              </div>
            </div>
          )}

          {/* Detalle tipo historial*/}
          {tipo === "historial" && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4" />
                    Información del médico
                  </p>
                  <p><strong>Doctor:</strong> {data.doctor}</p>
                  <p><strong>Especialidad:</strong> {data.especialidad}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Información de la cita
                  </p>
                  <p><strong>Fecha:</strong> {data.fecha}</p>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <ClipboardCheck className="w-4 h-4" />
                  Detalles clínicos
                </p>
                <p><strong>Diagnóstico:</strong> {data.diagnostico}</p>
                {data.tratamiento && (
                  <p><strong>Tratamiento:</strong> {data.tratamiento}</p>
                )}
                {data.comentario && (
                  <p><strong>Comentario del médico:</strong> {data.comentario}</p>
                )}
              </div>
            </>
          )}

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cerrar</Button>
            {tipo === "cita" && <Button>Reprogramar</Button>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDetalle;
