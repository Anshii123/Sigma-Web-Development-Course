console.log("Hello World!!")
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)


let cont = document.body.childNodes[1]
console.log(cont.firstChild)
console.log(cont.lastChild)

// If you want that these text child get ignored then we will use the first element child method.
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
cont.firstElementChild.style.backgroundColor = "red"
cont.lastElementChild.style.color = "red"
console.log(cont.lastElementChild.parentElement)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
