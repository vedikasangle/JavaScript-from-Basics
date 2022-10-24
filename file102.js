//get multiple elements using getElement by class name 
//get multiple elements using querySelectorAll

// const navItems = document.getElementsByClassName("nav-items");
// console.log(Array.isArray(navItems[1]));  //we get array like object but its not array
// console.log(navItems[2]);  //it gives html collection

const navItems = document.querySelectorAll(".nav-items"); //nodelist as output
console.log(navItems[0]);

//difference between html collectiov and node list  ? 
