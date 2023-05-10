// DOM 0 = Document Object Model (API)
//        An interface for changing the content of a page 

//console.dir(document);
//console.log(document.title);
//document.body.style.backgroundColor = "skyblue";
//document.getElementById("myDiv").innerHTML = "<h1>Hello</h1>";

//let element = document.getElementById("myTitle");
//element.style.backgroundColor = "lightgreen";
/*
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
});

let vegetables = document.getElementsByTagName("li");

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "black;"

//let element = document.querySelector("li");
//element.style.backgroundColor = "lightgreen";

let elements = document.querySelectorAll("li");
 
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})

let element = document.querySelector("#desserts")
let children = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = "blue")
// .firstElementChild
//  .lastElementChild
//  .perentElement
// .nextElementSibligs
//  .previousElementSiblings
//  childrem[]
//  Array.from(.children)

*/

// add/change HTML elements
//.innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag);

/*const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myList.append(listItem); // add end of list
//myList.prepend(listItem); // add start of list
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);/**/
/*
const title = document.getElementById("myTitle");
title.style.backgroundColor = "rgb(50,200,100)";
title.style.fontFamily = "consolas";
title.style.display = "block";
*/

//const element = document.getElementById("myButton")
//element.onclick = doSomeThing;

//const element = document.body;
//element.onload = doSomeThing
/*
function doSomeThing() {
    alert("You did something!");
}*/
/*const element = document.getElementById("myText");
element.onchange = doSomeThing;

function doSomeThing() {
    alert("You did something!");
}
const element = document.getElementById("myDiv");
element.onclick = doSomeThing;
element.onload = doSomeThing;
element.onmouseover = doSomeThing;
element.onchange = doSomeThing;
element.onmouseover = doSomeThing;
element.onmouseout = makeSomeThing;
element.onmousedown = makeSomeThing;
element.onmouseup = doSomeThing;

function doSomeThing() {
    element.style.backgroundColor = "blue";
}
function makeSomeThing() {
   element.style.backgroundColor = "red";
}
*/

//.addeventListener(event,function,useCapture)
//use can add many event handlers to one element
//even the some event that invokes different functions

/*
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");
innerDiv.addEventListener("mouseover",changeRed);
innerDiv.addEventListener("mouseout",changeGreen);
outerDiv.addEventListener("click", changeBlue, true);

function changeRed() {
    innerDiv.style.backgroundColor = "red";
}
function changeGreen() {
    innerDiv.style.backgroundColor = "green";
}
function changeBlue() {
    alert(`you selected ${this.id}`);
    outerDiv.style.backgroundColor = "blue";
}


const myButton = document.getElementById("myButton");
const myImage = document.getElementById("#myImg");
myButton.addEventListener("click", () => {
    if(myImage.style.display == "none") {
        myImage.style.display == "block";
    }else {
        myImage.style.display == "none";
    }
});*/

//window.addEventListener("keydown", event => console.log(event.key))
/*
const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

function move(event) {

switch(event,key){
    case "ArrowDown":
       y +=5;   
       myDiv.style.top = y + "px";
       break;
    case "ArrowUp":
        y -=5;   
        myDiv.style.top = y + "px";
        break;
    case "ArrowRight":
            x +=5;   
            myDiv.style.left = x + "px";
            break;
    case "ArrowLeft":
                x -=5;   
                myDiv.style.top = x + "px";
                break;
    default:
        break;            

      }
}*/
//ANİMAMTİON
/*
const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click",begin);

function begin () {
    let timerId = null;
    let degrees = 0;
    let scaleX = 1;
    let scaleY = 1;
  timerId = setInterval(frame , 5);

  function frame () {
     if(x >= 200 || y >= 200) {
        clearInterval(timerId)
     }else {
        x +=1;
        y +=1;
        myAnimation.style.left = x + "px";
        myAnimation.style.top = y + "px";
     }}
  /*
     function frame () {
        if(x >= 200 || y >= 200) {
           clearInterval(timerId)
        }else {         
          degrees +=2;
          x +=1;
          y +=1;
          myAnimation.style.left = x + "px";
          myAnimation.style.top = y + "px";
          myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }*/

/*
function frame () {
    if(scaleX <= 0.1 || scaleY <= 0.1) {
       clearInterval(timerId)
    }else {   
     scaleX -=0.01;      
     scaleY -=0.01;
     myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
          }  
      }
 }*/

 // CANVAS API = a mean for drawing graphics,
 //              used for animations,games,data visualization

//let canvas = document.getElementById("myCanvas");
//let context = canvas.getContext("2d");
/*
//DRAW LINES
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke()
*/
//DRAW TRİANGLE
/*
context.fillStyle = "yellow";
context.strokeStyle = "grey";
context.lineWidth = 5;
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250);
context.lineTo(250,0);
context.stroke()
context.fill()
*/
//DRAW RECTANGLE
/*
context.fillStyle = "red"
context.fillRect(0,0,250,250);
context.strokeStyle = "#222222";
context.strokeRect(0,0,250,250);

context.fillStyle = "black"
context.fillRect(0,250,250,250);
context.strokeStyle = "#222222";
context.strokeRect(0,250,250,250);

context.fillStyle = "green"
context.fillRect(250,250,250,250);
context.strokeStyle = "#222222";
context.strokeRect(250,250,250,250);

context.fillStyle = "blue  "
context.fillRect(250,0,250,250);
context.strokeStyle = "#222222";
context.strokeRect(0,250,250,250);
*/
//DRAW CIRCLE
/*
// (x,y,r,sAngle,eAngle,counterclockwise)
 context.fillStyle = "lightblue";
 context.strokeStyle = "darkblue";
 context.lineWidth = 10;
 context.beginPath();
 context.arc(250,250,200,0,2*Math.PI,);
 context.stroke();
 context.fill();
 */
// DRAW TEXT
/*
 context.font = "50px MV Boli";
 context.fillStyle = "grey";
 context.textAlign = "center";
context.fillText("YOU WİN!",canvas.width/2,canvas.height/2);
*/ 
// window = interface used to talk to the web web browser 
//          thge DOM is a property of yhe window
//console.dir(window)
//console.log(window.outerWidth);
//console.log(window.outerHeight);
//console.log(window.scrollY);
//console.log(window.scrollX);
//console.log(window.location.href);
//const myButton = document.querySelector("#myButton");
//myButton.addEventListener("click", () => window.open("https://www.google.com"));
//myButton.addEventListener("click", () => window.close();
//myButton.addEventListener("click", () => window.print());


//cookie = a small text file stored onyour computer
//        used to remember information about the user 
//        saved in name = value pairs

//document.cookie = "firstName = SpongeBob;";

setCookie("firstName","SpongeBob",365);
setCookie("lastName","SquarePants",365);

getCookie("firstName")


function setCookie (name,value,daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires =" + date.toUTCString();
    document.cookie = `${name}=${value};${expires}; path = /`; 
};

function deleteCookie (name) {
    setCookie(name,null,null);
}

function getCookie(name) {
   const cDecoded = decodeURIComponent(document.cookie);
   console.log(cDecoded);
}

















































































































