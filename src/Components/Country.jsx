import React, { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom';
 
const Country = () => {
    const [country, setCountry] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const[error ,setError] = useState('');
    const {CountryName} =useParams()
   

    useEffect(() => {
        
        const getCountryByName= async () =>{
           try{ const res = await fetch (`https://restcountries.com/v3.1/name/${CountryName}?fullText=true`)
            
           if(!res.ok) throw new Error ("Failed to fetch")
           const data= await res.json();
            setCountry (data);
            setIsLoading(false);
        }catch(error){
            setIsLoading(false)
            setError(error.message);
        }
    };
        getCountryByName();
  },[countryName]);

    {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

       const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

    

  return (
    <>
    <button>
        <Link to= "/">Back </Link>
    </button>
    

     <div className='flag'>
            <img src={country.flags.png} alt= ""/>
        </div>

         <div className='country-details'>
            <div>
            <h2>{countryName.common}</h2>
                            <h5>Native Name:<span>{countryName.common}</span> </h5>
                            <h5>Population: <span>{population.toLocaleString()}</span></h5>
                            <h5>Region: <span>{region}</span></h5>
                            <h5>Sub Region: <span>{subRegion}</span></h5>
                            <h5>Capital : <span>{capital}</span></h5>
                            </div>
                            <div>
                            <h5>Top Level Domain :<span>{topLevelDomain?.[0].name}</span></h5>
                            <h5>Currencies: <span>{currencies && Object.values(currencies)[0].name}</span></h5>
                            <h5>Languages: <span>{languages&& Object.values(languages).join (",")}</span></h5>
                            </div>

                            <div>
                            <h5>Border Countries: {borders ? borders.join (",") : "None"}</h5> 
                            </div>
                        </div>

            
    </>
  );
}

export default Country;