//new keyword 


function createUser(firstName , age){
    this.firstName = firstName ; 
    this.age = age ; 
}

createUser.prototype.about = function(){
    console.log(this.firstName , this.age);
}
const user1 = new createUser("vedika" , 20);

// new keyword
//1. empty object this = {}
//2. return this (empty object)
//

user1.about();