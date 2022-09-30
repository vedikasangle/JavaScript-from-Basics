//block scope vs function scope 


//let and const are block scope 

//var is function scope 

// {
//     let firstName = "vedika"; 
// }
//console.log(firstName);

//same happens with const!!!

// {
//     let firstNamee = "aditi";
//     console.log(firstNamee)
// }
// {
//     let firstNamee = "shruti ";
//     console.log(firstNamee)
// }

// {
//   var lastName = "sangle";
// }
// console.log(lastName);


// const firstName = "garima";
// console.log(firstName);

// {
//     var firstName = "vedika";  //if we had used let instead of var, then error would have occured
//     console.log(firstName);
// }{
//     console.log(firstName);
// }
// if(true){
//     var firstName = "vedu"
//     console.log(firstName);
// }

// console.log(firstName);  


function myApp(){
    if(true){
        var firstName = "vedu"  //error if let used 
    console.log(firstName);
}
if(true){

console.log(firstName);
}
console.log(firstName);
}
myApp(); 







