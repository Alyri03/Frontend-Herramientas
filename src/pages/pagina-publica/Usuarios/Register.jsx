import { useState } from "react";
import RegistrationForm from "@/pages/pagina-publica/Usuarios/components/RegistrationForm";
import RegistrationIllustration from "@/pages/pagina-publica/Usuarios/components/RegistrationIllustration";


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
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4 md:p-8">
      {}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row rounded-xl shadow-lg overflow-hidden">
        { }
        <RegistrationIllustration />

        { }
        <div className="flex-1 flex items-center justify-center p-6 md:p-8 lg:p-10 bg-white">
          <div className="w-full max-w-md">
            <button className="flex items-center text-gray-600 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Volver
            </button>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registro de nuevo usuario</h1>
            <p className="text-gray-600 mb-8">Ingresa tus datos personales para crear una cuenta.</p>

            <RegistrationForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register