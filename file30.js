//array destructing 

const myArray = ["value1", "value2", "value3", "value4", "value5"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// 


let [myvar1, ,myvar2, ...myNewArray] = myArray;
//let myNewArray = myArray.slice(2);
myvar1 = "value changed";
console.log("value of myvar1", myvar1);
console.log("value of myvar1", myvar2);
console.log(myNewArray);


