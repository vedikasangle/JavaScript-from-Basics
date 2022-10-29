const sectionTodo = document.querySelector(".todo-section");
// console.log(sectionTodo.classList);
sectionTodo.classList.add('bg-dark')
// sectionTodo.classList.remove("container")

const ans = sectionTodo.classList.contains("contaiiner");
console.log(ans);

sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");


const header = document.querySelector(".header");

header.classList.add("bg-dark");
console.log(header.classList);