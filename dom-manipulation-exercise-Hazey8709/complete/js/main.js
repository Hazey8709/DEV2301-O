( () => {
    //! First League added
    const league = {
        name: "Eredivisie",
        region: "Netherlands",
        teams: ["Ajax", "PSV", "Feyenoord", "AZ Alkmaar", "Twente"],
    };

    const leaguesContainer = document.querySelector("main");
    const leagueSection = document.createElement("section");
    leagueSection.classList.add("league");

    const leagueName = document.createElement("h2");
    const region = document.createElement("h3");
    const teamList = document.createElement("ul");

    leagueName.innerText = league.name;
    region.innerText = league.region;

    league.teams.forEach((team) => {
        const teamName = document.createElement("li");
        teamName.innerText = team;

        teamList.appendChild(teamName);
    });

    leagueSection.appendChild(leagueName);
    leagueSection.appendChild(region);
    leagueSection.appendChild(teamList);
    // leaguesContainer.appendChild(leagueSection)
    leaguesContainer.insertAdjacentElement("afterbegin", leagueSection);

    //! Remove Ligue 1
    // Remove Ligue 1
    // const allLeagues = document.querySelectorAll("main section");
    // const leaguesArray = Array.from(allLeagues);
    // const findLeague = leaguesArray.filter((league) => {
    //     return Array.from(league.children).find(
    //         (element) => element.innerText === "Ligue 1"
    //     );
    // });
    // const foundLeague = findLeague[0];
    // foundLeague.parentElement.removeChild(foundLeague);

    //! All Teams Queried off HTML
    console.log("1: ----- All Teams -----");
    const allTeams = document.querySelectorAll("li");
    //console.log(allTeams);
    allTeams.forEach((team) => {
        console.log(team.innerText);
    });

    //! ALL Teams in First Place
    console.log("2: ----- First Place Teams -----");
    const firstPlaceTeams = document.querySelectorAll("li:first-of-type");
    //console.log(firstPlaceTeams);
    firstPlaceTeams.forEach((firstPlaceTeam) => {
        console.log(firstPlaceTeam.innerText);
    });

    //! ALL Teams in Second Place
    console.log("3: ----- Second Place Teams -----");
    const secondPlaceTeams = document.querySelectorAll("li:nth-child(2) ");
    //console.log(secondPlaceTeams);
    secondPlaceTeams.forEach((secondPlaceTeam) => {
        console.log(secondPlaceTeam.innerText);
    });

    //! Remove La Liga
    console.log("4: ----- Remove La Liga -----");
    console.log(" --Shown in browser unless commented out--  ");
    //const selectLaLiga = document.querySelectorAll("section:nth-child(5) ");
    const allLeagues = document.querySelectorAll("main section");
    const leaguesArray = Array.from(allLeagues);
    const findLeague = leaguesArray.filter((league) => {
        return Array.from(league.children).find(
            (element) => element.innerText === "La Liga"
        );
    });
    const foundLeague = findLeague[0];
    foundLeague.parentElement.removeChild(foundLeague);

    //! ADD To End of League List
    console.log("5: ----- ADD To End of League List -----");
    console.log(" --Shown in browser at end of list--  ");
    //const addObject = document.querySelectorAll( "li:nth-child(2) " );

    const newLeague = {
        name: "MLS",
        region: "North America",
        teams: [
            "NY Red Bulls",
            "DC United",
            "Columbus",
            "Orlando City",
            "Philadelphia",
        ],
    };

    const newLeaguesContainer = document.querySelector("main");
    const newLeagueSection = document.createElement("section");
    newLeagueSection.classList.add("league");

    const newLeagueName = document.createElement("h2");
    const newRegion = document.createElement("h3");
    const newTeamList = document.createElement("ul");

    newLeagueName.innerText = newLeague.name;
    newRegion.innerText = newLeague.region;

    newLeague.teams.forEach((team) => {
        const teamName = document.createElement("li");
        teamName.innerText = team;

        newTeamList.appendChild(teamName);
    });

    newLeagueSection.appendChild(newLeagueName);
    newLeagueSection.appendChild(newRegion);
    newLeagueSection.appendChild(newTeamList);
    //leaguesContainer.appendChild(leagueSection)
    newLeaguesContainer.insertAdjacentElement("afterend", newLeagueSection);

    //! All Teams including MLS
    console.log("--All TeamsList after: - La Liga  + MLS--");
    const newTeamsList = document.querySelectorAll("li");
    //console.log(newTeamsList);
    newTeamsList.forEach((team) => {
        console.log(team.innerText);
    });
})();
