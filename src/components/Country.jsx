import {useState, useEffect} from 'react'

const Country = ({ country }) => {
    const { name, capital, area, languages, flags } = country

    const [weather,setWeather] = useState(null)
    const api_key = import.meta.env.VITE_WEATHER_KEY

    useEffect(()=>{
        if (!capital || capital.length === 0) return
        const city = capital[0]
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setWeather(data)
        })
        .catch(err => console.error("Weather error:", err))
    }, [capital, api_key])



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
        {weather && weather.main ? (
            <div>
                <h2>Weather in {capital[0]}</h2>
                <p>Temperature: {weather.main.temp} °C</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt="weather icon" />
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>
            ): (
                <p>Loading weather...</p>
            )
            }
        </div>

        
    )
}

export default Country
