'use strict';
(() => {
    console.log("if statements")

    if(true) {
        console.log("Run this")
    }

    if(false) {
        console.log("Can't run this")
    }

    const value = false;
    if(value){
        console.log("True value")
    }else{
        console.log("False value")
    }

    if(!value) console.log("Shorthand, nice!")

    // if(!value) return

    let test;
    
    if(test === undefined){
        console.log("undefiend test")
    } else if (test){
        console.log("True test")
    } else if (!test) {
        console.log("false test")
    } else {
        console.log("Well it's something")
    }
})()