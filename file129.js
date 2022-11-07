//function returning functions 


const bucket = ['coffee', 'chips', 'vegetable', 'salt' , 'rice'];

function ricePromise(){
    return  new Promise((resolve, reject)=>{
        if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried rice");
        } else{
            reject("could not do it"); //we can pass anythinh in this array , etc 
        }
    })
}

ricePromise().then(
    (myfriedRice)=>{
        console.log("lets eat", myfriedRice)
    }
).catch(
    (error)=>{console.log(error)}
)

