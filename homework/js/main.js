
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for(let i=0; i<Object.keys(person3).length;i++){
    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
class Person{
    constructor(name,age){
        this.age = age;
        this.name = name;
    }

    printInfo() {
        return `Name: ${this.name} \nAge: ${this.age} `
    }
}

let chunks = new Person('Chunks',1,)

console.log(chunks.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let strLen = new Promise((pass,fail) => {
    let n = 11
    if (n > 10){
        pass("Big Word")
    }else {
        fail("Small Number")
    }

})

// CODEWARS CONVERSION
// def sum_array(a):
//     return sum(a)

function sum_array(a){
    var num = 5;
    var num2 = 5
    return num + num2
}
console.log(sum_array())

// def boolean_to_string(b):
//     if b == True:
//         return 'True'
//     else:
//         return 'False'

function boolean_to_string(b){
    if (b==true){
        return true
    } else {
        return false
    }
}

console.log(boolean_to_string())