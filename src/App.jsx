import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountryList from "./Components/CountryList";
import SearchBar from "./Components/SearchBar";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region";

function App() {
  //to pass the data : create a state variable
  const [countries, setCountries] = useState([]);

  // for searchbar changes

  const [searchName, setSearchName] = useState('');


  useEffect(() => {
    fetchCountries(); // its calling a function for fetchCountries
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // if the data is coming setthe country data.
      if (data) setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

   //filter countries by search name
   
  const filteredCountries = countries.filter(country =>
  country.name.common.toLowerCase().includes(searchName.toLowerCase()));
  console.log (filteredCountries,"filtercountries")

  return (
    <div className="app">
      <SearchBar setSearchName = {setSearchName}/>
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;
