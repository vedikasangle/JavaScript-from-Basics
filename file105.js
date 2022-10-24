// //traversing dom tree 
// const rootNode = document.getRootNode();
// console.log(rootNode);
// const htmlElementNode = rootNode.childNodes[0];

// console.log(htmlElementNode.childNodes);  //NodeList(3) [head, text, body]



// const headElementNode = htmlElementNode.childNodes[0];
// const textNode = htmlElementNode.childNodes[1];
// const BodyNode = htmlElementNode.childNodes[2];

// console.log(headElementNode);

// console.log(textNode);

// console.log(BodyNode);


// //to check parent node 
// console.log(headElementNode.parentNode);

// //sibling relationship
// console.log(headElementNode.nextSibling); //#text node 

// //what is inside text? -> \n


// //property-> to skip text node
// console.log(headElementNode.nextElementSibling);

// //to check head childnodes 
// console.log(headElementNode.childNodes)

// //select h1 and go till parent 
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefe";
// body.style.backgroundColor = "#333"

// // //selecting body only
// // const body = document.body  
// // body.style.color = "#efefe";
// // body.style.backgroundColor = "#333"

// const head = document.querySelector("head");  
// const title = head.querySelector("title");
// console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container.children);




 