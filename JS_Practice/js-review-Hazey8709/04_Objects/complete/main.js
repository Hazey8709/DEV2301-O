'use strict';
(() => {
    console.log("Objects");
    
    const baseObject = {
        "key" : "value"
    }
    console.log(baseObject);

    const exampleObject = {
        type : "truck",
        manufacturer : "Ford",
        model : "F-150",
        trim : "Raptor",
        color : "blue",
        available : true,
        inventory : 5,
        options : [
            'Sunroof',
            'Tech Package',
        ],
    }
    console.log(exampleObject);
    console.log(exampleObject.manufacturer);
    console.log(exampleObject.model);
    console.log(exampleObject.trim);

    console.log("ES6 Key Value setting")
    const streetNumber = '711';
    const city = 'Maywood';
    const street = 'Elm';

    const objectTips = {
        streetNumber,
        city,
        street,
        state: 'Florida'
    }
    console.log(objectTips)
    console.log({objectTips})

    console.log("Add to Object")
    exampleObject.engine = '6 cylinder'
    console.log(exampleObject)

    console.log("Remove from Object (mutation)")
    delete exampleObject.engine;
    console.log(exampleObject)

    console.log("Remove from Object (immutable)")
    const { inventory, available, ...newObjectFromSpread } = exampleObject;
    console.log({newObjectFromSpread})
    console.log({exampleObject})


})()