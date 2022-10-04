//every method 

const numbers = [2,4,6,8,10]; //to know if numbers are even or not

const ans = numbers.every((number)=>number%2===0);

//callback func returns true or false 
//every also returns true or false 
//every will only be true when all the elements are even 

console.log(ans);
 