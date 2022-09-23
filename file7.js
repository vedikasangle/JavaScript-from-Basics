//undefined 
//null

// let firstName ;  //we can use var instead of let too, but we cannot use const, it will give error 
// // console.log(typeof firstName); //outcome will come as undefined 
// firstName = "Sangle"; 
// console.log(typeof firstName , firstName);

// let myvar = null;
// console.log(myvar);
// myvar = "sheesh";
// console.log(myvar , typeof myvar);
// console.log(typeof null);  //object data type (bug in js, error)


//BigINt (primitive data type )
//very new 

let mynum = BigInt(12);
let sameMyNumber = 123n;  //line 19 and 20 both are big int 
console.log(mynum);
// console.log(Number.MAX_SAFE_INTEGER);

console.log(mynum + sameMyNumber);


