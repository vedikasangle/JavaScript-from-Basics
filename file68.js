const user1 = {
    firstName : "vedika", 
    age : 8 , 
    about : function(){
        console.log(this.firstName, this.age);
    }
}


//dont do this mistake 
// user1.about();

// const myFunc = user1.about();
// myFunc();


const myFunc = user1.about.bind(user1);
myFunc();