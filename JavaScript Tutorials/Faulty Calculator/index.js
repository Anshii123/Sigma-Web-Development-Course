/* Create a faulty calculator using Javascript .
This faulty calculator does the following:
1. It takes two numbers as imput from the user.
2. It performs wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

It should perform wrong operations only 10 percent of the times.
*/
let random = Math.random()
console.log(random)

let a = Number(prompt("Enter first number."));
let b = Number(prompt("Enter second number."));

// let c = prompt("Enter the operation")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
// if(random > 0.1){
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }

// else{
//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }

// We can use the below method also.
if(random>0.1){
    console.log('The result of ${a} + ${b} is', a+b)
    console.log('The result of ${a} - ${b} is', a-b)
    console.log('The result of ${a} * ${b} is', a*b)
    console.log('The result of ${a} / ${b} is', a/b)
}
else{
    console.log('The result of ${a} + ${b} is', a*b)
    console.log('The result of ${a} - ${b} is', a/b)
    console.log('The result of ${a} * ${b} is', a+b)
    console.log('The result of ${a} / ${b} is', a**b)
}

