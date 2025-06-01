import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button'
import { Calendar, ChevronDown, CircleCheckBig, Clock, Funnel, Plus, Save, SquarePen } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react";

export const EditarCita = ({cita, setCita, loading, setLoading, appointment, tiempos, tiposCitas, estados}) => {

    useEffect(() => {
        if (cita) {
            setFormData({
                pacienteId: cita.pacienteId,
                doctorId: cita.doctorId,
                fecha: cita.fecha,
                tiempo: cita.hora?.replace(" AM", "").replace(" PM", "") || "",
                tipo: cita.tipo,
                duracion: cita.duracion?.replace(" min", "") || "",
                estado: cita.estado,
                notas: "Notas de la cita médica....",
                razon: "Motivo de la consulta"
            })
        }
    }, [cita])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(formData)
        setLoading(false)
    }



    const [formData, setFormData] = useState({
        pacienteId: "",
        doctorId: "",
        fecha: "",
        tiempo: "",
        tipo: "",
        duracion: "",
        estado: "",
        notas: "",
        razon: ""
    })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button onClick={() => setCita(appointment)} variant="secondary" size="sm">
                    <SquarePen />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">

                <DialogHeader>
                    <DialogTitle>Editar cita</DialogTitle>
                    <DialogDescription>
                        Información completa de la cita médica.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6 w-full">

                        <div className="flex flex-row gap-3 w-full">
                            <div className="flex flex-col gap-3 w-full">
                                <Label>Paciente</Label>
                                <Select
                                    value={formData.pacienteId}
                                    onValueChange={(value) => setFormData({ ...formData, pacienteId: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar paciente" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="P001">John Smith</SelectItem>
                                        <SelectItem value="P002">Emma Johnson</SelectItem>
                                        <SelectItem value="P003">Michael Davis</SelectItem>
                                        <SelectItem value="P004">Sarah Miller</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <Label>Doctor</Label>
                                <Select
                                    value={formData.doctorId}
                                    onValueChange={(value) => setFormData({ ...formData, doctorId: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar doctor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="D001">Dr. Sarah Wilson</SelectItem>
                                        <SelectItem value="D002">Dr. Michael Brown</SelectItem>
                                        <SelectItem value="D003">Dr. Lisa Garcia</SelectItem>
                                        <SelectItem value="D004">Dr. James Rodriguez</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 w-full">
                            <div className="flex flex-col gap-3 w-full">
                                <Label htmlFor="fecha">Fecha *</Label>
                                <Input
                                    type="date"
                                    value={formData.fecha}
                                    onChange={(value) => setFormData({ ...formData, fecha: value })}
                                    required />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <Label htmlFor="tiempo">Hora *</Label>
                                <Select
                                    value={formData.tiempo}
                                    onValueChange={(value) => setFormData({ ...formData, tiempo: value })}
                                    required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar hora" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            tiempos.map((tiempo, index) => (
                                                <SelectItem key={index} value={tiempo}>{tiempo}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>


                        <div className="flex flex-row gap-3">

                            <div className="flex flex-col gap-3 w-full">
                                <Label htmlFor="tipo">Tipo de cita *</Label>
                                <Select
                                    value={formData.tipo}
                                    onValueChange={(value) => setFormData({ ...formData, tipo: value })}
                                    required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar tipo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            tiposCitas.map((tipo, index) => (
                                                <SelectItem key={index} value={tipo}>{tipo}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <Label htmlFor="duracion">Duracion (minutos) *</Label>
                                <Select
                                    value={formData.duracion}
                                    onValueChange={(value) => setFormData({ ...formData, duracion: value })}
                                    required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar tipo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="15">15 minutos</SelectItem>
                                        <SelectItem value="30">30 minutos</SelectItem>
                                        <SelectItem value="45">45 minutos</SelectItem>
                                        <SelectItem value="60">1 hora</SelectItem>
                                        <SelectItem value="90">1.5 horas</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>



                        <div className="flex flex-col gap-3 w-full">
                            <Label htmlFor="estado">Estado de la cita</Label>
                            <Select
                                value={formData.estado}
                                onValueChange={(value) => setFormData({ ...formData, estado: value })}
                                required>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecciona un estado" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            estados.map((estado, index) => (
                                                <SelectItem key={index} value={estado.estado}>{estado.estado}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-3">

                            <Label htmlFor="razon">Motivo de la consulta</Label>

                            <Textarea
                                className="resize-none"
                                placeholder="Motivo de la consulta...."
                                onChange={(e) => setFormData({ ...formData, razon: e.target.value })}
                                value={formData.razon}
                                required />

                        </div>

                        <div className="flex flex-col gap-3">

                            <Label htmlFor="notas">Notas adicionales</Label>

                            <Textarea
                                value={formData.notas}
                                className="resize-none"
                                onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                                placeholder="Notas de la cita médica...."
                                required />

                        </div>

                    </div>

                    <div className="flex gap-2 pt-3 justify-end ">
                        <DialogClose asChild>
                            <Button disabled={loading} size="sm" className={`bg-gray-500 shadow hover:bg-gray-600`}>Cerrar</Button>
                        </DialogClose>

                        <Button type="submit" size="sm" disabled={loading}>
                            <Save />
                            {loading ? "Guardando...." : "Guardar cambios"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}