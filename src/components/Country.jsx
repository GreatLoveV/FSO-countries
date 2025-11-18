const Country = ({name, capital, area, languages, flag}) =>{
    return (
        <div>
            <h1>{name}</h1>
            <p>Capital {capital}</p>
            <p>Area {area}</p>
            <h1>Languages</h1>
            <ul>
                {languages.map((lang, i)=>(
                    <li key={i}>{lang}</li>
                ))}
            </ul>
            <img src={flag.png} alt={flag.alt || name} width="150"/>
        </div>
    )

}
export default Country