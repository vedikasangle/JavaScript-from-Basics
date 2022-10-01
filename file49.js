//function returning function

function myFunc(){
   // return [1,2,3];
   //return{name : "harshit", age :22};
   //return 1;


    function hello(){
     return("hello world");
    }    
   return hello;


    // return function(){
    //     return"helllo world";
    // }
}
// }

const ans = myFunc();
//console.log(ans); 
console.log(ans());