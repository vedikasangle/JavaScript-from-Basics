//sets(it is iterable)
//store data 
//sets also have its own methods
//no index-based access
//order is not gauranteed
//unique items only(no duplicates allowed)
//different data types can be stored in sets 

const numbers = new Set([1,2,3]);
console.log(numbers);
console.log(numbers[2]); //not valid 

const numberss = new Set();
numberss.add(1);
numberss.add(2);
//numberss.add(2);  //not valid 
// numbers.add(items);
// numbers.add(items);  ..not valid again 

numbers.add(['item1' , 'item2']);
numbers.add(['item1' , 'item2']); //both are different
console.log(numbers);

if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}

for(let number of numbers){
    console.log(numbers);
}
  
//set shall be used when there are unique values 
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0 ;
for(let element of uniqueElements){
    length ++;

}

console.log(length);

// console.log(uniqueElements);

// //console.log(uniqueElements.length);  ->invalid

// console.log(myArray);

