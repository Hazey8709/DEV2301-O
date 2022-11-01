'use strict';
(() => {
   console.log("Events");
//    const button = document.querySelector('.buttonEvent');
   const buttons = document.querySelectorAll('.buttonEvent');

    //    button.addEventListener('click', (event) => {
    //     console.log("Clicked!")
    //    })

    const handleClick = (e) => {
        // console.log("Callback function!")
        console.log("Callback function: ", e.target.innerHTML)
    }

    // button.addEventListener('click', handleClick)

    // button.addEventListener('click', (event) => {
    //     handleClick()
    // })

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            handleClick(event)
        })
    })

    window.addEventListener('resize', (event) => {
        console.log("width:", window.innerWidth)
        console.log("height:", window.innerHeight)
    })
})()