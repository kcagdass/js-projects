
/*let username;

document.getElementById("myButton").onclick = function () {

    username = document.getElementById("myText").value; 
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
} 

let age = window.prompt("How old are you");
age = number(age);
age += 1;
console.log("happy birtday you are " ,age , "years old");

const pi = 3.14159; //const variable can't be changed
let radius;
let circumference;
 
radius = window.prompt("Enter the radius af a circle");
radius = Number(radius);
 
circumference = 2*pi*radius;
console.log( "the circumference is:", circumference);
//MATH
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;


//x = Math.round(x); nerarest
//x = Math.floor(x); down number
// x = Math.ceil(x); up number
//x = Math.sqrt(x)
//x = Math.abs(x) it is positive all of time

//maximum = Math.max(x,y,z);
// minimum = Math.min(x,y,z);

console.log(maximum);

let a;
let b;
let c;

a = document.getElementById("nameA").value;
b = document.getElementById("nameB").value;
a = Number(a);
b = Number(b);
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

document.getElementById("submit").onclick = function () {
    document.getElementById("cSqr").innerHTML = c;
}*/
/*
let a;
let b;
let c;

document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("btextBox").value;
    b = Number(b);

    console.log(a+b);

    //c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    //document.getElementById("cLabel").innerHTML = "SİDE" ;
}
*/
//COUNT APP
/*

let count = 0;

document.getElementById("decreaseBtn").onclick = function () {

    count = count -1;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("resetBtn").onclick = function () {

    count = 0;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("increaseBtn").onclick = function () {

    count +=1;
    document.getElementById("countLabel").innerHTML = count;

}*/
/*
//RANDOM NUMBER CREATOR

let x =Math.ceil( Math.random()*6+1);
let y =Math.ceil( Math.random()*6+1);
let z =Math.ceil( Math.random()*6+1);

document.getElementById("rollButton").onclick = function () {

let x =Math.floor( Math.random()*6+1);
let y =Math.floor( Math.random()*6+1);
let z =Math.floor( Math.random()*6+1);

document.getElementById("xLabel").innerHTML = x;

document.getElementById("yLabel").innerHTML = y;

document.getElementById("zLabel").innerHTML = z;

}*/
/*
let username = "BRO CODE";
let phoneNumber = "123-456-7895";

//console.log(username.length);
//console.log(username.charAt(4))
//username = username.toUpperCase();
//username = username.toLowerCase();
phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);

let fullName = "Bro Code";
let firstName;
let lastName;

//lastName = fullName.slice(4);
//firstName = fullName.slice(0,4);
lastName = fullName.slice()

console.log(lastName);
console.log(firstName);
console.log(fullName);*/

//let userName = "bro";
//console.log(userName.charAt(0).toUpperCase());

//IF STATEMENT

 /*let age = 18;

 if (age >18){
    console.log("you are adult!");
 }
 else if(age < 0) {
  console.log("you haven't been born yet")
 }
 else{
    console.log("you are a child");
 }
 let online = true;

 if(online) {
    console.log("you are online");

 }
 else{
    console.log("you are not online")
 }

 document.getElementById("myButton").onclick = function() {
    const myCheckBox = document.getElementById("myCheckBox");
    if(myCheckBox.checked){
        console.log("you are subscribe")
    }
    else{
       console.log("you are not subscribe!")
    }
 }
 let grade = "";
 switch(grade) {
    case "A":
        console.log("you did great!");
        break;          
    case "B":
        console.log("you did good");
         break;
    case "C":
        console.log("you pass barely");
         break;
    default:
         console.log(grade , "not is a letter grade");
  
 }*/
/*
** ! = not logıcal operator 
** && = and operator
** || or operator
 let a = 15;

 if(a > 15 || a < 5) {
    console.log("it is good job!")
 } else if(a >= 5 && a <15 ) {
    console.log("you are fine")
 } else{
    console.log("it is not bad!")
 }
*/
// while loop repeat some code 
//while some condition true
//potantially infinite
//while(conditıon){
   //do something
/* do whıle loop == do something 
then check the condition,
repeat condition is true*/
/* for loop =repeat some code a
certain amount of times*/

/*let x = 1;

for(x = 1; x<5 ; x++) {
   console.log(x);
}*/

