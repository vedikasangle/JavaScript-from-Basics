//arrow function ->

// const singHappyBirthday = function(){
//     console.log("happy birthday");
// }

const singHappyBirthday = () =>{
    console.log("happy birthday");
}

singHappyBirthday();

const sumthreenumbers = (number1, number2, number3) =>{
    return number1+number2+number3;
}
const ans = sumthreenumbers(2,3,4);
console.log(ans);

const isEven = (number) => {
    return number % 2 === 0;
}
console.log(isEven(4));

// const firstChar = anyString =>{
//     return anyString[0];
// }
const firstChar = anyString => anyString[0];
console.log(firstChar("harsh"));


 