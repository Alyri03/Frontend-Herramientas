import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SpecialtyCard = ({ titulo, icono }) => {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left cursor-pointer w-72">
        <div className="flex flex-col items-start">
          <div className="bg-blue-700 rounded-full p-4 text-white flex items-center justify-center w-16 h-16 mb-3">
            <FontAwesomeIcon icon={icono} size="lg" />
          </div>
          <h3 className="font-medium text-black text-sm">{titulo}</h3>
        </div>
      </div>
    )
  }

export default SpecialtyCard
