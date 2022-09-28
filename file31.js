//objects in javascript
//arrays are good but not sufficient 
//for real world data 
//objects are reference types 
//objects store key value pairs 
//objects dont have index 

//how to create objects 

//const person = {name:"Vedika", age :20 };  //called as obejct literals
const person =  {
    name :"Vedika",
    age : 20,
    hobbies : ["baking", "listening music"]
};

console.log(person);
console.log(typeof person )

//how to access data from objects 
// console.log(person["name"]);  //in js key is by default in string 
// // console.log(person.name);
// console.log(person.age);
// console.log(person["age"]);
// console.log(person.hobbies);

//keys are also called properties 
//we can also store arrays in object 

//how to add key value pair to object   1.dot notation 2.bracket notation
// person.gender = "female";
// console.log(person);

person["gender"] = "female";








