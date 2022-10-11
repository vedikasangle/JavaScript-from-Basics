//optional chaining 

const user = {
    firstName : "harshit",
    //address : {housenumber :'1234'}
}

console.log(user?.firstName);
console.log(user?.address?.housenumber);