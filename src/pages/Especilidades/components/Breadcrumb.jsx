import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

const Breadcrumb = () => {
  return (
    <nav className="flex items-center text-sm text-gray-600 py-2 mx-6">
      <a href="/" className="flex items-center hover:text-[#1B669A] transition-colors">
        <FontAwesomeIcon icon={faHome} className="mr-1" size="sm" />
      </a>
      <span className="mx-2">/</span>
      <span className="text-gray-500">Especialidades</span>
    </nav>
  )
}

export default Breadcrumb
