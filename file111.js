//some old methods to support poor IE
//appendChild
//insertBefore
//replaceChild
//removeChild

const ul = document.querySelector(".todo-list");

//new element
const li = documen.createElement("li");
li.textContent = "new todo";

//reference nodee
const referenceNode = document.querySelector(".first-todo")
// li.textContent = "new todo";
// ul.appendChild(li);
// ul.insertBefore(li, referenceNode)

// ul.replaceChild(li, referenceNode); 
ul.removeChild( referenceNode); 



