console.log("Hey we will learn variables today.")
var a = 5;
var b = 6;
var c = "Anshii";
console.log(a+b+8)
console.log(typeof a , typeof b , typeof c)

// var is globally used while let and const are locally used . You cannot change the value of const once assigned.

// const a = 7;
// a = a+1   This is not allowed as the value of const cannot be changed once assigned.


let a1 = 5;
let b1 = 6;
let c1 = "Anshii";
console.log(a1+b1+8)

{
    let a = 50
    console.log(a)
}
console.log(a)
// If we use var in place of let in the above condition then it will print the both as 5 because var is globally scoped.


// Let's learn about the datatypes in javascript.
let x = "Anshika Garg"
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// Type of null is object because it is been developed in ancient times and various codes are based on it hence we are unable to change it in today's times.


//  Let's learn objects in javascript.
let o = {
    "name":"Anshii",
    "job role": "Software Engineer"
}
console.log(o)
o.salary = 1200000
console.log(o)
o.salary = 7200000
console.log(o)
