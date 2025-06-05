import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import {  Funnel } from "lucide-react"


import { Input } from "@/components/ui/input"
import { Calendario } from "../../medico/components/Calendario";


export const FiltrosCitas = ({ setSorting, filterOptions, setFilterOptions, from, setFrom, to, setTo }) => {

    return (
        <div className="rounded-sm outline flex items-center p-4 gap-10 bg-white">
            <Input
                type="text"
                placeholder="Buscar por citas por paciente, doctor o tipo"
                onChange={(event) => {
                    setSorting(event.target.value)
                }}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <Funnel />
                        Filtros
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-5 p-5 w-xs">
                    <h1>Filtros avanzados</h1>

                    <div className="w-full flex flex-col gap-2">
                        <p>Estado</p>

                        <Select
                            onValueChange={(value) => {
                                const updated = filterOptions.map((item) => ({
                                    ...item,
                                    visible: value === item.estado
                                }))
                                setFilterOptions(updated)
                            }}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Todas los estados" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    filterOptions.map((state, index) => (
                                        <SelectItem key={index} value={state.estado}>{state.estado}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <p>Rango de fechas</p>

                        <div className="flex flex-row gap-5">
                            <Calendario date={from} setDate={setFrom} title={"Desde"} />
                            <Calendario date={to} setDate={setTo} title={"Hasta"} />
                        </div>

                    </div>
                    {/* 
                                    <div className="flex flex-col gap-2">
                                        <p>Filtros rápidos</p>
                                        <div className="flex flex-col gap-1">
                                            {
                                                filtros.map((item, index) => (
                                                    <div key={index} className="flex gap-3 items-center">
                                                        <Checkbox />
                                                        <label>{item.title}</label>
                                                    </div>
        
                                                ))
                                            }
                                        </div>
        
                                    </div> */}

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}