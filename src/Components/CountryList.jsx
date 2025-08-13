
import React from "react";
import "./CountryList.css";
import CountryCard from "./CountryCard";


//destructing: countries
export default function CountryList ({countries}) {

  
    return(
        <div className="country-list"> 
        { countries.map((countryData, index) =>{

             return < CountryCard 
             key ={index}
             country = {countryData}
             />
        })
        }
        </div>

    )

}

