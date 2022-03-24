// DOM (DOCUMENT OBJECT MODEL) ------------------------------------------------------------------------------------------

// # textContent & innerText--------------------------------------

// let tagLine = document.getElementById("tagline");

// tagLine.textContent = "New Tagline";
// tagLine.style.color = "lightcoral";
// console.log(tagLine.textContent);
// console.log(tagLine.innerHTML);

// # getAttribute--------------------------------------------------

// const inputElement = document.querySelector("section a");
// console.log(inputElement.getAttribute("href"));
// inputElement.setAttribute("href","#subscribed-mail-list");
// console.log(inputElement.getAttribute("href"));

// # get multiple elements by getElementsByClassName------------------

// const navMenu = document.getElementsByClassName("nav-menu");
// console.log(navMenu);

// # get multiple elements by querySelectorAll------------------------

// const navMenus = document.querySelectorAll(".nav-menu");
// console.log(navMenus);

// for(let navMenu of navMenus){
//     navMenu.style.color = "red";
//     navMenu.style.backgroundColor = "blue";
// }

// # innerHTML------------------------------------------------------------

// const header =  document.querySelector(".header-content");
// console.log(header.innerHTML);
// header.innerHTML = "<h1>Go Green</h1>";
// header.innerHTML += "<a>Expore More</a>"

// # getRootNode---------------------------------------------------------

// const rootNode = document.getRootNode(); 
// console.log(rootNode);

// const h1 = document.getElementById("tagline");
// console.log(h1.parentNode.parentNode.parentNode);
// h1.style.border = "3px solid red";
// const parentH1 = h1.parentNode;
// console.log(parentH1.previousElementSibling);

// # body---------------------------------------------------------

// const body = document.body;
// console.log(body);

// # to select Class---------------------------------------------------------

// const container = document.querySelector(".container");{
    // console.log(container.classList);
    // container.classList.add("bg-dark");
    // container.classList.remove("bg-dark");
    // container.classList.toggle("bg-dark");
    // container.classList.toggle("bg-dark");
// }

// # innerHTML to Add html element--------------------------------------------

// const liMenu = document.querySelector("ul");
// liMenu.innerHTML += "<li> Services </>"; 
// liMenu.innerHTML += "<li> Pricing </>"; 
// console.log(liMenu.innerHTML);

// # document.createElement---------------------------------------------------

// const newListMenu = document.createElement("li");
// newListMenu.textContent = "Services";
// const navMenu = document.querySelector("ul");
// navMenu.append(newListMenu);

// ---------------------------------------------------------------------------

// const listMenu1 = document.createElement("li");
// listMenu1.textContent = "Services";
// const listMenu2 = document.createElement("li");
// listMenu2.textContent = "Pricing";

// const navMenu = document.querySelector("ul");
// navMenu.append(listMenu1,listMenu2);                            //TO ADD MULTIPLE ITEMS

// ---------------------------------------------------------------------------

// const listMenu = document.createElement("li");
// listMenu.textContent = "Features";
// const navMenu = document.querySelector("ul");
// navMenu.prepend(listMenu);                                    //TO ADD ELEMENT ON FIRST

// ---------------------------------------------------------------------------

// const navMenu = document.querySelector("ul li");
// navMenu.remove();                                            //TO REMOVE AN ELEMENT

//# after / before---------------------------------------------------------------------------

// const listMenu = document.createElement("li");
// listMenu.textContent = "Features";
// const navMenu = document.querySelector("ul");
// navMenu.before(listMenu);                                    //TO ADD ELEMENT ON BEFORE


// const listMenu = document.createElement("li");
// listMenu.textContent = "Features";
// const navMenu = document.querySelector("ul");
// navMenu.after(listMenu);                                    //TO ADD ELEMENT ON AFTER

