import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Eye, Plus, Search, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Datos de ejemplo
const patients = [
  {
    id: 1,
    name: "Ana María Fernández",
    dni: "45678912",
    phone: "987654321",
    insurance: "Rimac",
    status: "activo",
  },
  {
    id: 2,
    name: "Pedro Suárez",
    dni: "78912345",
    phone: "912345678",
    insurance: "Pacífico",
    status: "activo",
  },
  {
    id: 3,
    name: "Lucía Mendoza",
    dni: "12345678",
    phone: "945678123",
    insurance: "Mapfre",
    status: "activo",
  },
  {
    id: 4,
    name: "Jorge Ramírez",
    dni: "87654321",
    phone: "923456789",
    insurance: "Rimac",
    status: "inactivo",
  },
  {
    id: 5,
    name: "Claudia Torres",
    dni: "23456789",
    phone: "934567812",
    insurance: "Particular",
    status: "activo",
  },
  {
    id: 6,
    name: "Roberto Flores",
    dni: "34567891",
    phone: "956781234",
    insurance: "Pacífico",
    status: "activo",
  },
  {
    id: 7,
    name: "María Gonzales",
    dni: "56789123",
    phone: "967812345",
    insurance: "Mapfre",
    status: "inactivo",
  },
]

export default function PacientesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("nombre")


  // Filtrar pacientes por término de búsqueda y tipo de búsqueda
  const filteredPatients = patients.filter((patient) => {
    if (searchType === "dni") {
      return patient.dni.includes(searchTerm)
    } else {
      return patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestión de Pacientes</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Paciente
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pacientes</CardTitle>
          <CardDescription>Administra los pacientes registrados en la clínica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4">
            <div className="flex w-full sm:w-auto gap-2">
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Buscar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nombre">Nombre</SelectItem>
                  <SelectItem value="dni">DNI</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={searchType === "dni" ? "Buscar por DNI..." : "Buscar por nombre..."}
                  className="pl-8 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Button variant="outline">Filtrar</Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>DNI</TableHead>
                  <TableHead>Teléfono</TableHead>
                  <TableHead>Seguro</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.dni}</TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>{patient.insurance}</TableCell>
                    <TableCell>
                      <Badge variant={patient.status === "activo" ? "default" : "secondary"}>
                        {patient.status === "activo" ? "Activo" : "Inactivo"}
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
                {filteredPatients.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No se encontraron pacientes.
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