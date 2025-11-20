import Country from "./Country"

const DisplayCountries = ({ countries, showCountry }) => {

        if (countries.length === 1) {
        const country = countries[0]
        return <Country country={country} />
        }

        if (countries.length < 10 && countries.length > 0) {
        return countries.map(country => (
        <p key={country.cca3}>
                {country.name.common}{" "}
                <button onClick={() => showCountry(country.cca3)}>show</button>
        </p>
        ))
        }

        if (countries.length === 0) {
        return <p>No countries match the filter.</p>
        }

        return <p>Too many matches, specify another filter</p>
        }

export default DisplayCountries
