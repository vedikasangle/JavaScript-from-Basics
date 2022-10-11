//maps
//map is an iterable 


//store data in ordered fashion 

//store key value pair(like object)
//duplicate keys are not allowed like objects 


//difference between maps and objects 

//objects can only have string or symbol
//as key 


//in maps you can use anything as key 
//like array, number, string 

//object literals ->key always in string/symbol
const person = {
    firstName :"harshit",
    age : 7,
    1 :"one"
}

// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person['1']);

// for(let key in person){
//     console.log(typeof key)
// }


//maps also stores key value pairs 
const personn = new Map();

personn.set('firstName', 'Vedika');
personn.set('age',7);   //by using map, our key can be of any type
personn.set([1,2,3],'onetwothree');
personn.set(1,'one');
console.log(personn);
console.log(personn.get('age'));


for(let key of personn.keys()){
    console.log(key, typeof key);
}

//for of loop 

for(let key of personn){
      console.log(Array.isArray(key))   //yess
}



const person1 = {
    id : 1,
    firstName : 'vedika'
}

const extrainfo = new Map ();
extrainfo.set(person1 , {age : 8 , gender : "male"});
console.log(extrainfo);
console.log(person1.id);
console.log(extrainfo.get(person1).age);




const perrson = new Map([['firstName', 'harshit'], ['age', '7']]);
console.log(perrson);