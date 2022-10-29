//static list vs live list 
// query selector all gives srtatic list degi 
// getelementsbysomethinh hamien live lst degi 

// const listItems = document.querySelectorAll (".todo-list")
const ul = document.querySelector(".todo-list");
const listItems = document.getElementsByClassName("li")

const sixthLi = document.createElement("li")
sixthLi.textContent = "item 6 ";
// const ul = document.querySelector(".todo-list");
ul.append(sixthLi)
console.log(listItems);