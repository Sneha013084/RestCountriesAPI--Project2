
import React from 'react';


// // onchange is a callback function
 export default function FilterCountry ({onChange}){

//   // filter continents
   const regions = [

    { id: 1, name: "Africa" },
    { id: 2, name: "Antarctic" },
    { id: 3, name: "Asia" },
    { id: 4, name: "Europe" },
    { id: 5, name: "North America" },
    { id: 6, name: "Oceania" },
   ];
//  // defining a handler function (callback is RegionName)

  const filterHandler =  (e) => {
        const regionName = e.target.value;
        onChange(regionName);

  }


//   //drop down for filter by region, call function filterHandler onChange
      return (
            <div className='filter-container'>
        <select onChange = {filterHandler}>
            <option value= "all"> Filter by region</option>
            {regions.map((region) => (
               <option value= { region.name } key = { region.id } > {region.name} </option>
            ))}

            </select>
            </div>
      );
 }