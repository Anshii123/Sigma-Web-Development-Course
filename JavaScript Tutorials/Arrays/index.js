let arr = [2,1,3,4,5,6,7]
console.log(arr);
console.log(arr.length);
console.log(arr[0])
console.log(arr[2])
console.log(arr[5])
arr[0] = 100
console.log(arr)
console.log(typeof(arr))
// The below method will convert this array into string .
console.log(arr.toString())

// in order to convert the string joined with something we can use join method.
console.log(arr.join(" and "))

a = [10,20,30,40,50]
a.pop()
// Pop method deletes the last element from the array.
console.log(a)
a.push(100)
// Push method appends the item in the array.
console.log(a)
a.push("Harry")
console.log(a)

a.shift()
console.log(a)
// Shift method deletes the first element from the array.

a.unshift("Anshi")
console.log(a)
// Unshift method adds the element at the beginning of the array.

c = delete(a[3])
console.log(a)
console.log(a.length)
// This means in javascript the deleted item have allocated the memory but there is no value there.

let a1 = [1,2,3]
let a2 = [3,4,5]
console.log(a1.concat(a2))

let a3 = [87,54,32,67]
console.log(a3.sort())

// Splice method is used to remove some number of elements from a given specific index.
let numbers = [1,2,3,4,5,6,7]
console.log(numbers.splice(1,3))
console.log(numbers)

// Splice method can also add some numbers at that given index as you can see below:
let num = [10,20,30,40,50,60]
console.log(num.splice(1,3,400,500))
console.log(num)

// Slice method slices out a piece of array from an array.It creates a new array.
let num1 = [100,200,300,400,500,600]
console.log(num1.slice(2))
console.log(num1.slice(2,4))

// Classical for loop
let d = [1,93,5,6,88]
for (let index = 0; index < d.length; index++) {
    const element = d[index];
    console.log(element)
    
}

// Foreach loop example
d.forEach((value,index,arr) => {
    console.log(value,index,arr)
});
// Forof loop
let object = {
    a:1,
    b:2,
    c:3
}

for (const key in object){
    if(Object.hasOwnProperty.call(object,key)){
        const element = object[key];
        console.log(element)
        console.log(key,element)
    }
}


for (const iterator of d) {
    console.log(iterator)
}

// Map function is used to create a new array by performing some operation on each array element.
let arr1 = [1,12,50,16,80]
let newarr = []
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    newarr.push(element**2)
    
}
console.log(newarr)
// Above loop using map function:
let newarr1 = arr1.map((e)=>{
    return e**2
})
console.log(newarr1)

// Use of filter function
const greaterthan200 = (e)=>{
    if(e>200){
        return true
    }
    return false
}
console.log(newarr1.filter(greaterthan200))

// Reduce method reduces an array to a single value.
let arr2 = [1,2,3,4,5,6]
const red = (a,b) =>{
    return a*b
}
console.log(arr2.reduce(red))

// Array from method is used to create an array from other object.
console.log(Array.from('Anshii'))


