//lexical environment and scope chain 

const lastName = "sangle ";

const printName = function(){
    const firstName = "vedika";
    function myfunction(){
    console.log(firstName);
    console.log(lastName );
    }
    myfunction(); 
}

printName();