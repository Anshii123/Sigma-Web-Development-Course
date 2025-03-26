console.log("Anshii")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[1].style.backgroundColor = "bisque"
document.getElementById("pink").style.backgroundColor = "pink"

document.querySelector(".box").style.backgroundColor = "green"
// It will only make the first found element as green not all but in order to make all the elements green we will use the another method.
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e => {
    console.log(e)
    e.style.color = "yellow"
});

e = document.getElementsByTagName("div")
console.log(e[4].matches("#redbox"))
console.log(e[3].matches("#pink"))
console.log(e[3].closest("#pink"))
console.log(e[3].closest(".container"))
console.log(document.querySelector(".container").contains(e[3]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))