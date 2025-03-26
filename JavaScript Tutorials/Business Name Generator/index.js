/* Create a business name generator by combining list of adjectives and shop name and other word.
Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another Word
Bros
Limited 
Hub

*/
rand = Math.random()
let first , second , third;

// Generating first word.
if(rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}
// Generating second word.

rand = Math.random()
if(rand<0.33){
    second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}

// Generating third word
rand = Math.random()
if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)