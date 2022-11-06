//promise ->ek esi value jo hume abhi nahi pata par future me pata chalegi 
const bucket = ['coffee', 'chips', 'vegetable', 'salt' , 'rice'];

//creating promise

//promise is class or can also be called as constructor funcion
//we pass function in promise called as executor function and  two p
//parameters are passed 
//promise can be stored in a variable
//promise can also be returned in a function 


//promised produce
const friedricepromise = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried rice");
    } else{
        reject("could not do it");
    }
})


//promise consume 
//how to consume is important 
//then takes callback function as a input 
friedricepromise.then(
    //jab promise resolve hoga 
    (myfriedrice)=>{
    console.log("lets eat", myfriedrice)
}
, //jab promise reject hoga 
(error)=>{
    console.log(error)
}
)

 


