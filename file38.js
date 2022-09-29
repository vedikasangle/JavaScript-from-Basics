//nested destructuring
const users = [
    {userId: 1 , firstName : 'Vedika' , gender : 'male'},
{userId: 2 , firstName : 'Sharad' , gender : 'male'},
{ userId: 3 , firstName : 'Arjun' , gender : 'male'},
{ userId: 3 , firstName : 'Anjali' , gender : 'female'}
]

const [{firstName : user1firstName} , ,{gender}, {userId}] = users ;  //imp line 
console.log(user1firstName);
console.log(gender);
console.log(userId);