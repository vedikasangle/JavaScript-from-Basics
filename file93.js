// const square = myFunction(2)
// square(3)  //3 to the power 2
// // cube(2)  //2 to the power 2 



function myFunction(power){
    return function(number){
        return number ** power //** means exponent
    }
}
const cube = myFunction(3);
const ans = cube(3);

console.log(ans);


const square = myFunction(2);
const ans2 = square(3)
console.log(ans2)
 
 