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
        <>

            <Card>
                <CardHeader>
                    <CardTitle>Registro de atencion</CardTitle>
                    <CardDescription>Complete la información de la consulta actual</CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="flex flex-row justify-center items-center">
                            <div className="w-1/2 flex flex-col gap-3">
                                <label htmlFor="diagnostico">
                                    <div className="flex flex-row gap-3">
                                        <FileText size={20} color="green" />
                                        <span>Diagnóstico</span>
                                    </div>
                                </label>
                                <Textarea className="resize-none h-[100px]" placeholder="Ingrese el diagnostico del paciente" id="diagnostico" />


                                <label htmlFor="comentarios">
                                    <div className="flex flex-row gap-3">
                                        <FileText size={20} color="green" />
                                        <span>Comentarios del médico</span>
                                    </div>
                                </label>
                                <Textarea className="resize-none h-[100px]" placeholder="Ingrese comentarios adicionales" id="comentarios" />
                            </div>



                            <div className="w-1/2 p-5 flex flex-col gap-3">
                                <label htmlFor="tratamiento">
                                    <div className="flex flex-row gap-3">
                                        <Pill size={20} color="green" />
                                        <span>Tratamiento</span>
                                    </div>
                                </label>
                                <Textarea className="resize-none h-[200px]" placeholder="Ingrese el tratamiento prescrito" id="tratamiento" />
                            </div>
                        </div>

                        <div>
                            <CardFooter className={'justify-end'}>
                                <div className="flex gap-2">
                                    <Button type="submit" size="lg" variant="outline" className="outline-green-600 text-green-500">
                                        Guardar
                                    </Button>

                                    <Button size="lg" className={`bg-green-500 shadow hover:bg-green-600`}>
                                        <CircleCheckBig />
                                        Finalizar atención
                                    </Button>
                                </div>
                            </CardFooter>
                        </div>

                    </form>
                </CardContent>

            </Card>

        </>
    )
}