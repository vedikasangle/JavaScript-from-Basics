//short syntax 
const user1 = {
    firstName : "vedika", 
    age : 8 , 
    about(){    //new syntax
        console.log(this.firstName, this.age);
    }
}

user1.about();
