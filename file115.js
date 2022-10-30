//this keyword inside 

const btn = document.querySelector(".btn-headline");

// function myFunc(){
//     console.log("why did you click me");
//     console.log("value of this ");
//     console.log(this);

// }

// btn.addEventListener("click", myFunc);

//normal function when this used ->btn shown itself
//arrow function when this used -> window shown 

btn.addEventListener("click", ()=>{
    console.log("why did you click me");
    console.log("value of this ");
    console.log(this);
})