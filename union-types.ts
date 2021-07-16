console.log("this is new TS file");

type combine = number | string;
type combineDisc = 'as-number' | 'as-text';
function combine(input1:combine, input2:combine, resultConversion: combineDisc){
    let result ;
    if( typeof input1 === 'number' && typeof input2 === 'number' ){
     result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    console.log("result: "+result);
        return result;
}

 const number3 = 5;
 const number4 =10;
 console.log("the number result is :"+combine(number3,number4,'as-number'));
 const number5 = '75';
 const number6 = '50';
 console.log("the number result is :"+combine(number5,number6,'as-number'));

 const string1 = 'Praveen';
 const string2 =' Reddy';
 console.log("the String result is :"+combine(string1,string2,'as-text'));