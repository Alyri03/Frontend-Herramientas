import Preefooter from "@/components/Preefooter";
import "aos/dist/aos.css";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContacto } from "@/hooks/useContacto";

const Contactanos = () => {
  const { form, errores, handleChange, handleSubmit } = useContacto();

  return (
    <>
      <section className="bg-[#FCFCFC] py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-4" data-aos="fade-up">
          Contáctanos
        </h2>

        <p className="text-lg text-center text-gray-700 mb-10" data-aos="fade-up">
          Deja tus datos y tu consulta, y nos comunicaremos contigo
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <p className="text-gray-500 text-sm" data-aos="fade-up">
            Todos los campos son obligatorios
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="nombres"
                value={form.nombres}
                onChange={handleChange}
                placeholder="Nombres"
                className="w-full px-4 py-3 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                data-aos="fade-right"
              />
              {errores.nombres && <p className="text-sm text-red-600 mt-1">{errores.nombres}</p>}
            </div>

            <div>
              <input
                type="text"
                name="apellidos"
                value={form.apellidos}
                onChange={handleChange}
                placeholder="Apellidos"
                className="w-full px-4 py-3 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                data-aos="fade-left"
              />
              {errores.apellidos && <p className="text-sm text-red-600 mt-1">{errores.apellidos}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                data-aos="fade-right"
              />
              {errores.email && <p className="text-sm text-red-600 mt-1">{errores.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Teléfono Ejm: 987654321"
                className="w-full px-4 py-3 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                data-aos="fade-left"
              />
              {errores.telefono && <p className="text-sm text-red-600 mt-1">{errores.telefono}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 font-medium text-[17px]" data-aos="fade-up">
              Motivo de consulta *
            </label>
            <div className="relative">
              <select
                name="motivo"
                value={form.motivo}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-10 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none"
                data-aos="fade-up"
              >
                <option value="">Seleccione un Motivo</option>
                <option value="Consulta general">Consulta general</option>
                <option value="Soporte técnico">Soporte técnico</option>
                <option value="Otro">Otro</option>
              </select>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl">
                &#9662;
              </span>
            </div>
            {errores.motivo && <p className="text-sm text-red-600">{errores.motivo}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 font-medium text-[17px]" data-aos="fade-up">
              Consulta*
            </label>
            <textarea
              name="consulta"
              value={form.consulta}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border-3 border-blue-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
              data-aos="fade-up"
            ></textarea>
            {errores.consulta && <p className="text-sm text-red-600">{errores.consulta}</p>}
          </div>

          <div className="flex items-start space-x-2" data-aos="fade-up">
            <input
              type="checkbox"
              id="data"
              name="acepto"
              checked={form.acepto}
              onChange={handleChange}
              className="h-4 w-4 translate-y-[2px] text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="data" className="text-sm text-gray-700">
              Cláusula informativa de {" "}
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="text-blue-600 underline hover:text-blue-800">
                    Protección de Datos
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Protección de Datos</DialogTitle>
                    <DialogDescription>
                      Tus datos serán tratados de forma confidencial, conforme a la Ley N° 29733 de Protección de Datos Personales en el Perú. Solo se utilizarán para responder tu consulta y no serán compartidos con terceros sin tu consentimiento.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Cerrar
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </label>
          </div>
          {errores.acepto && <p className="text-sm text-red-600 -mt-4">{errores.acepto}</p>}

          <button
            type="submit"
            className="bg-[#2F71A1] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium"
            data-aos="fade-up"
          >
            Enviar
          </button>
        </form>
      </section>

      <Preefooter />
    </>
  );
};

export default Contactanos;