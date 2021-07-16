"use strict";
console.log("See this messge in console. I am here");
function add1(n1, n2, showResult, phrase) {
    //     if(typeof n1 !== 'number' || typeof n2 !== 'number')
    // {
    //     throw new Error(" Incorrect datatype !");
    // } 
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 34.5;
var printResult = true;
var resultPhrase = "function result is ";
var result = add1(number1, number2, printResult, resultPhrase);
console.log(" Add result is " + result);
