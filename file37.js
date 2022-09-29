//objects inside array
//very useful in real world applications 

const users = [
    {userId: 1 , firstName : 'Vedika' , gender : 'male'},
{userId: 2 , firstName : 'Sharad' , gender : 'male'},
{ userId: 3 , firstName : 'Arjun' , gender : 'male'},
{ userId: 3 , firstName : 'Anjali' , gender : 'female'}
]

//console.log(users);

//for of llop
for(let user of users){
    console.log(user.userId);
    console.log(user.firstName);
}