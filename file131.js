// //promise.resolve

// const myPromise = Promise.resolve(5);
// myPromise.then(value=>{
//     console.log(value);
// })


// then() method returns promise alwayss 

function myPromise (){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

//promise is being returned 
myPromise().then(value=>{
    console.log(value);
    value += "bar";
    return value;  //if return is not written, undefined is written
})

//promise chaining -->
.then((value)=>{
    console.log(value);
    value +="baaz";
    return value;
})
.then(value=>{
    console.log(value);
    value +="idk";
    return value;
})
.then(value=>{
    console.log(value);
    value +="idc";
    return value;
})

//we caanot apply promises on string , we can only apply on functions ig!?

