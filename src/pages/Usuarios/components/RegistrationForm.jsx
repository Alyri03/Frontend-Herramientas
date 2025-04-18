"use client"

import FormField from "./FormField"
import SelectField from "./SelectField"
import DateField from "./DateField"
import CheckboxField from "./CheckboxField"

const RegistrationForm = ({ formData, setFormData, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SelectField
          label="Tipo de Documento"
          name="documentType"
          value={formData.documentType}
          onChange={handleChange}
          options={[
            { value: "DNI", label: "DNI" },
            { value: "Pasaporte", label: "Pasaporte" },
            { value: "CE", label: "Carnet de Extranjería" },
          ]}
        />

        <FormField
          label="Número de Documento"
          name="documentNumber"
          type="text"
          value={formData.documentNumber}
          onChange={handleChange}
        />
      </div>

      <FormField
        label="Apellido Paterno"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
      />

      <FormField
        label="Apellido Materno"
        name="motherLastName"
        type="text"
        value={formData.motherLastName}
        onChange={handleChange}
      />

      <FormField label="Nombres" name="firstName" type="text" value={formData.firstName} onChange={handleChange} />

      <FormField label="Correo electrónico" name="email" type="email" value={formData.email} onChange={handleChange} />

      <FormField label="Teléfono" name="phone" type="tel" value={formData.phone} onChange={handleChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <DateField label="Fecha de nacimiento" name="birthDate" value={formData.birthDate} onChange={handleChange} />

        <SelectField
          label="Género"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { value: "M", label: "Masculino" },
            { value: "F", label: "Femenino" },
          ]}
        />
      </div>

      <FormField label="Dirección" name="address" type="text" value={formData.address} onChange={handleChange} />

      <div className="mt-8 space-y-4">
        <CheckboxField
          name="infoVerified"
          checked={formData.infoVerified}
          onChange={handleChange}
          label={
            <span>
              Declaro que la <span className="text-blue-600 font-medium">información proporcionada es verdadera</span>
            </span>
          }
        />

        <CheckboxField
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          label={
            <span>
              He leído y acepto los{" "}
              <span className="text-blue-600 font-medium">términos y condiciones, políticas de privacidad</span>.
            </span>
          }
        />
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
      >
        Registrarme
      </button>
    </form>
  )
}

export default RegistrationForm
