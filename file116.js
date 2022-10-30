const allButtons = document.querySelectorAll(".my-buttons button");
// console.log("allButton")

// firstButton.addEventListener("click", function(){
//     console.log("you clicked me!")
// })

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         // console.log("you clicked me!")
//         // console.log(this)
//         // console.dir(this);
//         // console.log(this.textContent);  //cannot use this with arrowfunction


//         })

// }

// for(let i = 0 ; i<allButtons.length;i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }


//for each 
allButtons.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this);
    })
})
        