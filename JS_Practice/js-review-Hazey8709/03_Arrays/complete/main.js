'use strict';
(() => {
    //* console.log("Arrays");
    const cities = [
        'New York City',
        'San Francisco',
        'Palo Alto',
        'Mountain View',
        'Los Angeles',
        'Austin',
        'Seattle'
    ];

    console.log("--- Find Value ---");
    console.log(cities);  //* (7..) Prints array
    console.log(cities[0]); //* New York city
    console.log(cities[4]); //* Los Angeles

    console.log("--- Add to end ---");
    cities.push('Dallas'); //* Puts Dallas at end of array
    console.log(cities.length); //* 8#
    console.log(cities); //* (8..) Prints array
    console.log(cities[cities.length - 1]); //* Show last Position

    // console.log("--- Reverse Array ---")
    // cities.reverse(); //* Reverse's array.
    // console.log(cities); //* (8..) Prints array.
    // console.log(cities[cities.length - 1]); //* Show last Position.

    console.log("--- Get Part of an array ---") //! Grey out reverse Section to work properly.
    const getCitySlice = cities.slice(5,cities.length); //* Gets last 3 out of 8.
    console.log(getCitySlice);

    console.log("--- Copy an array ---")
    const copyArray = [...cities]; //*
    console.log(cities); //* Original array.
    console.log(copyArray); //* Copied array.
    copyArray.push('Denver'); //* Put in last position.
    console.log(copyArray); //* Copy of cities array after push.
    console.log(cities); //* Array of cities after push.

    console.log("--- Insert value into the middle of an array ---")
    const insertNewCity = [
        ...cities.slice(0,4), //* Slices 0 - 4
        'Atlanta', //* Adds
        ...cities.slice(5, cities.length) //* prints rest of array.
    ];
    console.log( insertNewCity )

    console.log("---  Test --- Test ---")
    const insertNewCity2 = [
        ...cities.slice(0,4), //* Slices 0 - 4
        'Atlanta', //* Adds
        ...cities.slice(4, cities.length) //* prints rest of array.
    ];
    console.log(insertNewCity2)

    console.log("--- Remove value into the middle of an array ---")
    const removeCity = [
        ...insertNewCity.slice(0,4),
        ...insertNewCity.slice(5)
    ];
    console.log(removeCity);

    console.log("--- Sort values of an array ---");
    removeCity.sort();
    console.log(removeCity);

    console.log("--- Combine Two Arrays ---");
    const moreCities = [
        'Orlando',
        'Miami',
        'Tampa',
    ];
    const allCities = [...moreCities, ...cities];
    console.log(allCities);
})()