//break = breaks out of a loop entirely
//continue = skin an iteration of a loop 
/*for(let i = 1; i<20; i++){
   if(i == 13){
      break; // is is break loop 
   }
   console.log(i);
}*/
/*for(let i = 1; i<20; i++){
   if(i == 13){
      continue; //dont loop 13
   }
   console.log(i);
}*/
//nested loop = a loop inside of another loop 
/*let symbol = window.prompt("enter a symbol");
let rows = window.prompt("enter # of rows");
let columns = window.prompt("enter # of columns");

 for (let i = 1; i <= rows;i++) {
   for(j = 1; j <= columns; j++){
      document.getElementById("myRectangle").innerHTML += symbol;
   }
   document.getElementById("myRectangle").innerHTML += "<br>";
 }*/
 //FUNCTİON = DEFİNE CODE ONCE,USE MANY TİMES
 //           TO PERFORM SOME CODE, CALL THE FUNCTİON NAME

 /*startProgram();
 function startProgram() {
   let username = "bro";
   let age = 21;
   happyBirtday(username,age);
 }
function happyBirtday(username,age) {
   console.log("happy birtyday",username);
   console.log("you are",age,"years old");
}*/

//return = returns a value back to the place 
//         where you  invoked a function
 /*let area;
 let width;
 let height;

 width = window.prompt("give a width");
 height = window.prompt("give a height");
 

 area = getArea(width,height);
 console.log("this area is",area);
 function getArea(width,height) {
 let  result = width*height;
 return result;
 }*/

 //ternary operator = shortcut for an 'if/else statements'
 //                   takes 3 operands

 //                   1.a condition with ?
 //                   2.expression if true :
 //                   3.expression if false 

 // condition ? exprİfTrue : expFalse
 /*checkWinner(true);
function checkWinner(win) {
  win ? console.log("you are win") : console.log("you lose!")
}*/
 
//variable scope = where a variable is accessible 

// let = variables are limited to block scope {}
// var = variables are limited to a function (){}


// template literals = delimited with  (')
           //         instead of double or single quotes
           //         allows embedded variables and expressions



//toLocaleString() =  returns a string with a language
//                    sensitive representation of this

// number.toLocaleString(locale,{options});

//'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

/*const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function() {
 let guess = document.getElementById("guessField").value;
 guesses += 1;

 if(guess == answer){
   alert(`${answer} isis the #.
   It took you ${guesses} guesses`);
 } 
else if( guess < answer) {
alert(Too Small)
}
else{
   alert("Too Large!")
}
}*/
/*
document.getElementById("submitButton").onclick = function() {
   let temp;
   
   if(document.getElementById("cButton").checked ) {
      temp = document.getElementById("textBox").value;
      temp = Number(temp);                  
      temp = toCelcius(temp);
      document.getElementById("tempLabel").innerHTML =temp + "C";
   }
   else if(document.getElementById("fButton").checked){

      temp = document.getElementById("textBox").value;
      temp = Number(temp);                  
      temp = tofahrenheit(temp);
      document.getElementById("tempLabel").innerHTML = temp + "F";
   }
   else{
      document.getElementById("tempLabel").innerHTML = "Select a unit"
   }
}



function toCelcius(temp){
   return (temp-32)*9/5;

}
function toFehrenheit(temp){
   return (temp*9/5)-32;
}*/


//ARRAY  =  THINK THİNK OF AS A VARABLE
//          THAT CAN STORE MULTİPLE VALUES

/*let fruits = ["apple","banana","orange"];
//fruits[1] = "be"
fruits.push("lemon");       //add an element
fruits.pop();               //remove last element
fruits.unshift("mango");    //add element to begining
fruits.shift();           // remove begining elemet

let length  = fruits.length; // lenght of array
let index = fruits.indexOf("apple"); // give index number of element
console.log(length);*/

/*
let prices = [5,10,15,20];

for(let i = prices.length - 1; i >= 0; i--) {
   console.log(prices[i])
}

for(let price of prices) {
   console.log(price);
}

let fruits = ["banana","apple","orange","mango"];

//fruits.sort() //alfabetic
//fruits.sort().reverse() // reverse alfabetic

for(let fruit of fruits){
   console.log(fruit);
}

//2D ARRAY = AN ARRAY OF ARRAYS

let fruits = ["apple","orange","bananas"];
let vegatables = ["carrots","onions","potatoes"];
let meats = ["eggs","chicken","fish"];

let gloceryList = [fruits,vegatables,meats];

gloceryList[][] --> // if you want to acces value***

for(let list of gloceryList) {
   for(let food of list){
      console.log(food);
   }
}

*/

/* spread operatör = allows an iterable such as an
                     array or string   to be expanded
                     in places where zero or more 
                     arguments are expected 
                     (unpacks the element)

let numbers = [1,2,3,4,6,7,8,9];
let maximum = Math.max(...numbers); // number -> NAN

console.log(maximum);



let class1 = ["pattrick","jonathan","crisytine"];
let class2 = ["squadvard","brook","mr anderson"];


class1.push(...class2);
console.log(...class1);
*/

