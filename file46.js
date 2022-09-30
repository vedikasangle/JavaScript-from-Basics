//rest parameter

// function myfunc(a,b,c,...d){  //...are rest parameters
//     console.log(`a is ${a}`)
//     console.log(`a is ${b}`)
//     console.log(`a is ${c}`)
//     console.log(`a is ${d}`)
// }

// myfunc(3,4,5,6,7);

function addAll(...numbers){
    console.log(numbers);
    console.log(Array.isArray(numbers));
    let total = 0 ;
    for(let number of numbers ){
        total = total + number;
    }
    return total;
}
const ans = addAll(1,2,3,4,324,38453);
console.log(ans);