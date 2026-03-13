// Variable declarations

let name = "Irene Njoki";
let age = 19;
let isStudent = true;
let favoriteColors = ["black", "grey", "blue"];
let todayDate = new Date(2026, 2, 14);

// Console logs

console.log("My name is:", name);
console.log("My age is:", age);
console.log("Am I a student?", true);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", todayDate);

// typeof practice
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

// ============================
// Exercise 1: Number Operations
// ============================

// Basic math
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment / Decrement
let count = 0;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);


// ============================
// Exercise 2: String Operations
// ============================

let firstName = "Bliss";
let lastName = "Njoki";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log("Full name uppercase:", fullName.toUpperCase());
console.log("Full name lowercase:", fullName.toLowerCase());
console.log("First letter:", firstName.charAt(0));
console.log("Does name include Bliss?", fullName.includes("Bliss"));

console.log(greeting);
console.log(message);


// ==================================
// Exercise 3: Comparison & Logical
// ==================================

// Comparison
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 === 5:", 5 === 5);
console.log("5 == '5':", 5 == "5");
console.log("5 !== 3:", 5 !== 3);

// Logical
console.log("true && true:", true && true);
console.log("true || false:", true || false);
console.log("!true:", !true);


// ============================
// Challenge
// ============================

// Birth date
let birthDate = new Date("2007-12-11");

// Current date
let today = new Date();

// Age calculation
let age = today.getFullYear() - birthDate.getFullYear();

// Age in days (approx)
let ageInDays = age * 365;

// Age in hours
let ageInHours = ageInDays * 24;

// Year you'll turn 100
let yearTurn100 = birthDate.getFullYear() + 100;

console.log("Age in days:", ageInDays);
console.log("Age in hours:", ageInHours);
console.log("Year you will turn 100:", yearTurn100);

// ============================
// Exercise 2: Build Functions
// ============================

// 1. Calculate area of rectangle
function calculateArea(width, height) {
    return width * height;
}

console.log("Area:", calculateArea(5, 10));


// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("Fahrenheit:", celsiusToFahrenheit(25));


// 3. Check if number is even
function isEven(number) {
    return number % 2 === 0;
}

console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));


// 4. Get initials from full name
function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

console.log("Initials:", getInitials("Irene Njoki"));


// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reversed:", reverseString("JavaScript"));

// ============================
// Exercise 3: Default Parameters
// ============================

function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));

// ============================
// Tip Calculator
// ============================

function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Tip amount:", calculateTip(100));
console.log("Tip amount:", calculateTip(200, 20));


// ============================
// Exercise 1: If / Else
// ============================

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Grade:", getGrade(85));// ============================
// Exercise 2: Switch
// ============================

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getDayName(3));// ============================
// Exercise 3: Loops
// ============================

// For loop
for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log("While loop:", count);
    count++;
}

// For...of loop
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log("Color:", color);
}// ============================
// Programs
// ============================

// 1. Print numbers 1-100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// 2. Print even numbers 1-50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}


// 3. FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// 4. Triangle of stars
let stars = "";
for (let i = 1; i <= 5; i++) {
    stars += "*";
    console.log(stars);
}
