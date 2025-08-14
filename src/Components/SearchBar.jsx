
import React ,{ useState } from "react";
import "./SearchBar.css";

 const SearchBar = (onSearch) =>{

    
  // for searchbar changes
  const [searchName, setSearchName] = useState("");
    

  const handleSubmit = (event) => {
    event.preventDefault ();
    if (onSearch) {
        onSearch(searchName);
    }
  }
    
    
    return(
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a country..."
            value={searchName}
            onChange ={(event)=> setSearchName(event.target.value)}/>
           
        </form>

    );
}
export default SearchBar;
