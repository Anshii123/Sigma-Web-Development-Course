console.log("Script file gets initialized.")
let boxes = document.getElementsByClassName("box")

function getRandomColor(){
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = 124;
    let val3 = 111;
    return `rgb(${val1},${val2},${val3})`
}

console.log(boxes)
Array.from(boxes).forEach(e => {
    console.log(e)
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
});