//# insertAdjustmentHTML---------------------------------------------------------------------------

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend","<li> New Item Added </li>");          //BEFORE-END
// todoList.insertAdjacentHTML("afterend","<li> New Item Added </li>");           //AFTER-END
// todoList.insertAdjacentHTML("beforebegin","<li> New Item Added </li>");        //BEFORE-BEGIN
// todoList.insertAdjacentHTML("afterbegin","<li> New Item Added </li>");         //AFTER-BEGIN

//# CLONE NODES---------------------------------------------------------------------------

// const toDo = document.querySelector(".todo-list ul");
// console.log(toDo);
// const newToDO = document.createElement("li");
// newToDO.textContent = "New todo";
// const cloneTodo = newToDO.cloneNode(true);
// toDo.append(cloneTodo);

// # Events----------------------------------------------------------------------------------------

// const subscribeEvent = document.querySelector(".subscribe-now");
// console.dir(subscribeEvent);
// subscribeEvent.onclick = function(){
//     console.log("YOu have successfully subscribed our Newsletter");
// }

// RIGHT WAY TO USE EVENT--------------------------------------

// const subscribeEvent = document.querySelector(".subscribe-now");

// subscribeEvent.addEventListener("click", ()=>{
//     console.log("Congrats...! You have successfully subscribd our newsletter");
// });

// ---------------------------------------------

// const myButtons = document.querySelectorAll(".buttons .btn");

// for(let button of myButtons){
//     button.addEventListener("click", function(){
//         console.log(`You have clicked ${button.textContent} button`);
//     })
// }

// ---------------------------------------------USING FOREACH WITH ARROW FUNCTION

// const myButtons = document.querySelectorAll(".buttons .btn");

// myButtons.forEach((button) => {
//     button.addEventListener("click", (event) =>{
//         console.log(event.currentTarget.textContent);
//     })
// })

// CLICK EVENT PRACTICE---------------------------------------------------------

// const button = document.querySelector(".btn");
// console.log(button);

// button.addEventListener("click", function(){
//     console.log(`You clicked ${button.textContent}`);
//     button.style.backgroundColor = "black";
//     button.style.color = "white";
// })


// const button = document.querySelectorAll(".btn");
// // console.log(button);

// for(let btn of button){
//     console.log(btn.textContent);
//     btn.addEventListener("click", function(){
//         btn.style.backgroundColor = "black";
//         btn.style.color = "white";

//     })
// }

// button.addEventListener("click", function(){
//     console.log(`You clicked ${button.textContent}`);
// })

// CHANGE BACKGROUND COLOR PROJECT---------------------------------------------------------------------------

// const body = document.body;
// const changeButton = document.querySelector('.btn');
// const currColor = document.querySelector(".currColor")

// // RANDOM COLOR FUNCTION
// let rgbVal = Math.ceil(Math.random()*255);
// function randomColorGenerator(){
//     let red = Math.ceil(Math.random()*255);
//     let green = Math.ceil(Math.random()*255);
//     let blue = Math.ceil(Math.random()*255);
//     randomColor = `rgb(${red}, ${green}, ${blue})`;
//     return randomColor;
// }

// changeButton.addEventListener("click", function(){
//     const rgbColor = randomColorGenerator();
//     body.style.backgroundColor = rgbColor;
//     currColor.textContent = "Current Color: " + rgbColor;
// });

// KEY PRESS EVENT----------------------------------------------------------------------------------------

// const body = document.body;

// body.addEventListener("keypress", (event) => {
//     console.log(event.key);
// })

// MOUSEOVER / MOUSELEAVE EVENT----------------------------------------------------------------------------

// const subscribeBtn = document.querySelector('.subscribe-now');

// subscribeBtn.addEventListener("mouseover", () => {                               //MOUSE HOVER
//     console.log(`Mouse hover on ${subscribeBtn.textContent} button`);
// })

// subscribeBtn.addEventListener("mouseleave", () => {                             //MOUSE LEAVE
//     console.log(`Mouse leave from ${subscribeBtn.textContent} button`);
// })