/*rest parameters  = represents an indefinite number 
  ...                of parameter
                     (packs arguments into an array)
                    
 
    
   let a = 1;
   let b = 2;
   let c = 3;
   let d = 4;
   let e = 5;

  console.log(sum(a,b,c));

  function sum(...numbers) {
   let total = 0;
   for(let number of numbers){
      total += number;
   }
   return total;
  }
 */

//callback  = a function passed as an argument 
//            to another function

/*
let total = sum(2,3,displayDom);


function sum(x,y,callback) {
   let result = x + y;
   callback(result);
}
function displayDom(total){
   document.getElementById("myLabel").innerHTML = total;
}*/

//array.forEach() -> executes a provided callback function 
//                  once for each array element

/*let students = ["spongebob","patrick","squidward"];
 students.forEach(capitilaze);
 students.forEach(print)

function capitilaze(element,index,array) {
   
   array[index] =  element[0].toUpperCase() + element.substring(1);


}
function print(element) {
   console.log(element);
}*/

// array map()  = executes a provided callback function 
//                  once for each array element
//                 AND creates a new array

/*
let numbers = [1,2,3,4,5];
let cubes = numbers.map(cube);
cubes.forEach(print);

function cube(element){
 return Math.pow(element,3);
}
function print(element) {
   console.log(element);
}

//array filter = creates a new array with all elements
//               that pass the test provided by a function

let ages = [18,16,21,17,19,90];
let adults = ages.filter(checkAge);
 
adults.forEach(print)

function checkAge(element) {
   return element >=17;
}
function print(element){
   console.log(element)
}


// array.reduce() = reduses an array to a single value

let prices = [5,10,15,20,25];
let total = prices.reduce(checkOut);
console.log(`the total is : $${total}`)

function checkOut(total,element) {
   return total + element;
    
}

let grades = [100,50,70,60,80];

grade = grades.sort(descendingSort);

grades.forEach(print);


function descendingSort(x,y){
   return x-y;
}

function print(element){
   console.log(element)
}

*/


//arrow function = compact alternative
//                 to a traditional function

// => ()

//const greeting = (userName) => console.log(`hello ${userName}`);

//const percent = (x,y) =>  x/y * 100;
//console.log(`${percent(50,100)}%`)

/*let grades = [50,90,70,100,80,60];
grades.sort((x,y) => y-x);

grades.forEach((element) => console.log(element));
  
*/
/*
let cards = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];

shuffle(cards);
//console.log(cards);

cards.forEach(card => console.log(card));



function shuffle(array) {
   let currentIndex = array.lenght;

   while(currentIndex != 0) {
      let randomIndex = Math.floor(Math.random().array.lenght);
      currentIndex -= 1;

      let temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
   }
   return array;
}
*/

//nested functions =  function inside other functions.
//               Ouher functions have acces to inner functions .   
//              Inner functions are "hidden" from outside the outher functions. 
//              used in closures(future vıdeo topic)
/*
let userName = "Bro";
let userInbox = 2;
login()

function login() {
    displayUserName() => 
    displayUserInbox();
function displayUserName(){
   ;
}
function displayUserInbox(){
   console.log(`you have ${userInbox} massages`);
}
   }*/

//map = object that holds key-value pairs of any data type

/*
const store = new Map([
  ["t-shirt",20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]  
]);
//let shopingCart = 0;
//shopingCart += store.get("t-shirt");
//store.set("hat",40);  //add value
//store.delete("socks") //delete value
//store.has("jeans")    //true or false

store.forEach((value,key) => console.log(`${key} $${value}`))

/*



/*******OBJECT********** =A group of properties and methods 
         properties=what an object has
         methods=what an object can do
         use.to   access properties/methods*/
//this = reference to a particular object 
//       the object depends on the immediate context
/*

const car1 = {
   model:"Mustang",
   color:"red",
   year:2023,

   drive: function() {
      console.log(`you drive the car ${this.model}`);
   },
   brake: function() {
      console.log(`you step on the brakes`);
   }
}

const car2 = {
   model:"Corvette",
   color:"blue",
   year:2024,

   drive: function() {
      console.log(`you drive the car ${this.model}`);
   },
   brake: function() {
      console.log("you step on the brakes");
   }
}

console.log(car1.drive());
console.log(car2.drive());

console.log(this);*/

//class = a blueprint for creating objects
//        define what properties and methods they have
//        use a constructor for unique properties

