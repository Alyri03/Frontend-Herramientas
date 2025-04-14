import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const servicios = [
  {
    nombre: 'Centro Quirúrgico',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Centro%20Quirurgico/CENTRO_QUIR__RGICO_408_X_592.jpg',
  },
  {
    nombre: 'Medicina física y rehabilitación',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Medicina%20F%C3%ADsica%20y%20Rehabilitaci%C3%B3n/Medfisica_Bannerweb_medicos.jpg',
  },
  {
    nombre: 'Atención Hospitalaria',
    descripcion:
      'Brindamos servicios de hospitalización con atención profesional las 24 horas...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Centro%20Quirurgico/CENTRO_QUIR__RGICO_408_X_592.jpg',
  },
  {
    nombre: 'Emergencia Adulta',
    descripcion:
      'Atención inmediata y especializada para adultos en casos de urgencia...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Centro%20Quirurgico/CENTRO_QUIR__RGICO_408_X_592.jpg',
  },
  {
    nombre: 'Emergencia Pediátrica',
    descripcion:
      'Espacios diseñados y adaptados para la atención rápida y segura de emergencias en niños...',
    imagen:
      'https://www.stellamaris.com.pe/uploads/shares/servicios/Centro%20Quirurgico/CENTRO_QUIR__RGICO_408_X_592.jpg',
  },
];

const PresentacionServicios = () => {
  const [servicioActivo, setServicioActivo] = useState(servicios[0]);

  return (
    <section class="bg-[#FCFCFC] py-12 px-6 max-w-5xl mx-auto">
      <h2 class="text-3xl font-semibold text-center mb-4">Contáctanos</h2>
      <p class="text-lg text-center text-gray-700 mb-10">
        Deja tus datos y tu consulta, y nos comunicaremos contigo
      </p>
      <form class="space-y-6">
        <p class="text-gray-500 text-sm">Todos los campos son obligatorios</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Nombres" class="w-full px-4 py-3 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="text" placeholder="Apellidos" class="w-full px-4 py-3 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />

          <input type="email" placeholder="Email" class="w-full px-4 py-3 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="tel" placeholder="Teléfono" class="w-full px-4 py-3 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>

        <div class="space-y-2">
          <label class="text-gray-800 font-medium text-[17px]">Motivo de consulta *</label>
          <select class="w-full px-4 py-3 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option disabled selected>Seleccione un Motivo</option>
            <option>Consulta general</option>
            <option>Soporte técnico</option>
            <option>Otro</option>
          </select>
        </div>

        <div class="space-y-2">
          <label class="text-gray-800 font-medium text-[17px]">Consulta*</label>
          <textarea rows="5" class="w-full px-4 py-3 border border-blue-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
        </div>

        <div class="flex items-start space-x-2">
          <input type="checkbox" id="data" class="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <label for="data" class="text-sm text-gray-700">
            Cláusula informativa de <a href="#" class="text-blue-600 underline">Protección de Datos</a>
          </label>
        </div>

        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium">
          Enviar
        </button>
      </form>
    </section>

  );
};

export default PresentacionServicios;
