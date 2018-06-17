// Conceptual Questions

// How do we assign a value to a variable?
// let x = value , const x = value, var x = value
// How do we change the value of a variable?
// variableNam = newValue
// How do we assign an existing variable to a new variable?
// const,let, var newVariableName = oldVaribaleName

// Strings 
// Create a variable called firstVariable.

// assign it the value of a string => "Hello World"
// change the value of this variable to a number.
// store the value of firstVariable into a new variable called secondVariable
// change the value of secondVariable to a string.
// What is the value of firstVariable?
let firstVariable = "Hello World";
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = "this is  string";

// The firstVariable still stores 1

// Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.



const yourName = "Richard";
const greeting = `Hello, my name is ${yourName}`;
console.log(greeting);

// Booleans 

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log();
a !== b;
c !== d;
'Name' === 'Name';
a !== b !== c;
a === a !== d;
e === 'Kevin';
48 == '48';

// The Farm

// Write code that will print out "mooooo" if the variable animal is equal to cow.

// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
const animal = "cow";
if (animal === 'cow') {
  console.log('mooooo')
} else {
  console.log("Hey!, You're not a cow.")
}

// Driver's Ed
// Write a variable that will hold a person's age.

// Write code that will print out "Here are the keys", if the age is 16 years or older.

// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."

const personsAge = 1;
if (personsAge >= 16) {
  console.log(`Here are the keys`);
} else if (personsAge < 16) {
  console.log(`Sorry, you're too young`)
}

// Just Loop It
// Write code that will print out all the numbers in the range 0 - 10.

// Write code that will print out all the numbers in the range 10 - 4000.

// Write code that will print out every other number in the range 10 - 4000.

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i <= 4000; i++) {
  console.log(i);
}

for (let i = 10; i <= 4000; i += 2) {
  console.log(i);
}

// Let's get even
// Print out the even numbers that are within the range of 1 - 100.

// Adjust your code to add a message next to the even number that says: "is an even number".

for (let i = 1; i <= 100; i++) {
  if (Number.isInteger(i / 2)) {
    console.log(`${i} is an even number`)
  }
}

// Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.

for (let i = 0; i <= 100; i++) {
  if (Number.isInteger(i / 5) && i !== 0) {
    console.log(`I found a number ${i}. High five!`)
  }
  if (Number.isInteger(i / 3)) {
    console.log(`I found a ${i}. Three is a crowd.`)
  }
}

// Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

let bank_account = 0;
for (let i = 0; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account = bank_account + (i * 2);
}
console.log(bank_account);

//Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
let sumThreeAndFiveMultiples = 0;
for (let i = 1; i < 1000; i++) {
  if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
    console.log(i);
    sumThreeAndFiveMultiples += i;
  }
}

console.log(sumThreeAndFiveMultiples);

// Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.

const quotes = ["All that glitters is not gold", "To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.", "Hell is empty and all the devils are here."];

// Random
// Given the following array const randomThings = [1, 10, "Hello", true]

// how do you access the 1st element in the array?

// Change the value of "Hello" to "World".

// Check the value of the array to make sure it updated the array.

const randomThings = [1, 10, "Hello", true];
randomThings[0];
randomThings[2] = "World";
console.log(randomThings);

// We've Got Class
// Given the following array const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// What would you write to access the 3rd element of the array?

// Change the value of "Github" to "Octocat"

// Add a new element, "Cloud City" to the array.

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
ourClass[2];
ourClass[2] = 'Octocat';
ourClass.push('cloud city');
console.log(ourClass);

// Mix It Up
// Given the following array const myArray = [5 ,10 ,500, 20]

// using the push method, add the string "Egon" to the end of the array.

// using a method, remove the string from the end of the array.

// using the unshift method, add the string "Bob Marley" to the beginning of the array

// using a different method, remove the string from the beginning of the array

// use the reverse method on this array

const myArray = [5, 10, 500, 20]
myArray.push("Egon");
myArray.pop();
myArray.unshift(`Bob Marley`);
myArray.shift();
myArray.reverse();
console.log(myArray);

//Biggie Smalls
// Write an if..else statement:

// console.log little number if the number is entered is less than 100

// If the number entered is 100 or more, alert big number.
let num = 100;
if (num < 100) {
  console.log('little number')
} else if (num >= 100) {
  console.log('alert big number')
}

// Monkey in the Middle
// Write an if...else if...else statement:

// console.log little number if the number entered is less than 5.

// If the number entered is more than 10, log big number.

// Otherwise, console.log "monkey". 

 num = 111;
if (num < 5) {
  console.log('little number')
} else if (num > 10) {
  console.log('big number') 
} else {
  console.log('monkey');
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2]+ " today!")
// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

const kristynShoe = kristynsCloset.shift();


// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(5,0, 'raybans');


// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[4] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset[0][0];

// In the same way, access one item from Thom's pants array.
thomsCloset[1][0];

// Access one item from Thom's accessories array.
thomsCloset[2][0]
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] =`Footie Pajamas`;

// printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

const printGreeting = (name)=>{
  console.log(`Hello, my name is ${name}`);
}

printGreeting('Richard');

// reverseWordOrder
// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

const reverseWordOrder = (str)=>{
 return str.split("").reverse().join('');
}

console.log(reverseWordOrder("This"));

// calculate
// Write a function called calculate.

// This function should take three arguments, two numbers and a string.

// Name the parameters num1, num2, and operation.

// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

const calculator = (num1,num2,operation) => {

  switch(operation) {
    case 'add': return num1 + num2;
    break; 
    case 'sub': return num1 - num2;
    break; 
    case 'mult': return num1 * num2;
    break; 
    case 'div': return num1/num2;
    break; 
    case 'exp': return num1 ** num2;
    break; 
    default: 
    return 'You passed me something that  doesnt comput'


  }

}


console.log(calculator(2,4,'exp'))

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

