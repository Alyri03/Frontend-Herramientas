import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";


export const Filtros = ({filterOptions, setFilterOptions}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                    Todos <ChevronDown />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {filterOptions.map((opt, index) => (
                    <DropdownMenuCheckboxItem
                        key={index}
                        className={"capitalize"}
                        checked={opt.visible}
                        onCheckedChange={() => {
                            const updated = filterOptions.map((item, i) => ({
                                ...item,
                                visible: i === index
                            }))

                            setFilterOptions(updated)
                        }
                        }
                    >
                        {opt.estado}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}