/*class Player {
   score = 0;
   pause(){
      console.log("you passed game")
   }
   exit() {
      console.log("you exit game")
   }
}
const player1 = new Player();
player1.score += 2;
console.log(player1.score)

*/

//CONSTRUCTOR = a special method of a class,
//             accepts arguments and assigns properties
 /* class Student {

   constructor(name,age,gpa){
      this.name = name;
      this.age = age;
      this.gpa = gpa;
      
   }
   study(){
      console.log(`${this.name} is studying`);
   }
  }

  const student1 = new Student("spongebob",30 ,3.2);
  console.log(student1.name);
  console.log(student1.age);
  console.log(student1.gpa);
  student1.study();*/

//STATİC = belongs to the class, not the objects
//        properties: useful for caches,fixed-configuration
//        methods:    useful for utility functions

/*

class Car {

  static numberOfCars = 0;
   constructor(model){
      this.model = model;
      Car.numberOfCars +=1;

         }
  static startRace(){
   console.log("3... 2...1... GOO!")
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Passat");
 console.log(car1.model)
 console.log(Car.numberOfCars);
 Car.startRace();*/

 //Inheritance = A child class can inherit all the
 //              mthods and properties from another class
/*

 class Animal{ 
   alive = true;
   eat(){
      console.log(`This ${this.name} is eating`);
   }
   sleep(){
      console.log(`This ${this.name} is sleeping`);
   }
 }

 class Rabbit extends Animal{
   name = "rabbit";
   run(){
      console.log(`This ${this.name} is running`);
   }
 }
 class Fish extends Animal{
   name = "fish";
   swim(){
      console.log(`This ${this.name} is swimming`);
   }
 }
 class Hawk extends Animal{
   name = "hawk";
   flw(){
      console.log(`This ${this.name} is flying`);
   }
 }

 const rabbit = new Rabbit();
 const fish = new Fish();
 const hawk = new Hawk();

 console.log(rabbit.alive);
 console.log(fish.eat())
*/ 

//super = refers to the perent class.
//       commonly used to ınvoke constructor of a parent class

/*class Animal {

   constructor(name,age){
     this.name = name;
     this.age = age;
   }
}
class Rabbit extends  Animal{

   constructor(name,age,runSpeed){
      super(name,age);
      this.runSpeed = runSpeed;
   }
}
class Fish extends  Animal{
   constructor(name,age,swimSpeed){
      super(name,age);
      this.runSpeed = swimSpeed;
   }
}
class Hawk extends  Animal{
   constructor(name,age,flySpeed){
      super(name,age);
      this.runSpeed = flySpeed;
   }
}

const rabbit = new Rabbit("rabbit",1 ,40);
const fish = new Fish("fish",3 ,20);
const hawk= new Hawk("hawk",2 ,150);
console.log(rabbit.name);*/

// get = binds an object property to a function
//       when that property is accessed
//set = binds an object property to a function
//       when that property is assigned a value
/*
class Car{
   constructor(power) {
      this._gas = 25;
      this._power = power;
   }
   get power() {
    return  `${this._power}hp`;
   }
   get gas() {
      return  `${this._gas}L`;
     }
     set gas(value){
      if(value > 50){
          this._gas = value;
      }else{
         this._gas = 50;
      }
    
     }
}

let car = new Car(400);
car.gas = 80;
console.log(car.power);
console.log(car.gas);

*/



/*
class Car {
   constructor(model,year,color){
      this.model = model;
      this.year = year;
      this.color = color;
   }
   drive(){
      console.log(`you drive this ${this.model}`);
   }
}

const car1 = new Car("mustang",2023,"red");
const car2 = new Car("corvette",2021,"yellow");
const car3 = new Car("bmw",2022,"black");

const cars = [car1,car2,car3];
//console.log(cars[0].model);

console.log(startRace(cars));
function startRace(cars) {
for(const car of cars){
   car.drive()
}
}*/

//anonymous objects = Objects without a name
//                    not direcly referenced
//                    less syntax.no need for unique names
/*
class Card{
   constructor(value,suit){
      this.value = value;
      this.suit = suit;
   }
}
let cards = [
new Card("A","hearts"),
new Card("A","spaces"),
new Card("A","diamonds"),
new Card("A","clubs"),
new Card("2","hearts"),
new Card("2","spaces"),
new Card("2","diamonds"),
new Card("2","clubs")   
];
console.log(cards[0].value+cards[2].suit);
 cards.forEach(card =>console.log(`${card.value} ${card.suit}`))

*/
 /*
 error = object with a description of
        something went wrong
     
        can't open file
        lose connection
        user types incorrect input
        typeError
       

try{
   let x = window.prompt('enter an number');
   x = Number(x);
  
   if(isNaN(x)) throw "That was't a number";
   if(x == "") throw "that was empty";

   console.log(`${x} is a number`);
}

catch(error){

}
 */
