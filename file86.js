console.log(this);
console.log(window);
console.log(myfunction);  //function printing not calling 
console.log(fullName);

function myfunction(){
    console.log("this is my function ");
}


var firstName = "vedika";
var lastName = "sangle";

var fullName = firstName + " " + lastName;
console.log(fullName);