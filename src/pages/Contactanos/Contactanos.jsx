import Preefooter from "../../components/Preefooter";
import "aos/dist/aos.css";

const Contactanos = () => {

  return (
    <>
      <section className="bg-[#FCFCFC] py-12 px-6 max-w-5xl mx-auto">
        <h2
          className="text-4xl font-semibold text-center mb-4"
          data-aos="fade-up"
        >
          Contáctanos
        </h2>

        <p className="text-lg text-center text-gray-700 mb-10" data-aos="fade-up">
          Deja tus datos y tu consulta, y nos comunicaremos contigo
        </p>

        <form className="space-y-6">
          <p className="text-gray-500 text-sm" data-aos="fade-up">
            Todos los campos son obligatorios
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nombres"
              className="w-full px-4 py-3 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              data-aos="fade-right"
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="w-full px-4 py-3 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              data-aos="fade-left"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              data-aos="fade-right"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full px-4 py-3 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              data-aos="fade-left"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 font-medium text-[17px]" data-aos="fade-up">
              Motivo de consulta *
            </label>
            <div className="relative">
              <select
                className="w-full px-4 py-3 pl-10 border-3 border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none"
                data-aos="fade-up"
              >
                <option disabled selected>
                  Seleccione un Motivo
                </option>
                <option>Consulta general</option>
                <option>Soporte técnico</option>
                <option>Otro</option>
              </select>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl">&#9662;</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 font-medium text-[17px]" data-aos="fade-up">
              Consulta*
            </label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 border-3 border-blue-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
              data-aos="fade-up"
            ></textarea>
          </div>

          <div className="flex items-start space-x-2" data-aos="fade-up">
            <input
              type="checkbox"
              id="data"
              className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="data" className="text-sm text-gray-700">
              Cláusula informativa de{" "}
              <a href="#" className="text-blue-600 underline">
                Protección de Datos
              </a>
            </label>
          </div>

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
