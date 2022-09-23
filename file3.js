//methods of string
//Strings are immutable! 

let firstName = "veDIka";

//1. trim()   ->to remove the extra spaces and know actually how much is actual length of the word!

console.log(firstName.length);
let newString = firstName.trim(); //"Harshit"
console.log(newString);
console.log(newString.length);

//toUppercase 
firstName = firstName.toUpperCase()  //we need to put this in that variable again, otherwise it wont work 
console.log(firstName);


//toLowercase
firstName = firstName.toLowerCase();
console.log(firstName);

//slice method 

//start index 
//end index

let newwString = firstName.slice(1); //vedi
console.log(newwString);
