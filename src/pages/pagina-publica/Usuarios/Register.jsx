import { useState } from "react";
import RegistrationForm from "@/pages/pagina-publica/Usuarios/components/RegistrationForm";
import loginImg from "../../../assets/images/imgRegistro.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    documentType: "DNI",
    documentNumber: "",
    lastName: "",
    motherLastName: "",
    firstName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    address: "",
    termsAccepted: false,
    infoVerified: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Ilustración (oculta en pantallas pequeñas) */}
      <div className="hidden md:flex w-1/2 bg-[#ffffff] items-start justify-center pt-10">
        <div className="bg-[#e4e9f5] rounded-3xl w-[740px] h-[92%] flex items-end justify-center overflow-hidden">
          <img
            src={loginImg}
            alt="Registro Ilustración"
            className="w-[99%] object-contain mb-0"
          />
        </div>
      </div>

      {/* Formulario */}
      <div className="flex w-full md:w-[50%] items-center justify-center px-4 sm:px-12">
        <div className="w-full max-w-2xl">
          <Link
            to="/login"
            className="flex items-center text-gray-600 mb-6 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Volver al login
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Registro de nuevo usuario
          </h1>
          <p className="text-gray-600 mb-8">
            Ingresa tus datos personales para crear una cuenta.
          </p>

          <RegistrationForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
