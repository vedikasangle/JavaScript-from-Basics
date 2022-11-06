//understand callbacks 

function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}

// function myFunc2(){
//     console.log("function is doing task 2")
// }

// myFunc(function(){
//     console.log("function is doing task 2" )
// });

//using arrow function we can do it too
// myFunc(() => {
//     console.log("function is doing task 2" )
// });


function getTwoNumbersandAdd(number1 , number2, Onsucces, onFailure ){
    // console.log(number1, number2);
    if(typeof number1 === "number" && typeof number2 ==="number"){
    Onsucces(number1, number2)
}else{
   onFailure();
}
}

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

getTwoNumbersandAdd(4,3, (num1,num2)=>{
    console.log(num1 + num2);
},()=>{
    console.log("wrong data type ");
    console.log("please pass numbers only")
});

//we can also pass two calbacks 
