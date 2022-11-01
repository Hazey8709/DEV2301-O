'use strict';
(() => {
    // Set URL of API
const url = `https://api.github.com/users/brandonbrown`

const handleError = (error) => {
    console.log("API has run into an error!");
    console.error(error);
}

const handleAPI = (api) => {
    const name = api.login;
    const location = api.location;
    const url = api.html_url;

    const profile = {
        name,
        location,
        url
    }

    console.table(profile)
}

fetch(url) // Create Promise
    .then(response => response.json()) // Run .json() prototype method on body response
    .then(data => {
        console.log(data);
        handleAPI(data);
        // throw new Error('Promise Rejected') // Reject Promise
    }) // Access JSON response
    .catch(error => handleError(error)) // If Promise is rejected

})()