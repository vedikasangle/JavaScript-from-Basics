//callbacks, callback hell , pyramid of doom 
//asynchronous programming 

const heading1 = document.querySelector(".heading1");
 const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
 const heading4 = document.querySelector(".heading4");
 const heading5 = document.querySelector(".heading5");
 const heading6 = document.querySelector(".heading6");
 const heading7 = document.querySelector(".heading7");

// //callback hell ->nested callbacks 
// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "blue";
//     setTimeout(()=>{
//         heading2.textContent = "Heading 2 " ;
//         heading2.style.color = "red"
//         setTimeout(()=>{
//             heading3.textContent = "Heading 3 ";
//             heading3.style.color = "pink"
//             setTimeout(()=>{
//                 heading4.textContent = "Heading 4 ";
//                 heading4.style.color = "orange"
//                 setTimeout(()=>{
//                     heading5.textContent = "Heading 5 ";
//                     heading5.style.color = "yellow"
//                     setTimeout(()=>{
//                         heading6.textContent = "Heading 6 ";
//                         heading6.style.color = "purple"
//                         setTimeout(()=>{
//                             heading7.textContent = "Heading 7 ";
//                             heading7.style.color = "red"
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000);

// setTimeout(()=>{
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "pink";
// },2000);

function changeText(element, text , color , time, onsuccesscallback , onfailurecallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text ; 
            element.style.color = color;
            if(onsuccesscallback){
            onsuccesscallback();
            }
        }else{
            // console.log("your element does not exists")
            if(onfailurecallback){
                onfailurecallback();
            }
        }
    } , time)
}

// changeText(heading1, "one" , "pink" , 2000, ()=>{
//     changeText(heading2 , "two" , "green" , 1000)
// } );

//pyramid of doom
changeText(heading1 , "one", "green" , 1000, ()=>{
    changeText(heading2 , "two", "purple" , 1000, ()=>{
        changeText(heading3 , "three", "red" , 1000, ()=>{
            changeText(heading4 , "four", "pink" , 1000, ()=>{
                changeText(heading5, "five", "yellow" , 1000, ()=>{
                    changeText(heading6 , "six", "blue" , 1000, ()=>{
                        changeText(heading7 , "seven", "brown" , 1000, ()=>{
                            
                            }, ()=>{
                                console.log("heading7 does not exist")
                            })
                        }, ()=>{
                            console.log("heading5 does not exist")
                        })
                    }, ()=>{
                        console.log("heading4 does not exist")
                    })
                }, ()=>{
                    console.log("heading3 does not exist")
                })
            }, ()=>{
                console.log("heading2 does not exist")
            })
        }, ()=>{
            console.log("heading2 does not exist")
        })
}, ()=>{
    console.log("heading1 does not exist")
})