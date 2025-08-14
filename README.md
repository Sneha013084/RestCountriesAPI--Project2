## Project Overview

A React-based web application that displays countries from the REST Countries API. Users can:

    View all countries with details (flag, population, region, capital).

    Search countries by name.

    Filter countries by region.

    Experience responsive design for desktops, tablets, and mobile devices.

## The Challenges

Responsive Card Design: Cards had fixed width and didn’t shrink on smaller screens.Solution: Used flex: 1 1 <value> with min-width and max-width, and adjusted media queries.

Flexbox Wrapping: Cards were centered but didn’t reduce size properly.Solution: Changed justify-content to flex-start on desktop/tablet and center only on small mobile screens.

API Handling: Multiple fetch requests needed proper loading and error handling.Solution: Created separate async functions with try-catch for each case.

Dropdown Filter Callback: Dropdown didn’t update the country list on selection.Solution: Passed a callback from CountryList to FilterCountry and called it on onChange.

Flag Image Scaling: Flag images were too tall for mobile cards. Solution: Used object-fit: cover and reduced height in media queries.

Search + Filter Combination:Search and filter interfered with each other.Solution: Applied separate state updates and fetch logic for each feature.

## Screenshot

## Light mode:
<img width="1908" height="1016" alt="image" src="https://github.com/user-attachments/assets/dbd3550a-9c61-479d-b966-a922a934ccc7" />

## Dark mode
<img width="1869" height="1039" alt="image" src="https://github.com/user-attachments/assets/d54d3c3b-dd12-4bc1-947b-9e84645b62c9" />

## Responsive view
<img width="309" height="1010" alt="image" src="https://github.com/user-attachments/assets/fc5e5c60-a409-4eba-aaf8-cd5656b5e100" />

## Endpoints used

https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital - Fetch all countries

https://restcountries.com/v3.1/name/{countryName} - Fetch country by name

https://restcountries.com/v3.1/region/{regionName} - Fetch country by region

## My process

Project Setup

Initialized a React project using create-react-app or Vite.

Set up React Router for routing between the homepage (country list) and country details page.

        - Header.jsx
        - CountryList.jsx
        - Country.jsx
        - SearchBar.jsx
        - FilterCountry.jsx
    App.jsx
    App.css

Fetching data with the help of useEffect

Search Functionality: Triggered an API call to fetch a country by name when the user enters input and submits.Displayed results dynamically in the CountryList component.

Filter by Region :Created a FilterCountry component with a dropdown for continents/regions.

Country Details Page :Configured a Country component for dynamic routing using react-router-dom.

## Built with

React.js – Frontend library for building the UI and components.

React Router DOM – For routing between the home page and country details page.

JavaScript (ES6+) – Core programming language for logic, state, and API calls.

REST Countries API – Public API for fetching country data.

CSS / Flexbox / Media Queries – Styling, responsive layout, and card design.

HTML5 – Markup for structuring components.

VS Code – Code editor for development.

Browser DevTools – Debugging and testing responsive layouts.

## What I learned

React Hooks: Gained experience using useState for state management and useEffect for lifecycle methods.

Component Design: Learned how to build reusable components like CountryCard, SearchBar, and FilterCountry.

Routing with React Router: Implemented client-side routing to navigate between a list of countries and individual country detail pages.

Conditional Rendering: Displayed loading states, error messages, and filtered results based on user input.

## Continued developement

Error Handling & User Feedback

        Show clear error messages if API calls fail.

        Indicate when no countries match the filter/search criteria.

Detailed Country Pages

        Add more detailed information on the individual country page (languages, currencies, borders, maps).

Navigation through back button

## Author

 SnehaKurian
 GitHub Link : https://github.com/Sneha013084/RestCountriesAPI--Project2

 ## Project Deployment URL :

         https://sneha013084.github.io/RestCountriesAPI--Project2/
 








