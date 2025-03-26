let num = 5 
// for running in terminal.
// num = Number(prompt("Enter the number."))
let factorial = 1
for (let index = 1; index <= num; index++) {
    factorial *= index;
}
console.log(`The factorial of ${num} is ${factorial}`)

// Second method
let a = 6
function factorial1(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c =arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}
factorial1(a)