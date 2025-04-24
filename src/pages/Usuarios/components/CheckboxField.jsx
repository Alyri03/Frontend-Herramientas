"use client"

const CheckboxField = ({ name, checked, onChange, label }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="text-gray-700">
          {label}
        </label>
      </div>
    </div>
  )
}

export default CheckboxField
