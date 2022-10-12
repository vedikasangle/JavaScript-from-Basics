function hello(){
    console.log("hello world");
}


hello();
hello.call();

// call apply bind

//call
function about(hobby, favMusician){
    console.log(this.firstName , this.age, hobby , favMusician )
}

const user1 = {
    firstName : "vedika",
    age : 20 ,

}

const user2 = {
    firstName : "sangle",
    age : 21 ,
}

about.call(user1, "guitar" , "Atif Aslam")

// user1.about();


//apply
about.apply(user1, ["guitar" , "Atif Aslam"] )


//bind
const func = about.bind(user1 , "guitar" , "someone"  );
func();