"use strict";
(() => {
    const api = {
        activities: [
            {
                activity: "Start a band",
                type: "music",
                participants: 4,
                price: 0.3,
                link: "",
                key: "5675880",
                accessibility: 0.8,
            },
            {
                activity: "Host a movie marathon with some friends",
                type: "social",
                participants: 3,
                price: 0.1,
                link: "",
                key: "5914292",
                accessibility: 0,
            },
            {
                activity: "Think of a new business idea",
                type: "recreational",
                participants: 1,
                price: 0,
                link: "",
                key: "6808057",
                accessibility: 0.05,
            },
            {
                activity: "Catch up with a friend over a lunch date",
                type: "social",
                participants: 2,
                price: 0.2,
                link: "",
                key: "5590133",
                accessibility: 0.15,
            },
            {
                activity: "Learn the NATO phonetic alphabet",
                type: "education",
                participants: 1,
                price: 0,
                link: "https://en.wikipedia.org/wiki/NATO_phonetic_alphabet",
                key: "6706598",
                accessibility: 0,
            },
            {
                activity: "Compliment someone",
                type: "social",
                participants: 2,
                price: 0,
                link: "",
                key: "9149470",
                accessibility: 0,
            },
            {
                activity: "Go on a fishing trip with some friends",
                type: "social",
                participants: 3,
                price: 0.4,
                link: "",
                key: "3149232",
                accessibility: 0.4,
            },
        ],
    };
    console.log(api);
    console.log("Exercise 4");

    //! Third activity Object
    console.log("1: Third activity in List");

    //console.log(api.activities[3]);

    let thirdActivity = api.activities[3];
    console.log(thirdActivity);

    //! Array for 3 or more people
    console.log("2: Array for 3 or more");
    let activities = api.activities;
    //console.log(activities)

    for (let i = 0; i < activities.length; i++) {
        if (activities[i].participants >= 3) {
            console.log(activities[i]);
        }
    }

    //! Sorted by Key
    console.log("3: Sorted by Key");

    activities.sort(function (a, b) {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;
        return 0;
    });
    console.log(activities);

    /*
     *       Instructions:
     *
     *       1. Create and output to console a variable containing the third activity in the list
     *       2. Create and output to console an array containing activities for 3 or more people
     *       3. Create and output to console an array of all activities sorted by key
     *
     *       Hint: Changing a string to a number can be done with parseInt or parseFloat
     *       Hint: Sorting an array can be done with Array.sort((a,b) => a.value -  b.value)
     */
})();
