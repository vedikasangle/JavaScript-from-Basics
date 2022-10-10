//splice method 
//start, delete , insert


const myArray = ['item1', 'item2', 'item3'];


//delete
// myArray.splice(1,1); //(starting index, number of items to be deleted)
// console.log(myArray);

const deletedItem = myArray.splice(1,1); 
console.log("deleted item" , deletedItem);


 

//insert
myArray.splice(1,0,'inserted item')  //(starting index, number of items to be deleted , element to be inserted )
console.log(myArray)


//insert and delete 

myArray.splice(1,2,"inserted item 1" , "inserted item 2");
console.log("deleted item" , deletedItem);
console.log(myArray);

