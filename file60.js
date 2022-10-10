//iterables

//jispe hum for of loop laga sakein
//string , array are iterables 

const firstName = "vedika";
for(let char of firstName){
    console.log(char);
}

const items = ['item1', 'item2' , 'item3'];
for(let item of items){
    console.log(item);
}


//objects are not iterable :
// const users = {'key1' : 'value1' , 'key2' :'value2'}
// for(let item of users){
//     console.log(item);
// }


//array like object 
//jinke pass length property hoti hai
//aur jinko hum index se access kar sakte hai 
//example :-string 

const firstNamee =  "vedika";
console.log(firstName.length);

console.log(firstName[2]);
