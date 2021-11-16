//The switch case

let day = new Date().getDay();

let literal_day = new Date().toString();

console.log(day)
console.log(literal_day)

// Switch case statement syntax
switch(day){
    case 0:
        console.log('Church in the mornin...')
        break;
    case 1:
        console.log('Write code.. It\'s Monday')
        break;

    case 2:
        console.log('Testing.. It\'s Tuesday')
        break;

    case 3:
        console.log('Write code.. It\'s Wednesday')
        break;

    case 4:
        console.log('Write feature for the project.. It\'sThursday')
        break;

    case 5:
        console.log('Its Friday')
        break;


}

switch(literal_day.split(' ')[0]){
    case "Sun":
        console.log('Church in the mornin...')
        break;
    case "Mon":
        console.log('Write code.. It\'s Monday')
        break;
    case "Tues":
        console.log('Testing.. It\'s Tuesday')
        break;
    case "Wed":
        console.log('Write code.. It\'s Wednesday')
        break;
    case "Thurs":
        console.log('Write feature for the project.. It\'sThursday')
        break;
    case "Fri":
        console.log('Its Friday')
        break;

}

// Create objects in js

let person = {
    name: 'Tom',
    age: 37,
    favColor: 'Blue'
}

console.log(person['name'])//bracket notation
console.log(person.name)//Dot notation

// Complex JS object
let person2 = {
    name:'Trini',
    age: 27,
    prog_lang: ['JS', 'Python', 'C++', 'Java'],
    fav_color: 'Red',
    teams:[
        {
            baseball: 'Cubs',
            football: 'Bears',
            hockey: 'Blackhawks',
            basketball: ['Bulls', 'Sky'],
            soccer: ['Fire', 'Yellowjackets']
        },
        {
            baseball: 'Phillies',
            football: 'Rams',
            hockey: 'Leafs',
            basketball: 'Lakers',
            soccer: ['Chelsea', 'City']
        }
    ]
}

console.log(person2.prog_lang[3])
console.log(person2.teams[1].basketball)
console.log(person2.teams[0].basketball[1])

// JS Object prototype Methods -- literal type
console.log(Object.keys(person2))
console.log(Object.values(person2))

//-- DON"T DO THIS to loop through objects
for(let i=0; i < person2.length; i++){
    console.log(person2[i])
}
// Do this instead
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}
// or
Object.keys(person2).forEach(element =>{
    console.log(element)
})

// List values from person2 that are arrays
for(let i=0; i<Object.keys(person2).length;i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}

// Create our own Object prototypes -- with ES5 Method syntax
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

    //
    this.printInfo = function(color,wheels=4){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}
        and it has ${wheels} wheels and the color is ${color}`)
        return "Returned Value"
    }
}
// create an instance of a prototye
let my_car = new Car('Volks', 'Jetta', '2013')
// call our Method
console.log(my_car.printInfo('Black',5))

// JS classes
class Human{
    constructor(name,age,gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender} `
    }
}

let bobby = new Human('Bobby',31,'Female')

console.log(bobby.printInfo())
// _______________________
class Pokemon{
    constructor(species,element,hp){     
        this.species = species;
        this.element = element;
        this.hp = hp;
    }

    printInfo2() {
        return `Species: ${this.species} \nElement: ${this.element} \nHP = ${this.hp} `
    }

}

let chunks = new Pokemon('Geo-dude','rock',40)

console.log(chunks.printInfo2())

class Baby extends Human{
    constructor(name,age,gender,walking){
        super(name,age,gender)
        this.walking = walking
    }

    isBabyWalking(){
        if(this.walking == true){
            return `${this.name} is walking`
        }
        else {
            return 'Baby is not walking'
        }
    }
}
let johnnie = new Baby('Johnnie',1,'male',true)
console.log(johnnie.printInfo())
// console.log(johnnie.isBabywalking())

// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/
// basic ex
function first(){
    console.log(1)
}

function second() {
    console.log(2)
}
first()
second()

// function first_delay(){
//     console.log(1) {
//         console.log(1)
//     }, 5000
// }

// function second_delay {
//     console.log(2)
// }

// first_delay()
// second_delay()

// Callback Function Syntax
// function doHomework(subject, callback){
//     alert(`Starting my ${subject} homework`)
//     callback()
// }

// doHomework('Javascript',function() {
//     console.log('Done with Homework')
// })

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/
// We solve this above problem with Promises
// ======= Creating a JS Promise =====

const isEvenNumber = num => {
    return new Promise( (resolve,reject) => {
        if(num % 2 == 0){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using a JS Promise
isEvenNumber(11)
//Happy resolver path
.then( (result) => {
    console.log(`Even Number ${result}`)
})
//Sad Reject path
.catch( (error) => {
    console.log(`Odd Number ${error}`)
})

// // Another Example with Promises -- using Async/Await
function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// function to add to base salary slowly
function slow_salary(n1, n2){
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000)
    })
}

async function async_increase_slow_salary(base, increase){
    const new_salary = await slow_salary(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}