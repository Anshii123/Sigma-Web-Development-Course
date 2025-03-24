console.log("This is strings tutorial.")
let a = "Anshika"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[10])            
// It will show undefined instead of showing the error.
console.log(a.length)

let name = "Harry"
let friend = "Rohan"
console.log("His name is " + name + " and his friend's name is " + friend)

// We can use template literals as defined below in order to make our work easy.
console.log(`His name is ${name} and his friend's name is ${friend}.`)

// If we have to print double quote between string then we can simply put it into template literals or we can use escape sequence characters as well.
let c = `Anshii"Garg`
console.log(c)

let d = 'Vatsa\"lay'
console.log(d)

let e = "Shreya"
console.log(e.toLowerCase())
console.log(e.toUpperCase())
console.log(e.length)
console.log(e.slice(1,4))
console.log(e.replace("Sh","70"))
// If there are two occurences to replace then only the first one will get replaced.

console.log(e.concat(d))
console.log(e.concat(d,"Aishwarya" , c))

// We can use trim method in order to remove the white spaces from the string.
let student = "          Anshika Garg  "
console.log(student.trim())

// Strings are immutable they cannot be changed further once created . The above methods are creating the new strings.
console.log(e)