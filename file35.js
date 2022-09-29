//spread operator
// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const newArray = [...array1];  //values of array1 copied in newArray
// const newArray1 = [...array1,...array2, 89 , 69];
// console.log(newArray);
// console.log(newArray1);

// const newArray2 = [..."abc"];
// console.log(newArray2);

// const newArray3 = [..."123456789"]
// console.log(newArray3);

//spread operator in objects 
const obj1 = {
    key1 : "value1",
    key2 : "value2"
    //key1 : "value59";  keys cannot be 2 in objects
}
const obj2 = {
    key1 : "valueuni",
    key3 : "value3",
    key4 : "value4"
}
// const newObject = {...obj1 , ...obj2, key69 :"value69"};
// console.log(newObject);
// const newObject1 = {...obj2 , ...obj1};
// console.log(newObject1);

const newObject = {..."abc"};
console.log(newObject);

const newObject1 = {...["item1, item2"]};
console.log(newObject);

const newObject2 = {..."abcdefgjijk"}; //we cannot put abcd..jk in []!
console.log(newObject2) ;
