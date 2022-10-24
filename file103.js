//loop
//get multiple elements using getElement by class name 
//get multiple elements using querySelectorAll

//array like object ==>indexing, length property

let navItems = document.getElementsByTagName("a");
//  console.log(navItems);
//  console.log(navItems);

 //simple for loop
 //for of loop
 //for each llop ->cannot use to iterate throught htmlcollection
 
 //simple for loop
//  for(let i = 0 ; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
//  }

//for of loop
for(let navItem of navItems){
    navItem.style.backgroundColor = "#fff";
 navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
} 
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//        navItem.style.fontWeight = "bold";
//})  //for each loop error

navItems = Array.from(navItems)
console.log(Array.isArray(navItems));
navItems.forEach((navItem)=>{
     navItem.style.backgroundColor = "#fff";
     navItem.style.color = "green";
        navItem.style.fontWeight = "bold";
 })  

  
 let navItemsa = document.querySelectorAll("a");
console.log(navItemsa) //we get node list

//we can use simple for loop, for of loop and for each loop in nodelist 

//  //simple for loop
//   for(let i = 0 ; i<navItemsa.length; i++){
//      // console.log(navItems[i]);
//      const navItem = navItemsa[i];
//      navItemsa.style.backgroundColor = "#fff";
//      navItemsa.style.color = "green";
//      navItemsa.style.fontWeight = "bold";
//   } 











 //console.log(Array.isArray(navItems[1]));  //we get array like object but its not array
// console.log(navItems[2]);  //it gives html collection

// const navItemss = document.querySelectorAll(".nav-items"); //nodelist as output
// console.log(navItems[0]);
