function hello(){
    console.log("hello world");
}

//javascript function ==> function + object 

//console.log(hello.name)


hello.MyOwnProperty = "very unique value";
console.log(hello.MyOwnProperty ); 

//name property  --> tells function name ;

//function provides more useful properties 

// function gives us a free space (empty object) which is called as prototype


console.log(hello.prototype) ; //{} 

// only functions provide prototype property

 
hello.prototype.abc = "abc";
 

 
hello.prototype.sing= function(){
    return "alalal";
};

console.log(hello.prototype.sing());

if(hello.prototype){
    console.log("prototype is present")
}else{
    console.log("prototype is not present")
}