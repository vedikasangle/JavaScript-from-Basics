//clone using object.assign 
//memory

const obj = {
    key1 : "value1",
    key2 :"value2"
}

//const obj2 = {...obj} ;
const obj2 = Object.assign({} , obj )  //DOES THE SAME THING 

obj.key = "value";
console.log(obj);

console.log(obj2);

