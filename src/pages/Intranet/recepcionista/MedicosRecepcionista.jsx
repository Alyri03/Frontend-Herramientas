import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Search, Trash2 } from "lucide-react"

// Datos de ejemplo
const employees = [
  {
    id: 1,
    name: "Dr. Juan Pérez",
    role: "Médico",
    specialty: "Cardiología",
    status: "activo",
  },
  {
    id: 2,
    name: "Dra. María Rodriguez",
    role: "Médico",
    specialty: "Pediatría",
    status: "activo",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Medico",
    specialty: "Otorrinolaringología",
    status: "activo",
  },
  {
    id: 4,
    name: "Carlos López",
    role: "Medico",
    specialty: "electroencefalografía",
    status: "inactivo",
  },
  {
    id: 5,
    name: "Dr. Roberto Gómez",
    role: "Médico",
    specialty: "Traumatología",
    status: "activo",
  },
]

const MedicoRecepcionista = () => {
    const [searchTerm, setSearchTerm] = useState("")


  // Filtrar empleados por término de búsqueda
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (employee.specialty && employee.specialty.toLowerCase().includes(searchTerm.toLowerCase())),
  )

    return (
        <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestión de Empleados</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Empleado
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Empleados</CardTitle>
          <CardDescription>Administra los empleados de la clínica</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 pb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar empleado..."
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
                  <TableHead>Cargo</TableHead>
                  <TableHead>Especialidad</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.role}</TableCell>
                    <TableCell>{employee.specialty}</TableCell>
                    <TableCell>
                      <Badge variant={employee.status === "activo" ? "default" : "secondary"}>
                        {employee.status === "activo" ? "Activo" : "Inactivo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" >
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
                {filteredEmployees.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No se encontraron empleados.
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
export default MedicoRecepcionista