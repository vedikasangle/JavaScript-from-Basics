//parameter destructuring 
//used with objects 

//extensively used in react

const person = {
    firstName : "vedika",
    gender : "female"
}

// function printdetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

function printdetails({firstName ,gender ,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printdetails(person);