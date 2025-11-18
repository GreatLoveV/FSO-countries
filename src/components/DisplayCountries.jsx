import Country from "./Country";


const DisplayCountries = ({countries}) =>{
        if (countries.length === 1) {
                const country = countries[0]
                return (
                        <Country name={country.name.common}
                        capital={country.capital}
                        area = {country.area}
                        languages = {Object.values(country.languages)}
                        flag = {country.flags}/>
                )
        }
        if (countries.length < 10) {
                return countries.map(country=>(
                <p key={country.name.common}>{country.name.common}</p>
                )
        )} else{
                return <p>Too many matches, specify another filter</p>
        }
}

export default DisplayCountries