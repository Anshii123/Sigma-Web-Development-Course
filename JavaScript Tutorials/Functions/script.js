console.log("Hey Anshii you are nice!!")

function nice(name) {
    console.log("Hey " + name + " you are nice!!")
    console.log("Hey " + name + " Your T-shirt looks nice!!!!" )
    console.log("Hey " + name + " You are good.")
}
nice("Anshii")
nice("Aelly")

function sum(a , b) {
    // console.log(a+b)
    return a + b 
}
// sum(10,20)
result = sum(10,5)
console.log("The sum is ",result)

// Use of arrow function in javacsript.
const func1 = (x)=>{
    console.log("I am an arrow function", x )
}
func1(34)
func1(28)