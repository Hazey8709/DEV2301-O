"use strict";
(() => {
    const api = {
        id: 360,
        uid: "s:600~t:360",
        location: "Manchester, England",
        name: "Manchester United",
        abbreviation: "MAN",
        displayName: "Manchester United",
        shortDisplayName: "Man United",
        isActive: true,
        logos: [
            {
                href: "https://a.espncdn.com/i/teamlogos/soccer/500/360.png",
                width: 500,
                height: 500,
                alt: "",
                rel: ["full", "default"],
                lastUpdated: "2019-05-08T16:07Z",
            },
        ],
        note: {
            color: "#81D6AC",
            description: "Champions League",
            rank: 2,
        },
        squad: [
            {
                id: 1001,
                first_name: "Eric",
                last_name: "Bailly",
                position: "Defender",
                image: "ericbailly.jpg",
            },
            {
                id: 1017,
                first_name: "David",
                last_name: "De Gea",
                position: "Goalkeeper",
                image: "daviddegea.jpg",
            },
            {
                id: 1706,
                first_name: "Ander",
                last_name: "Herrera",
                position: "Midfielder",
                image: "anderherrera.jpg",
            },
            {
                id: 1044,
                first_name: "Zlatan",
                last_name: "Ibrahimovic",
                position: "Striker",
                image: "zlatanibrahimovic.jpg",
            },
            {
                id: 1705,
                first_name: "Phil",
                last_name: "Jones",
                position: "Defender",
                image: "philjones.jpg",
            },
            {
                id: 1031,
                first_name: "Juan",
                last_name: "Mata",
                position: "Midfielder",
                image: "juanmata.jpg",
            },
            {
                id: 2202,
                first_name: "Henrikh",
                last_name: "Mkhitaryan",
                position: "Midfielder",
                image: "henrikhmkhitaryan.jpg",
            },
            {
                id: 1034,
                first_name: "Paul",
                last_name: "Pogba",
                position: "Midfielder",
                image: "paulpogba.jpg",
            },
            {
                id: 1204,
                first_name: "Marcus",
                last_name: "Rashford",
                position: "Striker",
                image: "marcusrashford.jpg",
            },
            {
                id: 1704,
                first_name: "Antonio",
                last_name: "Valencia",
                position: "Defender",
                image: "antoniovalencia.jpg",
            },
            {
                id: 1723,
                first_name: "Luke",
                last_name: "Shaw",
                position: "Defender",
                image: "lukeshaw.jpg",
            },
        ],
    };

    console.log(api);
    console.log("--------------");
    console.log("--------     Exercise 1    --------");

    //!Squad Array
    //console.log(api.squad);

    let squads = api.squad;
    //console.log(squads);

    //! Displays whole object of "Defender".
    console.log("-- Defenders Object's --");
    for (let i = 0; i < squads.length; i++) {
        if (squads[i].position == "Defender") console.log(squads[i]);
    }

    //! Displays First Name of Defenders.
    console.log("-- Defenders First Names --");
    for (let i = 0; i < squads.length; i++) {
        if (squads[i].position === "Defender") {
            console.log(squads[i].first_name);
        }
    }

    //! Sorted by Id
    console.log("--- 2: Sorted by Id ---");
    squads.sort(function (a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });
    console.log(squads);

    let array = [1, 2, 3];
    console.log(array);

    //! This Statement
    console.log("--- 3: This Statement ---");
    // console.log(api.name);
    // console.log(api.location);
    // console.log(api.note.rank);
    // console.log(api.note.description);

    let teamInfo = {
        TeamName: api.name,
        location: api.location,
        rank: api.note.rank,
        league: api.note.description,
    };
    console.log("I didn't use a this statement");
    console.log(
        `${teamInfo.TeamName} of ${teamInfo.location}, remains in ${teamInfo.rank} place in the ${teamInfo.league}`
    );

    /*
     *       Instructions:
     *
     *       1. Create and output to console an array of all defenders.
     *       2. Create and output to console an array of all players sorted by id
     *       3. Create and output to console this statement with appropriate information for each [variable] below:
     ! description: "Champions League",
     ! rank: 2,
     ! location: "Manchester, England",
     ! name: "Manchester United",
     *               "[TeamName] of [Location] remains in [rank] place in the [league]."
     *
     *       Hint: Sorting an array can be done with Array.sort((a,b) => a.value -  b.value)
     *
     */
})();
