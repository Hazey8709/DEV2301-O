"use strict";
(() => {
    console.log("Combining Arrays and Objects");

    const clubs = [
        {
            name: "Manchester United F.C.",
            stadium: "Old Trafford",
            league: "Premier League",
            competitions: [
                "Domestic League",
                "Domestic Cup",
                "UEFA Champions League",
            ],
        },
        {
            name: "Orlando City SC",
            stadium: "Exploria Stadium",
            league: "Major League Soccer",
            competitions: ["Domestic League"],
        },
    ];
    console.log(clubs);
    console.log("-----------");
    console.log(clubs[1].name);
    console.log("-----------");
    console.log(clubs[1].competitions[0]);
    console.log("-----------");

    console.log(clubs[0].name);
    console.log("-----------");
    console.log(clubs[0].competitions[2]);
})();
