import axios, {defaults} from 'axios';

////////////////////////////  DATA OPHALEN   //////////////////////////////

    // 1. async functie aanmaken met try-catch blok
    // 2. sorteren op populatie met .sort(a, b)
    // 3. functie aanroepen
async function getCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag,population');
        const countries = result.data;

        countries.sort((a, b) => {
            return a.population - b.population;
        });

        createListItems(countries);

    } catch (e) {
        console.error(e);
    }
}

getCountries();


////////////////////////////  LijST MAKEN  /////////////////////////////

    // 1. maak functie om items toe te voegen createList
function createListItems(countries) {
    const countryList = document.getElementById('country-list');
    // 2. maak functie binnen functie om li element aan te maken
    countries.map((country) => {
        const countryElement = document.createElement('li');
        // 3. voeg met .innerHTML de foto van vlag, regio en populatie met zin toe
        countryElement.innerHTML = `
            <img src="${country.flag}" class="flag"/>
            <span class="${colorRegion(country.region)}">${country.name}</span>
            <p class="population">Has a population of ${country.population} people</p>
        `;

        // 4. appendChild aan UL toevoegen
        countryList.appendChild(countryElement);
    });
}



//////////////////////////  KLEUR GEVEN AAN REGIO   ////////////////////

function colorRegion(currentRegion) {
    switch (currentRegion)  {
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'default';
    }
}