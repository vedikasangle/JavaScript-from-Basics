//important array methods 

const numbers = [4,2,5,8];

// function multiplyby2(number,index){
//     console.log(`index is ${index} number is ${number}`);
//     //console.log(`${number}*2 = ${number*2}`);
// }

// multiplyby2(numbers[0], 0);
// multiplyby2(numbers[1], 1);



// for(let i = 0 ;i<numbers.length; i++){
//     multiplyby2(numbers[i],i);
// }

//for each will take as a input callback 
//numbers.forEach(multiplyby2);
 

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});


numbers.forEach(function(number,index){
    console.log(number*2,index) ;
});


const users = [
    {firstName :"vedika", age : 23},
    {firstName :"sharad", age : 20},
    {firstName :"arjun", age : 22},
    {firstName :"anjali", age : 21},
]

users.forEach(function(users, index){
    console.log(users.firstName, index   );
});

//arrow function in foreach 
users.forEach((user)=>{
    console.log(user.firstName);
})

//for of loop
for(let user of users){
    console.log(user.firstName);
}
 