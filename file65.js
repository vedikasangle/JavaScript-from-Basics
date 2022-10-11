
//methods 

//function inside object are methods

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age} `)
    //console.log(this.firstName, this.age );
}


const person1 = {
    firstName : "harshitttt ",
    age : 83, 
    about : personInfo
}


const person2 = {
    firstName : "idc ",
    age : 8, 
    about : personInfo
}


const person3 = {
    firstName : "vedika ",
    age : 3, 
    about : personInfo
}


// console.log(person.about);

// person.about();



person1.about();
person2.about();
person3.about();