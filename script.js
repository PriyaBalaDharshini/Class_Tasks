/* var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Select";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    var ele=parseInt(prompt("Enter your age"));
    console.log(ele);
    
} */
/* 1 Color a span/div element content when a user moves the mouse over the element. */

var element = document.createElement("div");
element.innerHTML = "this is div";
element.addEventListener("mousemove", foo)
document.body.append(element);

function foo() {
    document.querySelector("div").style.color = "red"

}
/* 2 Use prompt to read a value from user and display it in the span element. */

var button = document.createElement("button");
button.setAttribute("type", "button");
button.innerHTML = "Click me";
button.addEventListener("click", foo);
document.body.append(button);

function foo() {
    var ele = prompt("Enter your age");
    var span = document.createElement("span");
    span.innerHTML=ele;
    span.style.color="pink";
    document.body.append(span);
}
/* 3 Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.

 */
var div=document.createElement("div");
div.innerHTML="this is div";
div.addEventListener("mouseover",foo);
document.body.append(div);

function foo(event){
    var span=document.createElement("span");
    span.innerHTML=`Client x:${event.clientX} and Client y:${event.clientY}`
    document.body.append(span);
}

 / * 4 Write a Javascript code for character counts in the textarea. */ 
 let res=document.querySelector("textarea").addEventListener("keyup",(event)=>console.log(event.target.textLength));
console.log(res); 


/* HTML */
/*  <textarea name="" id="" cols="30" rows="10"></textarea>
    <script src="script.js"></script> */
