'use strict';
console.log('window', this);
(() => {
    console.log("Arrow Functions")
    
    function add(a,b) {
        console.log(a + b);
    }
    add(1,2);

    const addArrow = (a,b) => {
        console.log(a + b);
    }
    addArrow(1,2);

    const implicitReturn = (value) => console.log(value);
    implicitReturn("No syntax sugar");
    
    const explicitReturn = (value) => {
        const sum = value + 1
        return sum;
    }
    console.log(explicitReturn(10))

    const demoData = [
        'these',
        'are',
        'words',
        'in',
        'a',
        'sentence'
    ];
    demoData.map(word => console.log(word));

})()