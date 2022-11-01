'use strict';
// notStrict = "Not strict!";

var globalVariableVar = "This is on the window object";
let globalVariableLet = "This is not on the window object";
const globalVariableConst = "This is not on the window object";

(() => {
    // Code Here
    console.log(window);
    console.log("Window contains globalVariableVar: ", window.globalVariableVar);

    var functionScope = "This is contained to the function";
    console.log("Window does not contain functionScope (undefined): ", window.functionScope);


    var whatIsMyValue = "This!";
    console.log("whatIsMyValue: ", whatIsMyValue)
    whatIsMyValue = "That!"
    console.log("whatIsMyValue is: ", whatIsMyValue)


    let whatIsMyValueLet = "Huh!";
    console.log("blockScopeLet: ", whatIsMyValueLet)
    whatIsMyValueLet = "Cool!";
    console.log("whatIsMyValueLet is: ", whatIsMyValueLet)


    const whatIsMyValueConst = "Nice!"
    console.log("blockScopeConst: ", whatIsMyValueConst)
    whatIsMyValueConst = "Sweet!"
    console.log("whatIsMyValueConst is: ", whatIsMyValueConst)

})()
