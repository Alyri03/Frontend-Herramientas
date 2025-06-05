"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Search, Shield, Trash2 } from "lucide-react"

// Datos de ejemplo
const insurances = [
  {
    id: 1,
    name: "Rimac",
    description: "Seguro de salud con cobertura nacional e internacional.",
    coveragePercentage: 80,
    servicesCount: 24,
    status: "activo",
  },
  {
    id: 2,
    name: "Pacífico",
    description: "Seguro médico con amplia red de clínicas afiliadas.",
    coveragePercentage: 75,
    servicesCount: 20,
    status: "activo",
  },
  {
    id: 3,
    name: "Mapfre",
    description: "Seguro de salud con cobertura para toda la familia.",
    coveragePercentage: 70,
    servicesCount: 18,
    status: "activo",
  },
  {
    id: 4,
    name: "La Positiva",
    description: "Seguro médico con planes personalizados.",
    coveragePercentage: 65,
    servicesCount: 15,
    status: "inactivo",
  },
  {
    id: 5,
    name: "Sanitas",
    description: "Seguro de salud con enfoque en medicina preventiva.",
    coveragePercentage: 60,
    servicesCount: 12,
    status: "activo",
  },
]

export default function SegurosRecepcionista() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar seguros por término de búsqueda
  const filteredInsurances = insurances.filter(
    (insurance) =>
      insurance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      insurance.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestión de Seguros y Coberturas</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Seguro
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Seguros Médicos</CardTitle>
          <CardDescription>Administra los seguros médicos y sus coberturas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 pb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar seguro..."
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
                  <TableHead>Cobertura</TableHead>
                  <TableHead>Servicios</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInsurances.map((insurance) => (
                  <TableRow key={insurance.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        {insurance.name}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{insurance.description}</TableCell>
                    <TableCell>{insurance.coveragePercentage}%</TableCell>
                    <TableCell>{insurance.servicesCount} servicios</TableCell>
                    <TableCell>
                      <Badge variant={insurance.status === "activo" ? "default" : "secondary"}>
                        {insurance.status === "activo" ? "Activo" : "Inactivo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
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
                {filteredInsurances.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No se encontraron seguros.
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
