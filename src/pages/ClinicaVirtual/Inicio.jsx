
import TarjetasDestacadas from "./Components/TarjetasDestacadas"
import TarjetaBienvenida from "./Components/TarjetaBievenida"
import ListaCitas from "./Components/ListaCitas"
export default function Inicio() {
    return (
        <div>
            <TarjetaBienvenida />
            <TarjetasDestacadas />
            <ListaCitas />
        </div>
    )
}
