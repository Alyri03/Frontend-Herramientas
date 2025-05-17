import React from "react";

const CardServicio = ({ servicio }) => {
  const {
    titulo,
    imagenUrl,
    colSpan = "",
    rowSpan = "",
    aspectRatio = "aspect-square",
  } = servicio;

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${colSpan} ${rowSpan} ${aspectRatio} shadow-md group`}
      style={{ minHeight: "200px" }}
      data-aos="fade-up"               
      data-aos-delay="100"         
      data-aos-duration="800"        
    >
      <img
        src={imagenUrl}
        alt={titulo}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <div>
          <p className="text-white text-sm font-semibold">Servicio destacado</p>
          <h3 className="text-white text-lg font-bold leading-tight">{titulo}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardServicio;
