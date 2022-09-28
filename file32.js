//difference between dot and bracket notation 

const key = "email";
const person =  {
    name :"Vedika",
    age : 20,
    hobbies : ["baking", "listening music"],
    "my address" : ["pune india"]
};

//console.log(person.my address) ->error
console.log(person["my address"]);


//adding key value pair in the object person  
person[key]= "vedikasangle@gmail.com";
console.log(person);

  