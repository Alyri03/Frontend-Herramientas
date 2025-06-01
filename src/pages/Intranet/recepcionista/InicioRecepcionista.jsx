import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, User, UserRound, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const InicioRecepcionista = () => {
    return (
        <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pacientes</CardTitle>
            <UserRound className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Citas Hoy</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">6 pendientes, 18 completadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Médicos Activos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">3 de vacaciones</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32 min</div>
            <p className="text-xs text-muted-foreground">Por consulta</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="citas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="citas">Próximas Citas</TabsTrigger>
          <TabsTrigger value="pacientes">Pacientes Recientes</TabsTrigger>
        </TabsList>
        <TabsContent value="citas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Próximas Citas</CardTitle>
              <CardDescription>Gestiona las citas programadas para hoy</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    id: 1,
                    patient: "Carlos Mendoza",
                    doctor: "Dra. María Rodriguez",
                    specialty: "Cardiología",
                    time: "10:30 AM",
                    status: "confirmada",
                  },
                  {
                    id: 2,
                    patient: "Laura Sánchez",
                    doctor: "Dr. Juan Pérez",
                    specialty: "Medicina General",
                    time: "11:15 AM",
                    status: "pendiente",
                  },
                  {
                    id: 3,
                    patient: "Miguel Torres",
                    doctor: "Dra. Ana López",
                    specialty: "Dermatología",
                    time: "12:00 PM",
                    status: "confirmada",
                  },
                  {
                    id: 4,
                    patient: "Sofía Ramírez",
                    doctor: "Dr. Roberto Gómez",
                    specialty: "Oftalmología",
                    time: "12:45 PM",
                    status: "pendiente",
                  },
                  {
                    id: 5,
                    patient: "Javier Morales",
                    doctor: "Dra. Carmen Díaz",
                    specialty: "Neurología",
                    time: "2:30 PM",
                    status: "confirmada",
                  },
                ].map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{appointment.patient}</p>
                        <p className="text-xs text-muted-foreground">
                          {appointment.doctor} - {appointment.specialty}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm">{appointment.time}</p>
                      <Badge variant={appointment.status === "confirmada" ? "default" : "outline"}>
                        {appointment.status === "confirmada" ? "Confirmada" : "Pendiente"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pacientes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pacientes Recientes</CardTitle>
              <CardDescription>Pacientes registrados recientemente en el sistema</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    id: 1,
                    name: "Ana María Fernández",
                    dni: "45678912",
                    date: "20/05/2025",
                    insurance: "Rimac",
                  },
                  {
                    id: 2,
                    name: "Pedro Suárez",
                    dni: "78912345",
                    date: "19/05/2025",
                    insurance: "Pacífico",
                  },
                  {
                    id: 3,
                    name: "Lucía Mendoza",
                    dni: "12345678",
                    date: "18/05/2025",
                    insurance: "Mapfre",
                  },
                  {
                    id: 4,
                    name: "Jorge Ramírez",
                    dni: "87654321",
                    date: "17/05/2025",
                    insurance: "Rimac",
                  },
                  {
                    id: 5,
                    name: "Claudia Torres",
                    dni: "23456789",
                    date: "16/05/2025",
                    insurance: "Particular",
                  },
                ].map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{patient.name}</p>
                        <p className="text-xs text-muted-foreground">DNI: {patient.dni}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm">{patient.date}</p>
                      <Badge variant="outline">{patient.insurance}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    )
}
export default InicioRecepcionista