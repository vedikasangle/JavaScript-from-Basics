//document.createElement()
//apend
//prepend
//remove


// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("learn js");
// newTodoItem.textContent = "learn new thing"
// const todoList = document.querySelector(".todo-list");
// // newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem)  //append adds at end 
// console.log(newTodoItem);

// //prepend 
// todoList.prepend(newTodoItem) 

// //remove todo 
// const todo1 = document.querySelector('.todo-list li')
// todo1.remove();
// console.log(todo1)


//before and after   
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "learn js";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem)
todoList.after(newTodoItem)



