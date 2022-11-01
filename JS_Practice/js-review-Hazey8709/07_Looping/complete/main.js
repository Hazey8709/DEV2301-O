'use strict';
(() => {
    console.log("Looping")

    const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

    // for
    for (let i = 0; i <= positions.length; i++) {
        console.log(i)
    }

    // for of
    const userProfile = {
        name: 'Don Mattingly',
        sport: 'baseball',
        team: 'NYY'
    }
    for(const letter of userProfile.name){
        console.log("of: ", letter)
    }

    // for in
    // loops over keys
    for(const letter in userProfile.name){
        console.log("in: ", letter)

    }

    for(const prop in userProfile){
        console.log("in prop: ", prop)

    }

    // while
    let status = 'incomplete';
    let i = 0;
    while(status === 'incomplete'){
        console.log('status in: ', i)
        i++;
        if(i === 3) status = 'complete';
    }

})()