

(() => {
    const league = {
        name: 'Eredivisie',
        region: 'Netherlands',
        teams: [
            'Ajax',
            'PSV',
            'Feyenoord',
            'AZ Alkmaar',
            'Twente'
        ]
    }
    console.log("hello")
    const leaguesContainer = document.querySelector('main')
    const leagueSection = document.createElement('section')
    leagueSection.classList.add('league');

    const leagueName = document.createElement('h2')
    const region = document.createElement('h3')
    const teamList = document.createElement('ul')

    leagueName.innerText = league.name
    region.innerText = league.region
    

    league.teams.forEach(team => {
        const teamName = document.createElement('li')
        teamName.innerText = team;

        teamList.appendChild(teamName)        
    })

    leagueSection.appendChild(leagueName)
    leagueSection.appendChild(region)
    leagueSection.appendChild(teamList)
    // leaguesContainer.appendChild(leagueSection)
    leaguesContainer.insertAdjacentElement('afterbegin', leagueSection)


    // Remove Ligue 1
    const allLeagues = document.querySelectorAll('main section')
    const leaguesArray = Array.from(allLeagues);
    const findLeague = leaguesArray.filter(league => {
        return Array.from(league.children).find(element => element.innerText === 'Ligue 1')
    })
    const foundLeague = findLeague[0]
    foundLeague.parentElement.removeChild(foundLeague)
    
})()