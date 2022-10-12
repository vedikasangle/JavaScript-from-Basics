//oops in js 


// const user1 = {
//     firstName : "Harshit", 
//     lastName : "idk",
//     email : "vedikasangle@gmail.com",
//     age : 2 ,
//     about : function(){
//         return `${this.firstName} is ${this.age} years old. `;  
//     },
//     is18 : function(){
//         return this.age >=18;
//     }
// }

// const aboutUser = user.about();
// console.log(aboutUser); 

//need better option

//function (this function will create object)
//2. add key value pair 
//3. object ko return karega 


function createUser(firstName , lastName , email, age , address){
    const user = {};
    user.firstName = firstName ;
    user.lastName = lastName ; 
    user.email = email; 
    user.age = age ; 
    user.address = address ; 

    user.about = function(){
            return `${this.firstName} is ${this.age} years old. `;  
        }

    user.is18 = function(){
            return this.age >=18;
        }


    return user;
}



const user1 = createUser('harshit', 'idk' , 'vedika@gmail.com' , 3 , 'myaddress' );
console.log(user1);

const is18 = user1.is18();
console.log(is18);


const about = user1.about();
console.log(about);