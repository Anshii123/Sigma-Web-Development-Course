console.log(document.querySelector(".box"))
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".box").outerHTML)
console.log(document.querySelector(".container").outerHTML)
// Outer Html means the element as well as the html inside it.
// Inner html only refers to the inner Html inside the element.
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)
// Tagname is applicabke only for elements while Nodename is applicablefor all types of nodes.
console.log(document.querySelector(".container").textContent)
console.log(document.querySelector(".container").hidden)
// console.log(document.querySelector(".container").hidden="true")

console.log(document.querySelector(".box").innerHTML='Hello guyys I am Anshika')
// It will select the first element having box class and change its inner html.

console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").setAttribute("style","display:inline"))
console.log(document.querySelector(".box").attributes)
console.log(document.querySelector(".box").remove("style"))

// I can use document.design mode = on then we can change any page of the website.

console.log(document.querySelector(".box").dataset)

// Creating an element using javacsript.
let div = document.createElement("div");
div.innerHTML = "I have been inserted <b></b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div)
document.querySelector(".container").before(div)

console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)

// We can use add as well as remove methods in order to add or remove the classes in the element.
// Toggle method will add the class to the element if it is not there and vice-versa.
console.log(document.querySelector(".container").classList.toggle("green"))
console.log(document.querySelector(".container").classList.toggle("green"))





