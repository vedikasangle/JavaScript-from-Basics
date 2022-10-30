//event object 

// const firstButton = document.querySelector("#one");
// // firstButton.addEventListener("click",function(event){
// //     // console.log(this);
// //     console.log(event);
// // })

//jab bhi mai kisi bhi element pe event listener add hoga 
// js engine--> line by line execute karta hai 

//browser --js engine + extra features
//browser -- jse engine + webapi
//jab browser ko ata chala ki user ne event perform kia
//jo hum listen kar rahe the 
//browser  ----2 kaam
//1. callback function is given to js engine 
//2. callback function ke saath browser vo jo event hua hai uski info bhi dega 
//info is given in object form 


const allButtons = document.querySelectorAll(".my-buttons button");
for(let button of allButtons){
    button.addEventListener("click", (e)=>{
        // console.log("you clicked me!")
        // console.log(this)
        // console.dir(this);
        // console.log(this.textContent);  //cannot use this with arrowfunction
        console.log(e)
    })
}

//target? current target????????