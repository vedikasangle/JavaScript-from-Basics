//how to get dimensions of element 

// height width 

const sectionTodo = document.querySelector(".section-todo")
const info = sectionTodo.getBoundingClientRect();
const infoo = sectionTodo.getBoundingClientRect().top;
console.log(info) 