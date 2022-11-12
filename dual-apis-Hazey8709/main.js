//import { KEY_GIPHY } from "/apiKeys.js";

//! reprinting to DOM after save (Pokemon, People +1; every save)

//const storedData_1 = JSON.parse(localStorage.getItem("Pokemon"));
//const storedData_2 = JSON.parse(localStorage.getItem("People"));

//console.log(storedData_1);

const URL_Pokemon = "https://pokeapi.co/api/v2/pokemon/";
const URL_Swapi = "https://swapi.dev/api/people/";

const fetchedPokemon = () => {
    //if (storedData_1) [showPokemonData(storedData_1)];
    console.log("fetch Pokemon Data 1:");
    fetch(URL_Pokemon)
        .then((response) => {
            //console.log(response);
            return response.json();
        })

        .then((json) => {
            //console.log("JSON-Results 1:", json.results);
            localStorage.setItem("Pokemon", JSON.stringify(json.results));
            showPokemonData(json.results);
            return json;
        })
        .catch((err) => {
            console.log(err);
        });
};

const fetchedPeople = () => {
    //if (storedData_2) //[showPeopleData(storedData_2)];
    console.log("fetch People Data 2:");
    fetch(URL_Swapi)
        .then((response) => {
            //console.log(response);
            return response.json();
        })

        .then((json) => {
            //console.log("JSON-Results 2:", json.results);
            localStorage.setItem("People", JSON.stringify(json.results));
            showPeopleData(json.results);
            return json;
        })
        .catch((err) => {
            console.log(err);
        });
};

const app = () => {
    fetchedPokemon();
    fetchedPeople();
};

const showPokemonData = (data) => {
    const mainEl = document.querySelector("main");
    const olEl = document.createElement("ol");
    olEl.className = "olPokemonElement";

    mainEl.appendChild(olEl);

    if (!data) {
        fetchedPokemon();
    }

    if (data) {
        data.map((Pokemon) => {
            const pokemonName = `Pokemon Name: ${Pokemon.name}`;
            const pokemonURL = `Pokemon URL: ${Pokemon.url}`;

            //console.log({Pokemon})
            const liEl = document.createElement("li");
            const nameEl = document.createElement("h3");
            const URL = document.createElement("p");

            nameEl.innerText = pokemonName;
            URL.innerText = pokemonURL;

            liEl.appendChild(nameEl);
            liEl.appendChild(URL);
            olEl.appendChild(liEl);
            //console.log(Pokemon.name)
            //console.log(Pokemon.url);
        });
    }
};

const showPeopleData = (data) => {
    const mainEl = document.querySelector("main");
    const olEl = document.createElement("ol");
    olEl.className = "olPeopleElement";

    mainEl.appendChild(olEl);

    if (!data) {
        fetchedPeople();
    }

    if (data) {
        data.map((People) => {
            const peopleName = `Name: ${People.name}`;
            const peopleURL = `URL: ${People.url}`;

            //console.log({People})
            const liEl = document.createElement("li");
            const nameEl = document.createElement("h3");
            const URL = document.createElement("p");

            nameEl.innerText = peopleName;
            URL.innerText = peopleURL;

            liEl.appendChild(nameEl);
            liEl.appendChild(URL);
            olEl.appendChild(liEl);
            //console.log(People.name)
            //console.log(People.url);
        });
    }
};

(() => {
    app();
})();

// const handleGiphy = () => {
//     //console.log(searchQuery, "works");
//     // btn.addEventListener("click", (event) => {
//     //     handleClick(event);
//     //     //console.log(btn)
//     // } );
// };

// const handleClick = () => {
//     //console.log(handleClick);
//     //fetchGiphy()
// };

// const attachGif = (res, el) => {
//     const gif = res.data.images.url;
//     const img = document.createElement("img");
//     img.src = gif;
//     el.appendChild(img);
// };
