import React from "react";

const CardServicio = ({ servicio }) => {
  const {
    nombre,
    imagenUrl,
    colSpan = "",
    rowSpan = "",
    aspectRatio = "aspect-square",
  } = servicio;

  const imagenFinal =
    imagenUrl && imagenUrl !== "test"
      ? imagenUrl
      : "https://via.placeholder.com/600x400?text=Servicio+Médico";

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${colSpan} ${rowSpan} ${aspectRatio} shadow-md group`}
      style={{ minHeight: "200px" }}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
    >
      <img
        src={imagenFinal}
        alt={nombre}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <div>
          <p className="text-white text-sm font-semibold">Servicio destacado</p>
          <h3 className="text-white text-lg font-bold leading-tight">{nombre}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardServicio;
