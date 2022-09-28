//how to iterate objects 
const person =  {
    name :"Vedika",
    age : 20,
    hobbies : ["baking", "listening music"]
}

//1.for in loop
//2.object.keys

// for(let key in person){
//     console.log(person[key]);  //we cannot use person.key!
// } 

//using template string
// for(let key in person){
//     console.log(`${key} : ${person[key]}`);  //we cannot use person.key!
// }

 for(let key in person){
     console.log(key,person[key]);  //we cannot use person.key!
 }


 //2.object.case method

 console.log(Object.keys(person));
 console.log(typeof Object.keys(person));

 const val = Array.isArray((Object.keys(person)));
 console.log(val);

 for(let key of Object.keys(person)){
    console.log(person[key]);
 }

 
