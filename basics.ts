console.log("See this messge in console. I am here");

function add1(n1: number,n2: number, showResult: boolean, phrase: string){
//     if(typeof n1 !== 'number' || typeof n2 !== 'number')
// {
//     throw new Error(" Incorrect datatype !");
// } 
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return result;
    }
   
}   

const number1 = 5;
const number2 = 34.5;
const printResult = true;
const resultPhrase = "function result is ";
const result = add1(number1, number2,printResult,resultPhrase);

console.log(" Add result is "+ result);