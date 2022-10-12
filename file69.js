//arrow functions 
const user1 = {
    firstName : "vedika", 
    age : 8 , 
    about : () => {
        console.log(this.firstName, this.age);
    }
}


user1.about(); 