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