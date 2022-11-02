import {
    c as logger,
    query,
    tally
} from './utilities.js';

(() => {
    logger("This is my new logger")
    
    const getAllTeamNames = document.querySelectorAll('section > h2')
    logger({getAllTeamNames})

    const getCountries = query('section > h3')
    logger({getCountries})
    getCountries.forEach(el => el.style.color = 'green')

    const getWinningLeague = query('h4')
    logger({getWinningLeague})

    const getWinningLeagueParent = getWinningLeague.parentNode
    logger({getWinningLeagueParent})
    getWinningLeagueParent.style.color = 'darkblue'

    const getFirstPlace = query('section > ul > li:first-of-type')
    logger({getFirstPlace})
    Array.from(getFirstPlace).map(team => {
        const winnerLabel = document.createElement('strong');
        winnerLabel.innerHTML = "Winner";
        team.append(winnerLabel)
    })

    const getWinningLeagueTeams = query('section:first-of-type > ul > li')
    logger({getWinningLeagueTeams})

    const winningTeamsArray = Array.from(getWinningLeagueTeams)
    logger({winningTeamsArray})
    
    const manchesterTeams = winningTeamsArray.filter(team => team.innerText.includes('Manchester'))
    logger({manchesterTeams})

    manchesterTeams.forEach(team => team.style.fontWeight = 'bold');

    const manchesterUnited = winningTeamsArray.find(team => team.innerText.includes('Manchester United'))
    logger({manchesterUnited})

    manchesterUnited.style.color = 'red'

    // array.reduce(function(accumulator, item, index, array) {
        // Use `accumulator` and `item` 
        // to calculate `updatedAccumulator`...
    //     return updatedAccumulator;
    //   })

    const points = [0,1,3,1,3,3,3,3,3,1];

    const pointsTotal = points.reduce((total, amount) => total + amount); 

    logger({pointsTotal}) // 118.11

    // const leagueTally = Array.from(getAllTeamNames).map(() => 1).reduce((tally, count) => tally + count);
    const leagueTally = tally(getAllTeamNames)
    logger({leagueTally})

    // const leagueCount = leagueTally.reduce((tally, count) => tally + count);
    // logger({leagueCount})

    const subHeadline = query('main > h2')
    subHeadline.innerHTML = `Top ${leagueTally} Leagues`
})();