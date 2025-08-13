
import React ,{ useState } from "react";
import "./SearchBar.css";

export default function SearchBar({setSearchName}){

    function OnChange (event) {
        setSearchName(event.target.value);
    }
    
    return(
        <div className="search-bar">
            <input type="text" placeholder="Search for a country..."
            onChange ={OnChange}/>
        </div>

    );
}
