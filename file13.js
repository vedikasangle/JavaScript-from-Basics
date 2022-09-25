//nested if else

// winning number = 19 ; 
// 19 your guess is right 
// 17 too low 
// 20 too high 


let winningno = 19 ; 
let userguess = +prompt("guess a number"); //prompt takes input in string so adding + so that it takes it as number 

console.log(typeof userguess , userguess);

if(userguess === winningno){
    console.log("Your guess is right");
}else{
    if(userguess < winningno){
        console.log("too low!");
    }else{
        console.log("too high!");
    }
}