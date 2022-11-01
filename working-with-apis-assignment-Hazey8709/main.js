"use strict";
(() => {
    //! URL LINK
    const url = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;

    //! Fetching data/url
    let fetchData = () =>
        fetch(url)
            .then((response) => response.json())
            .then((json) => handleApi(json))
            .catch((error) => handleError(error));

    fetchData();

    //! Handle Api data
    const handleApi = (Api) => {
        //console.log(Api);

        const category = Api.category;
        const setup = Api.setup;
        const punchLine = Api.delivery;

        // console.log(category);
        // console.log(setup);
        // console.log(punchLine);

        let joke = {
            category,
            setup,
            punchLine,
        };
        newJoke(joke);
        //fetchData();
    };

    const newJoke = (data) => {
        categoryEl.innerHTML = data.category;
        setupEl.innerHTML = data.setup;
        punchLineEl.innerHTML = data.punchLine;
    };

    //! Error Handling
    const handleError = (error) => {
        console.log(error, "Something went wrong");
    };

    //! Handle Click
    const handleClick = (e) => {
        fetchData(e);
    };

    const categoryEl = document.querySelector("p");
    const setupEl = document.querySelector("h4");
    const punchLineEl = document.querySelector("h3");

    const buttonClick = document.querySelector("button");

    buttonClick.addEventListener("click", (event) => {
        handleClick(event);
    });
})();
