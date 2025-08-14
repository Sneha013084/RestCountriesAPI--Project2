import React, { useState, useEffect } from "react";
import "./CountryList.css";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital";

//destructing: countries

const CountryList = () => {
  //to pass the data : create a state variable

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // function for fetch countries

  const fetchCountries = async () => {
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
    try {
      const res = await fetch(`${API_URL}/name/${countryName}`);
      if (!res.ok) throw new Error("Not found any country !");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  // its calling a function for fetchCountries by useEffect

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
     <>
        <SearchBar onSearch ={getCountryByName}/> 

    <div className="country-list">
      {countries?.map((country) => (
       <div className="country-card">
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
      ))}
      </div>
    </>
)
};
export default CountryList;
