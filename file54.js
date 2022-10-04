//sort method 

// sort meaning

// 5,9,1200,400, 3000
//5,9,400,1200,3000 ->ascending order (expected) 

// // const numbers = [5,9,1200,400, 3000];
// //sorted according to ascii codes 

// numbers.sort() //this method changes original array  

// console.log(numbers);  //very wierd result 

// //advantages : useful to sort strings 
//rules : first capital letter are sorted 


// const userNames = ['harshit', 'abcd' , 'mohit', 'nitish' , 'Zaki']
// userNames.sort();
// console.log(userNames); 

const numbers = [5,9,1200,400, 3000];
numbers.sort((a,b)=>{
    return a-b;
}); 

console.log(numbers);

// 1200,410 
//a-b --> +ve(greater than 0 ) here : 790  -->b,a
//410 , 1200 
//a-b --->-ve (less than 0 ) --->a,b 

//ascending order => a-b
//descending order => b-a

//useful for sorting price  









