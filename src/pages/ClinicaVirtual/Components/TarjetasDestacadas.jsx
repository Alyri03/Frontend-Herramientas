import TarjetaResultados from "./TarjetaResultados"
import TarjetaSoporte from "./TarjetaSoporte"

export default function TarjetasDestacadas() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TarjetaResultados />
            <TarjetaSoporte />
        </div>
    )
}
