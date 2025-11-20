const Country = ({ country }) => {
    const { name, capital, area, languages, flags } = country

    return (
        <div>
        <h1>{name.common}</h1>
        <p>Capital: {capital?.[0] || "N/A"}</p>
        <p>Area: {area}</p>

        <h2>Languages</h2>
        <ul>
            {Object.values(languages || {}).map((lang, i) => (
            <li key={i}>{lang}</li>
            ))}
        </ul>

        <img src={flags?.png || ""} alt={flags?.alt || name.common} width="150" />
        </div>
    )
}

export default Country
