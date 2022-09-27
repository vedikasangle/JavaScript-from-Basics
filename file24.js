//how to clone array 

//how to concatenate two arrays

let array1 = ["i1", "i2"];
//let array2 = ["i1", "i2"];//caanot be used for more numbers

// //let array2 = array1.slice(0); //did not get thar much 
// let array2 = [].concat(array1);
//new way =>spread operator
//fastest way is slice but mostly spread array is used
//let array2 = [...array1] ; 
//let array2 = array1.slice(0).concat(["item3" , "item4"]);

let onemorearray = ["item8", "item9"];
let array2 = [...array1, ...onemorearray];

array1.push("item3"); 
console.log(array1===array2);    
console.log(array1);
console.log(array2);

