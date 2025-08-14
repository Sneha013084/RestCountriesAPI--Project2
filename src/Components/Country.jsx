// import React, { useEffect, useState } from 'react'
// import { Link, useParams} from 'react-router-dom';
 
// const Country = ({countryData}) => {
//     const [country, setCountry] = useState (countryData || null);
//     const {name} =useParams()

//     useEffect(() => {
//         if(!countryData&& name) {
//         const fetchCountryData = async () =>{
//            try{ const res = await fetch (`https://restcountries.com/v3.1/name/${name}?fullText=true`)
//             const country = await res.json();
//             setCountry (country[0]);
//         }catch(error){
//             console.log(error);
//         }
//     };
//         fetchCountryData()
// }
//     }, [name, countryData]);

//      const {flags, countryName, nativeName, 
//                 population,region,subRegion,
//                 capital,tld:topLevelDomain, currencies, 
//                 languages,borders } =country || {};

//   return (
//     <>
//     <Link to= "/" className='btn btn -light'>
//         <i className= "fas fa-arrow-left"> </i> Back
//         Home
//     </Link>
    
//     <section className='country'>

//                     <article>
//                         <div className='flag'>
//                         <img src={flags?.png} alt={name}/>
//                         </div>
//                         <div className='country-details'>
//                             <div>
//                             <h2>{countryName.common}</h2>
//                             <h5>Native Name:<span>{countryName.common}</span> </h5>
//                             <h5>Population: <span>{population.toLocaleString()}</span></h5>
//                             <h5>Region: <span>{region}</span></h5>
//                             <h5>Sub Region: <span>{subRegion}</span></h5>
//                             <h5>Capital : <span>{capital}</span></h5>
//                             </div>
//                             <div>
//                             <h5>Top Level Domain :<span>{topLevelDomain?.[0].name}</span></h5>
//                             <h5>Currencies: <span>{currencies && Object.values(currencies)[0].name}</span></h5>
//                             <h5>Languages: <span>{languages&& Object.values(languages).join (",")}</span></h5>
//                             </div>

//                             <div>
//                             <h5>Border Countries: {borders ? borders.join (",") : "None"}</h5> 
//                             </div>
//                         </div>

//                     </article>
//     </section>
//     </>
//   )
// }

// export default Country;