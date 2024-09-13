// Array of objects with countries and their respective cities
const countries = [
    { name: "USA", cities: ["New York", "Los Angeles"] },
    { name: "India", cities: ["Mumbai", "Delhi"] },
    { name: "UK", cities: ["London", "Manchester"] },
    // Add more countries and cities here
];

// Populate the dropdown with country names
window.onload = function() {
    const countrySelect = document.getElementById("country");

    // Using map to populate the dropdown
    countries.map(country => {
        const option = document.createElement("option");
        option.value = country.name;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    });
}

// Function to display cities based on selected country
function displayCities() {
    const countrySelect = document.getElementById("country");
    const selectedCountry = countrySelect.value;
    const citiesDiv = document.getElementById("cities");

    // Clear the div before displaying new cities
    citiesDiv.innerHTML = "";

    if (selectedCountry) {
        // Using filter to find the selected country
        const filteredCountry = countries.filter(country => country.name === selectedCountry);

        // If the country is found, use map to display its cities
        if (filteredCountry.length > 0) {
            filteredCountry[0].cities.map(city => {
                const cityElement = document.createElement("div");
                cityElement.textContent = city;
                citiesDiv.appendChild(cityElement);
            });
        }
    }
}
