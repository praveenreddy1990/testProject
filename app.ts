function add(num1:number,num2:number){
    return num1 + num2;
}
function printAnyThing(num: number):void{
    console.log("the result is "+ num);
}
let combineFunction:(a:number,b:number)=> number;
combineFunction= add;

function addAndHandle(n1:number,n2:number,cb:(num:number) =>void){
    let result = n1+n2;
    console.log("Result is "+result);
    cb(result);
}
addAndHandle( 23,43,(result) =>{
    console.log("from anonmous function "+result)
});
//combineFunction = printAnyThing;
printAnyThing(add(12,8));
console.log(combineFunction(452,8));

