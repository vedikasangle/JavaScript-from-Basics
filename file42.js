 //functions inside function
 
 const app = () => {
    const myfunc =() =>{
        console.log("hello from myfunc")
    } 
    const add = (num1 , num2) =>{
        return num1 + num2;
    }
    const mul = (num1 , num2) => num1 *num2;
    console.log("inside app")
    myfunc();
    console.log(add(2,3));
    console.log(mul(4,5));
 }

 app();