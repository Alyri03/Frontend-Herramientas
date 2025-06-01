import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button'
import { Plus } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react";

export const AgregarCita = ({ tiempos, tiposCitas, loading, setLoading }) => {

    const [formData, setFormData] = useState({
        pacienteId: "",
        doctorId: "",
        fecha: "",
        hora: "",
        tipo: "",
        duracion: "",
        estado: "",
        notas: "",
        razon: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(formData)
        setLoading(false)
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Programar cita
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Programar Nueva Cita</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
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
                        <div>
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

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Fecha</Label>
                            <Input type="date" required />
                        </div>
                        <div>
                            <Label>Hora</Label>
                            <Select
                                value={formData.hora}
                                onValueChange={(value) => setFormData({ ...formData, hora: value })}
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

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Tipo de cita</Label>
                            <Select
                                value={formData.tipo}
                                onValueChange={(value) => setFormData({ ...formData, tipo: value })}
                                required
                            >
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
                        <div>
                            <Label>Duracion (minutos)</Label>
                            <Select
                                value={formData.duracion}
                                onValueChange={(value) => setFormData({ ...formData, duracion: value})}
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

                    <div>
                        <Label>Notas</Label>
                        <Textarea
                            onChange={(e) => setFormData({...formData, notas: e.target.value})}
                            placeholder="Motivo de la consulta, sintomas, etc"
                            rows={3}
                        />
                    </div>

                    <div className="flex justify-end space-x-2 pt-4">
                        <DialogClose asChild>
                            <Button
                                disabled={loading} 
                                size="sm" className={`bg-gray-500 shadow hover:bg-gray-600`}>Cerrar</Button>
                        </DialogClose>
                        <Button type="submit">Programar cita</Button>

                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}