//elem.insertAdjacentHTML(where, html)
//beforebegin;
//afterbegin
//beforeend;
//afterend;


const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend" , "<li> teach js</li>")
todoList.insertAdjacentHTML("afterbegin" , "<li> teach js</li>")

todoList.insertAdjacentHTML("beforebegin" , "<li> teach js</li>")

todoList.insertAdjacentHTML("afterend" , "<li> teach js</li>")