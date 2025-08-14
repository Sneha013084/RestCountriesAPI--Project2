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





