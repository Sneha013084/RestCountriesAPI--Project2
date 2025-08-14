import { useState, useEffect } from "react";
import "./App.css";
import CountryList from "./Components/CountryList";
import SearchBar from "./Components/SearchBar";
import FilterCountry from "./Components/FilterCountry";
import Header from "./Components/Header";
import { Routes, Route} from "react-router-dom";
//import Country from "./Components/Country";


function App() {


  //1. Ftlter country by name:
  // filter countries is a variable to store the the data is coming form the countires,filter by search name

  // // const filteredCountries = countries.filter((country) =>
  // //   country.name.common.toLowerCase().includes(searchName.toLowerCase())
  // // );


  // //2. Filter country by region
  // // fetch the data by region name and stored in a variable called res- variable

  // const filterCountryByRegion = async (regionName) => {
  //   try {
  //     // if the user select the all value(filter by region option) - fetch all countries

  //     if (regionName === "all") {
  //       fetchCountries();
  //       return;
  //     }
  //     const res = await fetch(
  //       `https://restcountries.com/v3.1/region/${regionName}?fields=name,flags,region,population,capital`
  //     );
  //     const data = await res.json();
  //     setCountries(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //   // Decide which element to render for "/"
  // const homeElement =
  //   filteredCountries.length === 1 ? (
  //     <Country countryData={filteredCountries[0]} />
  //   ) : (
  //     <CountryList countries={filteredCountries} />
  //   );

  
    return (
    <>
      <Header />
      <div className="controls">
        <SearchBar onSearch ={getCountryByName}/>
       <FilterCountry onChange={filterCountryByRegion} />  
      </div>
  <Routes>
        <Route  path="/" element={ <CountryList/>} />
        <Route path="/countries/:countryName" element={<Country />} />
      </Routes>
    </>
  );
}

      

export default App;
