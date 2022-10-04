//find method 

const myArray = ["hello" , "cat" , "dog" , "lion"];

function isLength3(string){
    return string.length ===3;
}


const ans = myArray.find(isLength3);  //only gives the first occurence
console.log(ans);


// const ans = isLength3("dog");
// console.log(ans);

const users = [
    {userId : 1 , userName :"harshit"},
    {userId : 2 , userName :"vedika"},
    {userId : 3 , userName :"priya"},
    {userId : 4 , userName :"idk"},
    {userId : 5 , userName :"howyoudoin"},
];


const myuser =  users.find(
    (user)=>user.userId===3
);
console.log(myuser);