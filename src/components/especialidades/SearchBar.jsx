"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className="relative max-w-md mx-4">
      <input type="text" placeholder="Buscar especialidad"
        className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-700">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  )
}

export default SearchBar
