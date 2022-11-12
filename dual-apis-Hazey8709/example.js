// const storedData_2 = JSON.parse(localStorage.getItem("People"));

// //console.log(storedData);

// const URL_Swapi = "https://swapi.dev/api/people/";

// const fetchedPeople = () => {
//     if (storedData_2) [showPeopleData(storedData_2)];
//     console.log("fetch New Data 2:");
//     fetch(URL_Swapi)
//         .then((response) => {
//             //console.log(response);
//             return response.json();
//         })

//         .then((json) => {
//             //console.log("JSON-Results 2:", json.results);
//             localStorage.setItem("People", JSON.stringify(json.results));
//             showPeopleData(json.results);
//             return json;
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// const app = () => {
//     fetchedPeople();
// };

// const showPeopleData = (data) => {
//     const mainEl = document.querySelector("main");
//     const olEl = document.createElement("ol");

//     mainEl.appendChild(olEl);

//     if (!data) {
//         fetchedPeople();
//     }

//     if (data) {
//         data.map((People) => {
//             const peopleName = `Name: ${People.name}`;
//             const peopleURL = `URL: ${People.url}`;

//             //console.log({People})
//             const liEl = document.createElement("li");
//             const nameEl = document.createElement("h3");
//             const URL = document.createElement("p");

//             nameEl.innerText = peopleName;
//             URL.innerText = peopleURL;

//             liEl.appendChild(nameEl);
//             liEl.appendChild(URL);
//             olEl.appendChild(liEl);
//             //console.log(People.name)
//             //console.log(People.url);
//         });
//     } else {
//         console.log("Error, Something went wrong in data.map");
//     }
// };

// (() => {
//     app();
// })();
