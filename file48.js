//callback function 


// myfunc([1,2,3]);
// myfunc("vedika");

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    // sql query
    // const data  = {}
    // callback(data);
    console.log("hello there!")
   // console.log(a);
   callback('vedika');
}


myFunc(myFunc2);

