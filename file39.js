//console.log("happy birthday to youu...");
//function declaration 
// function singHappyBirthday(){
//     console.log("happy birthday to youu...");
// }
//both are same (above and below)
//function expression
const singHappyBirthday = function(){
    console.log("happy birthday to youu...");
}
   
singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();

// function twoplusfour(){
//     console.log(2+4);
// }
// //function call/invoke/run
// twoplusfour();

// function twoplusfour(){
//     return 2+4;
// }
// // console.log(twoplusfour());
// const returnvalue = twoplusfour();
// console.log(returnvalue);

function sumtwonumbers(number1, number2){//parameters
    return number1 + number2 ;
}

const answer = sumtwonumbers(2,8) //argument
console.log(answer);

// console.log(undefined + undefined); //NaN ->not a number 
// console.log(2 + 3 + undefined); 

//odd or even 
//input  : 1 number
//output : true , false 

function isEven(number){
    if(number%2===0){
        return true;
    }
        return false;
}
function isEvenn(number){
    return number % 2 === 0 ;
}
console.log(isEven(15));
console.log(isEvenn(10));

//function
//input : string //output : firstcharacter

function firstChar(anyString){
    return anyString[0];
}

console.log(firstChar("abc"));

//function 
//input -> array, target(number);
//output : index of target if target is present in array

const findTarget  =function(array, target){
    for(let i = 0 ; i<array.length ; i++){
    if(array[i]===target){
        return i ; 
    }
}
    return -1;
} 
const myArray = [1,3,8,90];
const ans = findTarget(myArray ,4 );
console.log(ans);