//setTimeOut() = invoke a function after a number of miliseconds
//               asynchronous function (doesn't pause execution)
/*
let timer1 = setTimeout(firstMessage,3000);
let timer2 = setTimeout(secondMessage,6000);
let timer3 = setTimeout(thirdMessage,9000)

 function firstMessage(){
   alert(`this course is 500$`);
 }
 function secondMessage(){
   alert(`This is not a scam`);
 }
 function thirdMessage(){
   alert(`DO ITT`);
 }

 document.getElementById("myButton").onclick = function(){
   clearTimeout(timer1);
   clearTimeout(timer2);
   clearTimeout(timer3);
   alert("DO ITT! ")
 }
*/
//setInterval() = invokes a function repeatedly after a number of millisecons
//                asynchronous function (doesn't pause execution)

/*
let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp,1000);

function countUp() {
   count+=1;
   console.log(count);
   if(count >= max) {
      clearInterval(myTimer)
   }
}*/

// The Date object is used to work with dates & times
//let date = new Date();
//date = date.toLocaleDateString();
//getFullYear() => it is only for year
//getFullMonth() = > it is only for month
//setFullYear() => enter new year
//setFullMonth() => enter new month
//date.setFullYear(2024);
//date = date. toLocaleString();

/*
let date = new Date();

document.getElementById("myLabel").innerHTML =formatTime(date);

function formatDate(date) {
   let year = date.getFullYear()+1;
   let month = date.getMonth() +1;
   let day  = date.getDay();

   return `${month}/${day}/${year}`
}
function formatTime(date){
   let hours = date.getHours();
   let minute = date.getMinutes();
   let seconds = date.getSeconds();
   
   let amOrPm = hours >= 12 ? "pm" : "am";

   return `${hours}:${minute}:${seconds} ${amOrPm}`; 
}*/
/*
const label = document.getElementById("myLabel");
update()
setInterval(update,2000);

function update() {
   let date = new Date();
 
   label.innerHTML = formatTime(date);
      function formatTime(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let amOrPm = hours >= 12 ? "pm" : "am";

      return `${hours}:${minutes}:${seconds} ${amOrPm}`
   }
   function formatZeros() {
      time = time.toSring
   }
}*/

// synchronous code = In an ordered sequence.
//                   step-by-step linear instructions
//                   (start now,finish now)

// asynchronous code = one of sequence.
//                    ex. excess a database 
//                   fetch a file 
//                   tasks that take time
//                  (start now,finish sometime later)
/*
console.log("START");
setTimeout(() => console.log("this is asynchoronous"),6000);
console.log("and");
console.log("START");
console.log("this is synchoronous")
console.log("and");
*/

//console.time() = starts a timer you can use to
//                 track how long an operation takes 
//                 gıve each timer a unique name.
/*
//START 
console.time("Response time");

setTimeout(()=> console.log("HELLO!"),3000);

//end
console.timeEnd("Response time")*/

// promise =object that encapsulates the result of an asynchronous operation
//         let asynchronous methods return values like synchronous methods
//         "ı promise to return something in the future"

// the STATE is 'pending' then:'fulfilled' and 'rejected'
// the RESULT is what can be returned
// 2 parts producing & consuming
/*
let promise = new Promise((resolve,reject) => {

    let fileLoaded = true;

    if(fileLoaded) {
        resolve("file loaded");
    }
    else{
      reject("file not loaded")  
     }

});*/

/*
const promise = new Promise(resolve =>{

  setTimeout(resolve,5000);

});

promise.then(() => console.log("Thanks for waiting!"));
*/

//async = makes a function return a Promise
/*
 async function loadFile() {
 
   let fileLoaded = false;

   if(fileLoaded) {
     return "file loaded ";
   }
   else {
     throw "FİLE NOT LOADED!";
      }
 }
 async function startProcess() {
try {
    let message = await loadFile();
 console.log(message);
}
catch(error){
 console.log(error)
}
  

 }

 startProcess() */

 //ESC6 MODULES
 // the idea behinda module is that is file of reusable code
 // we can import sections of pre-written code to use whenever
 // great for any general utility values and functions 
 // helps to make your code more reusable and maintable
 // think of modules as seperate chapters of a book 

  /*
 import {getCimcunference,getArea, PI} from "../keys/math_utility.js";

 console.log(PI);

 let circumference = getCimcunference(4);
 console.log(circumference);*/





















































