import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Pill, CircleCheckBig } from "lucide-react"
import { Button } from "@/components/ui/button";


export const RegistroAtencion = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("da")

    }

    return (
        <Card className="p-2">
            <CardHeader>
                <CardTitle className="mt-2">Registro de atención</CardTitle>
                <CardDescription>Complete la información de la consulta actual</CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {}
                    <div className="flex flex-col md:flex-row gap-6">
                        {}
                        <div className="flex flex-col gap-4 w-full md:w-1/2">
                            <label htmlFor="diagnostico" className="font-medium text-gray-700">
                                <div className="flex items-center gap-2">
                                    <FileText size={20} className="text-green-600" />
                                    <span>Diagnóstico</span>
                                </div>
                            </label>
                            <Textarea className="resize-none h-[100px]" placeholder="Ingrese el diagnóstico del paciente" id="diagnostico"/>
                            <label htmlFor="comentarios" className="font-medium text-gray-700">
                                <div className="flex items-center gap-2">
                                    <FileText size={20} className="text-green-600" />
                                    <span>Comentarios del médico</span>
                                </div>
                            </label>
                            <Textarea className="resize-none h-[100px]" placeholder="Ingrese comentarios adicionales" id="comentarios"/>
                        </div>

                        {/* Tratamiento */}
                        <div className="flex flex-col gap-4 w-full md:w-1/2">
                            <label htmlFor="tratamiento" className="font-medium text-gray-700">
                                <div className="flex items-center gap-2">
                                    <Pill size={20} className="text-green-600" />
                                    <span>Tratamiento</span>
                                </div>
                            </label>
                            <Textarea className="resize-none h-[236px]" placeholder="Ingrese el tratamiento prescrito" id="tratamiento"/>
                        </div>
                    </div>

                    {/* Botones */}
                    <CardFooter className="justify-end mb-2">
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Button type="submit"size="lg" variant="outline" className="border-green-500 text-green-600">
                                Guardar
                            </Button>
                            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
                            <CircleCheckBig size={20} />
                                Finalizar atención
                            </Button>
                        </div>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    )
}