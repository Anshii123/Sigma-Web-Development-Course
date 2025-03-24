console.log("Hello I will learn conditional statements today.")

let age = 17;
let grace = 2;

// Arithmetic Operators
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age**grace)
console.log(age%grace)


if ((age+grace)>18){
    console.log("You can drive.")
}
else{
    console.log("You cannot drive.")
}

// Assignment Operators 
let a = 10
a += 10
console.log(a)
a -= 2
console.log(a)
a *= 5
console.log(a)
a /= 5
console.log(a)
a %= 2
console.log(a)

// Relational Operators
b = 10
c = 15
console.log(b==c)
console.log(b<=c)
console.log(b>=c)
console.log(b!=c)
console.log(b<c)
console.log(b>c)

console.log("3"== 3)
// This will return True as it will compare the values only.
console.log("3"=== 3)
// This will return False as it will compare both the values and the datatype of the operand.

// Logical Operators
a1 = 9
a2 = 18
console.log(a1&&a2)
console.log(a1||a2)
console.log(!a1)


// if-else if ladder
// let age1 = prompt("Enter your age:")
if(age>=18){
    console.log("You can drive.")
}
else if(age==0){
    console.log("Are you kidding?")
}
else{
    console.log("You cannot drive.")
}

// Ternary Operators
a = 6
b = 8
c = a>b?(a+b):(b-a)
