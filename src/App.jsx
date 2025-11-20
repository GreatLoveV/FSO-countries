import { useState, useEffect } from "react"
import api from './services/api'
import DisplayCountries from "./components/DisplayCountries"
import Country from "./components/Country"

const App = () => {
  const [countries, setCountries] = useState([])
  const [newValue, setNewValue] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    api.getAll().then(initialCountries => {
      setCountries(initialCountries)
    })
  }, [])

  const handleSearchChange = (event) => {
    setNewValue(event.target.value)
    setSelectedCountry(null)
  }

  const showCountry = (cca3) => {
    const found = countries.find(country => country.cca3 === cca3)
    setSelectedCountry(found)
  }

  const filteredCountries = selectedCountry
    ? []
    : newValue.trim() === ""
      ? []
      : countries.filter(country =>
          country.name.common.toLowerCase().includes(newValue.toLowerCase())
        )

  return (
    <div>
      <h2>Find countries</h2>
      <input type="search" value={newValue} onChange={handleSearchChange} />

      {selectedCountry ? (
        <Country country={selectedCountry} />
      ) : (
        <DisplayCountries countries={filteredCountries} showCountry={showCountry} />
      )}
    </div>
  )
}

export default App
