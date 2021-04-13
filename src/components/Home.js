import React, { useEffect, useState } from 'react'
import './css/style.css'

function Home() {

    let [searchedCountry, setSearchedCountry] = useState()
    let [allCountryList, setAllCountryList] = useState([])
    let [inputCountryList, setInputCountryList] = useState([])
    let [input, setInput] = useState("")

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAllCountryList(data)
            })
    }, [])

    const inputChange = (e) => {
        setInput(e.target.value)
        if (e.target.value === "") {
            setInputCountryList([])
            return
        }
        const fileteredCountries = allCountryList.filter((country) => {
            return country.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setInputCountryList(fileteredCountries)
    }

    const getCountry = (e) => {
        // console.log(e.target.innerText);
        const country = allCountryList.filter((country) => {
            return (country.name.toLowerCase() === e.target.innerText.toLowerCase())
        })
        // console.log(country[0]);
        setSearchedCountry(country[0])
        setInputCountryList([])
        setInput(country[0].name)
    }

    return (
        <section>
            <input
                type="text"
                placeholder="Search For A Country"
                value={input}
                onChange={inputChange}
            />
            {inputCountryList.map((country) => {
                return <button onClick={getCountry} key={country.name}>{country.name}</button>
            })}
            {searchedCountry ?
                <div className="result">
                    <img src={searchedCountry.flag} alt={searchedCountry.name} />
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{searchedCountry.name}</td>
                            </tr>
                            <tr>
                                <th>Capital</th>
                                <td>{searchedCountry.capital}</td>
                            </tr>
                            <tr>
                                <th>Area</th>
                                <td>{searchedCountry.area / 1000000} million km<sup>2</sup></td>
                            </tr>
                            <tr>
                                <th>Population</th>
                                <td>{searchedCountry.population / 1000000000}</td>
                            </tr>
                            <tr>
                                <th>Continent</th>
                                <td>{searchedCountry.region}</td>
                            </tr>
                            <tr>
                                <th>Sub-Continent</th>
                                <td>{searchedCountry.subregion}</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <p>Timezone - {searchedCountry.timezones.map((elem) => <span key={elem}>{elem} </span>)}</p>
                    <p>Top Level Domain - {searchedCountry.topLevelDomain.map((elem) => <span key={elem}>{elem}</span>)}</p> */}
                </div> : null}
        </section>
    )
}

export default Home
