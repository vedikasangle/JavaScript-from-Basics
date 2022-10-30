//intro to events 
//click 
//button press
//mouse hover 
//input events

//event add karneke 3 tarike hai 

//1. directly in html file


// //2.
 const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me");
// }


//3. ->best method 
//method -> add event listener 
// function clickMe(){
//     console.log("you clicked mee!!");
// }



// btn.addEventListener("click", function(){
//     console.log("why did you click me");
// } ); 


//arrow function
btn.addEventListener("click", ()=>{
    console.log("arrow function");
})  


