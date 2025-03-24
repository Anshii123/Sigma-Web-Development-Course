console.log("Hey I will be learning loops today.")

let a = 1
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}
let object = {
    name : "Anshika",
    role : "Programmer",
    company : "Microsoft"
}
for (const key in object) {
        const element = object[key];
        console.log(key,element)
        console.log(key)
}

// for of loop is used to iterate over a sequence of items.
for (const c of "Anshika") {
    console.log(c)
}

// While loop
let i =1
while(i<6){
    console.log(i)
    i++;
}

// Do-While loop
let j =0;
do{
    console.log(j)
    j++;
}
while(j<6)
