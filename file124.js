//synchronous and asynchronous programming

// console.log("script starts");

// for(let i = 1 ; i< 1000 ; i++){
//     console.log("inside for loop");
// }

// console.log("script end");

// setTimeout
console.log("script start ");
// function hello(){
//     console.log("Hello World");
// }

setTimeout(()=>{
    console.log("inside setTimeout");
},1000);  //1000 millisecond delay i.e. 1 sec
console.log("Script end");