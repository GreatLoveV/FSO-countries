import { useState, useEffect } from "react"
import api from './services/api'
import DisplayCountries from "./components/DisplayCountries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [newValue, setNewValue] = useState('')

  useEffect(()=>{
    api
      .getAll()
      .then(initialCountries =>{
        setCountries(initialCountries)
      })
  }, [])

  const handleSearchChange = (event)=>{
    setNewValue(event.target.value)
  }

  const filteredCountries = newValue.trim() === ""
    ? []
    : countries.filter(country => country.name.common.toLowerCase().includes(newValue.toLowerCase()))
    
  return(
    <div>
      find countries
      <input type="search" value={newValue} onChange={handleSearchChange} />
      <DisplayCountries countries={filteredCountries}/>
    </div>
  )
}

export default App