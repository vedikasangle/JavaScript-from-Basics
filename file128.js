//promise ->ek esi value jo hume abhi nahi pata par future me pata chalegi 
console.log("script start")
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
        reject("could not do it"); //we can pass anythinh in this array , etc 
    }
})


//promise consume 
//how to consume is important 
//then takes callback function as a input 


friedricepromise.then(  //microtask queues
    //jab promise resolve hoga 
    (myfriedrice)=>{
    console.log("lets eat", myfriedrice)
}).catch(
    (error)=>{
    console.log(error)
})

setTimeout(()=>{ //callback queues
    console.log("heyyy")
}
)

for(let i = 0 ; i<=100 ; i++){
    console.log(Math.random(), i)
}
 
console.log("script end")