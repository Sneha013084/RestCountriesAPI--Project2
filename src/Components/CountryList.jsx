import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilterCountry from './FilterCountry';

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital";

//destructing: countries

const CountryList = () => {
  //to pass the data : create a state variable

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
    // for searchbar changes
  const [searchName, setSearchName] = useState("");
    


   const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchName.toLowerCase())
  );

  // function for fetch countries

  const getCountryList = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();

      // if the data is coming set the country data.
      console.log(data);

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {

    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      if (!res.ok) throw new Error("Not found any country !");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };


  const getCountryByRegion =async(regionName) =>{
    try{
        const res= await fetch (`https://restcountries.com/v3.1/region/${regionName}`);
        if(!res.ok) throw new Error("Failed to fetch")
            const data = await res.json();
        setCountries(data);
        setIsLoading(false)
    }catch(error){
        setIsLoading(false);
        setError(false);
    }
  }
  // its calling a function for fetchCountries by useEffect

  useEffect(() => {
    getCountryList();
  }, []);

  return (
     <div className="container">
     <div className="controls"> 
        <SearchBar onSearch ={getCountryByName}/>
        <FilterCountry onSelect ={getCountryByRegion} />
    </div>

    <div className="other">
        {isLoading && !error && <h4>Loading...</h4>}
        {!isLoading && error && <h4> {error}</h4>}
 
    </div>

    <div className="country-list">
      {countries?.map((country) => (
        <Link to={`/country/${country.name.common}`}>
       <div className="country-card" key={country.name?.common}>
            <img 
            src={country.flags.svg}
            alt= {`${ country.name?.common } flag`}  
            className="flag" />
        
            <div className="info"> 
                <h2>{country.name.common}</h2> 
                <p><strong> Population:</strong>{country.population.toLocaleString()} </p>
                <p><strong>Region:</strong>{country.region}</p>
                <p><strong>Capital: </strong>{country.capital?.[0]}</p>
                
            </div>
        </div>
        </Link>
      ))}
      </div>
      </div>
  
)
};
export default CountryList;
