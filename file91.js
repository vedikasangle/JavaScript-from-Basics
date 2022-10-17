//closures

//closure - 30-40
//analyse - 70 - 80
// examples - 100

//functions can return functions


// function outerfunction(){
//     function innerfunction(){
//         console.log("hello world");
//     }
//     return innerfunction ; 
// }

// const ans = outerfunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName; 
}

const ans = printFullName("VEDIKA" , "SANGLE");
// console.log(ans);
ans();