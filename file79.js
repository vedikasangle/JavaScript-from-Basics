  let numbers = [1,2,3];

// // let numbers = new Array(1,2,3);  -->internally
// console.log(Array.prototype)
// //prototype


 console.log(Object.getPrototypeOf(numbers));
 console.log(numbers);

function hello(){
    console.log("hello");
}

console.log(hello.prototype);
 hello.prototype = []; 
 console.log(hello.prototype);
 hello.prototype.push('1');
 console.log(hello.prototype);

