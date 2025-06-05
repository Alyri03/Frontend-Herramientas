"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Eye, ImageIcon, Plus, Search, Trash2 } from "lucide-react"

// Datos de ejemplo
const services = [
  {
    id: 1,
    name: "Consulta Cardiológica",
    description: "Evaluación completa del sistema cardiovascular por un especialista.",
    price: 150,
    specialty: "Cardiología",
    hasImage: true,
    status: "activo",
  },
  {
    id: 2,
    name: "Electrocardiograma",
    description: "Registro gráfico de la actividad eléctrica del corazón.",
    price: 80,
    specialty: "Cardiología",
    hasImage: true,
    status: "activo",
  },
  {
    id: 3,
    name: "Consulta Pediátrica",
    description: "Evaluación médica para niños y adolescentes.",
    price: 120,
    specialty: "Pediatría",
    hasImage: true,
    status: "activo",
  },
  {
    id: 4,
    name: "Radiografía",
    description: "Imagen diagnóstica mediante rayos X.",
    price: 100,
    specialty: "Traumatología",
    hasImage: true,
    status: "activo",
  },
  {
    id: 5,
    name: "Ecografía",
    description: "Técnica de imagen que utiliza ondas sonoras para crear imágenes del interior del cuerpo.",
    price: 130,
    specialty: "Medicina General",
    hasImage: false,
    status: "activo",
  },
  {
    id: 6,
    name: "Análisis de Sangre",
    description: "Examen de laboratorio para evaluar componentes de la sangre.",
    price: 60,
    specialty: "Medicina General",
    hasImage: false,
    status: "inactivo",
  },
]

export default function ServiciosPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar servicios por término de búsqueda
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
  )


  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestión de Servicios</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Servicio
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Servicios</CardTitle>
          <CardDescription>Administra los servicios médicos ofrecidos por la clínica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 pb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar servicio..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">Filtrar</Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Precio (S/)</TableHead>
                  <TableHead>Especialidad</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {service.name}
                        {service.hasImage && (
                          <Badge variant="outline" className="ml-2">
                            <ImageIcon className="mr-1 h-3 w-3" />
                            Imagen
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                    <TableCell>{service.price.toFixed(2)}</TableCell>
                    <TableCell>{service.specialty}</TableCell>
                    <TableCell>
                      <Badge variant={service.status === "activo" ? "default" : "secondary"}>
                        {service.status === "activo" ? "Activo" : "Inactivo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">Ver</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Editar</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Eliminar</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredServices.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No se encontraron servicios.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
