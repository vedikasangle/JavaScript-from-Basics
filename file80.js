//2015 / es6
//class keyword
//class are fake 

class CreateUser{
    constructor(firstName , lastName ,email, age , address){
        console.log("constructor called");
        this.firstName = firstName ;
        this.lastName = lastName ; 
        this.email = email; 
        this.age = age ; 
        this.address = address ; 
    }

    about(){
        return `${this.firstName} is ${this.age} years old `
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return "lalalala";
    }
    func(a){
        console.log(a);

    }
}


//new keyword is important
const user1 = new CreateUser('harshit', 'idk' , 'vedika@gmail.com' , 3 , 'myaddressq' );
const user2 = new CreateUser('vedika', 'ik' , 'vediiika@gmail.com' , 91 , 'myaddressww' );
const user3 = new CreateUser('harsh', 'idkk' , 'veeedika@gmail.com' , 30 , 'myaddressa' );

console.log(user1.firstName);
console.log(user3.is18());

console.log(Object.getPrototypeOf(user1));

user1.func("vedu");