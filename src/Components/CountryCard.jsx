import React from "react";
import "./CountryCard.css";

export default function CountryCard ({ country }) {
    console.log (country);

    return(

        // for getting the flag
        <div className="country-card">
            <img 
            src={country.flags.svg}
            alt= {`${ country.name.common } flag`}  
            className="flag" />
        
            <div className="info"> 
                <h2>{country.name.common}</h2> 
                <p><strong> Population:</strong>{country.population.toLocaleString()} </p>
                <p><strong>Region:</strong>{country.region}</p>
                <p><strong>Capital: </strong>{country.capital}</p>

            </div>
        </div>
    );
}

