"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function printAnyThing(num) {
    console.log("the result is " + num);
}
var combineFunction;
combineFunction = add;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    console.log("Result is " + result);
    cb(result);
}
addAndHandle(23, 43, function (result) {
    console.log("from anonmous function " + result);
});
//combineFunction = printAnyThing;
printAnyThing(add(12, 8));
console.log(combineFunction(452, 8));
