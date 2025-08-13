import { useState, useEffect } from "react";
import "./App.css";
import CountryList from "./Components/CountryList";
import SearchBar from "./Components/SearchBar";
import FilterCountry from "./Components/FilterCountry";
import Header from "./Components/Header";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital";

function App() {
  //to pass the data : create a state variable
  const [countries, setCountries] = useState([]);

  // for searchbar changes
  const [searchName, setSearchName] = useState("");

  // its calling a function for fetchCountries by useEffect

  useEffect(() => {
    fetchCountries();
  }, []);

  // function for fetch countries

  const fetchCountries = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // if the data is coming set the country data.

      if (data) setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  //1. Ftlter country by name:
  // filter countries is a variable to store the the data is coming form the countires,filter by search name

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchName.toLowerCase())
  );
  console.log(filteredCountries, "filtercountries");

  //2. Filter country by region
  // fetch the data by region name and stored in a variable called res- variable

  const filterCountryByRegion = async (regionName) => {
    try {
      // if the user select the all value(filter by region option) - fetch all countries

      if (regionName === "all") {
        fetchCountries();
        return;
      }
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${regionName}?fields=name,flags,region,population,capital`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="app">
      <Header />

      <div className="controls">
      <SearchBar setSearchName={setSearchName} />
      <FilterCountry onChange={filterCountryByRegion} />
      </div>

      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;
