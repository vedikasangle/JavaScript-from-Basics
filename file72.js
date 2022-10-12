

const UserMethods= {
    
    about : function(){
        return `${this.firstName} is ${this.age} years old. `;  
    },

    is18 : function(){
        return this.age >=18;
    }
}
function createUser(firstName , lastName  , email, age , address){
    const user = {};
    user.firstName = firstName ;
    user.lastName = lastName ; 
    user.email = email; 
    user.age = age ; 
    user.address = address ; 
    user.about = UserMethods.about; //reference is stored
    user.is18 = UserMethods.is18; 

    return user;
}



const user1 = createUser('harshit', 'idk' , 'vedika@gmail.com' , 3 , 'myaddressq' );
const user2 = createUser('vedika', 'ik' , 'vediiika@gmail.com' , 91 , 'myaddressww' );
const user3 = createUser('harsh', 'idkk' , 'veeedika@gmail.com' , 30 , 'myaddressa' );

console.log(user1.about());
console.log(user3.about());