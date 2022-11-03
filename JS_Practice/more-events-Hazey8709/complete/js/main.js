(() => {
      const leagueNames = document.querySelectorAll('section > h2');
      const regionNames = document.querySelectorAll('section > h3');
      const teamsInLeagues = document.querySelectorAll('section > ul');

      // Clicks

      Array.from(leagueNames).map(league => {
          league.addEventListener('click', e => {
              console.log("League: ", e.target.innerText)
          })
      })
        Array.from(regionNames).map(region => {
            region.addEventListener('mousedown', e => {
                e.preventDefault();
                console.log("Region: ", e.target.innerText)
            })
        })
        
        Array.from(teamsInLeagues).map(teams => {
            const leagueTeams = teams.querySelectorAll('li')
            
            teams.addEventListener('mouseenter', (e) => {
                console.log("Mouse Over Team")
            })
            
            Array.from(leagueTeams).map(team => {
                team.addEventListener('mouseup', e => {
                    console.log("Team: ", e.target.innerText)
                })
            })
        })

    // Tracking
    // mouseover
    // mouseenter

    // const mouseMoveTracker = event => {
    //     console.log(window.innerWidth)
        // console.log(
        //     "screenX: ",event.screenX, 
        //     "screenY: ", event.screenY, 
        //     "clientX: ", event.clientX, 
        //     "clientY:", event.clientY)
    // }
    
    // window.addEventListener('mousemove', mouseMoveTracker)

    const scrollTriggerLocation = 100;
    let scrollLocation = 0;
    const scrollDirection = () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0 && scrollLocation <= currentScroll){
            scrollLocation = currentScroll;
            console.log("Scroll Down")
        }else{
            scrollLocation = currentScroll;
            console.log("Scroll Up")
        }
    }

    window.addEventListener('scroll', (e) => {  
        // console.log("scroll: ", e)
        // console.log(window.scrollY)
        scrollDirection();
        // if( window.scrollY > scrollTriggerLocation) console.log("Big scroll")
    })

})()