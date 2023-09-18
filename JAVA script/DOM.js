/*
//...01...selector
    let ID1 = document.getElementById("ID1") //getElementById()
    ID1.innerHTML = "masum"

    let className = document.getElementsByClassName("className")[0] //getElementsByClassName()
    className.innerHTML = "I Love you"

let heading = document.getElementsByName("heading")[0]
heading.innerHTML = "subscribe plz"

let H1 = document.getElementsByTagName("h1")[2]
H1.innerHTML = "heading one is changed"

document.querySelector("#ID1")

document.querySelectorAll("h1")
    
//...02...Onclick Event
    function clickMe() {
        document.write('How are you')
    }
    
    function Timeplz() {
        document.getElementById("ID1").innerHTML = Date()
    }

//...03...Traversing element 1
    console.log(pNote.parentNode)
    let pNote = document.querySelector("pNote")

//...04...Traversing element 2
let parDiv = document.querySelector(".parDiv");
//console.log(perDiv.lastElementChild)
//console.log(parDiv.childNodes)
console.log(parDiv.children)

//...05...sibling element
let current = document.querySelector(".Current")
//console.log(current.nextElementSibling)
console.log(current.previousElementSibling)

//...06...Manipulation 1   
let div = document.createElement("div")
div.className = "Mzsum class"
div.id = "MasumID"
div.innerHTML = "<p>This is p tag </p>";
//let text = document.createTextNode("Inner text into the div")
//div.appendChild(text)
let h1 = document.createElement("h1");
div.appendChild(h1)
document.body.appendChild(div)

//...07...Manipulation 2
let ul = document.createElement("ul")
ul.id = "menu";

let li1 = document.createElement("li")
li1.textContent = "Home";
ul.appendChild(li1)

let li2 = document.createElement("li")
li2.textContent = "about";
ul.appendChild(li2)

let li3 = document.createElement("li")
li3.textContent = "contact";
ul.appendChild(li3)

document.body.appendChild(ul)

document.createElement("script")
script.src="DOM.js"
document.body.appendChild(script)

*/
//...07...Manipulation 3
let menu = document.querySelector("#menu")

function createMenu(name) {
    let li = document.createElement("li")
    li.textContent = name
    return li;
}
menu.appendChild(createMenu("Masum"))
menu.appendChild(createMenu("Masum1"))
menu.appendChild(createMenu("Masum2"))