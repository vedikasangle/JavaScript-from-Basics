function CreateUser(firstName , lastName  , email, age , address){

    this.firstName = firstName ;
    this.lastName = lastName ; 
    this.email = email; 
    this.age = age ; 
    this.address = address ; 
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old `
}
CreateUser.prototype.is18 = function(){
    return this.age >=18;
} 
CreateUser.prototype.sing = function(){
    return "lalal ala";
}


const user1 = new CreateUser('harshit', 'idk' , 'vedika@gmail.com' , 3 , 'myaddressq' );
const user2 = new CreateUser('vedika', 'ik' , 'vediiika@gmail.com' , 91 , 'myaddressww' );
const user3 = new CreateUser('harsh', 'idkk' , 'veeedika@gmail.com' , 30 , 'myaddressa' );


for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
    
}