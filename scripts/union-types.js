"use strict";
console.log("this is new TS file");
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    console.log("result: " + result);
    return result;
}
var number3 = 5;
var number4 = 10;
console.log("the number result is :" + combine(number3, number4, 'as-number'));
var number5 = '75';
var number6 = '50';
console.log("the number result is :" + combine(number5, number6, 'as-number'));
var string1 = 'Praveen';
var string2 = ' Reddy';
console.log("the String result is :" + combine(string1, string2, 'as-text'));
