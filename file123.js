const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e)=>{
    // console.log("form submitted!")
    e.preventDefault(); //stops tab from getting refreshed
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML =   `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class = "todo-btn done">done</button>
        <button class = "todo-btn remove">remove</button>
    </div>`; 

    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi) 
    todoInput.value = "";
 

})

todoList.addEventListener("click" , (e )=>{
    //check if usrr user clicked on done button 
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something?");
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("great!")
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan)
        liSpan.style.textDecoration = "Line-through";
    }

})