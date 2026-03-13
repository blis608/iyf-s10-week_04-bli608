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


// ============================
// Mini Project: Calculator
// ============================

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division (handle division by zero)
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// Main calculator function
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator";
    }
}


// Test cases
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8


// ============================
// Task 8.1: Arrays
// ============================

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbersArray = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();


// ============================
// Exercise 2: Array Methods
// ============================

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

console.log(numbers.includes(3));


// ============================
// Build Tasks
// ============================

const values = [5, 12, -3, 7, -8, 20];

const doubledNumbers = values.map(num => num * 2);
console.log("Doubled:", doubledNumbers);

const positiveNumbers = values.filter(num => num >= 0);
console.log("Positive numbers:", positiveNumbers);

const firstGreaterThan10 = values.find(num => num > 10);
console.log("First > 10:", firstGreaterThan10);

const product = values.reduce((total, num) => total * num, 1);
console.log("Product:", product);


// ============================
// Task 8.2: Objects
// ============================


// Exercise 1: Object Basics

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 31;
person.email = "john@example.com";
delete person.isStudent;


// Exercise 2: Object Methods

const calculatorObject = {
    add: function(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply: (a, b) => a * b
};

console.log(calculatorObject.add(5, 3));
console.log(calculatorObject.subtract(10, 4));
console.log(calculatorObject.multiply(6, 2));


// Exercise 3: Object Iteration

const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(Object.keys(scores));

console.log(Object.values(scores));

console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}


// ============================
// Task 8.3: Array of Objects
// ============================

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];


// 1. Get all student names
const names = students.map(student => student.name);
console.log("Names:", names);


// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);


// 3. Find the student named Charlie
const charlie = students.find(student => student.name === "Charlie");
console.log("Charlie:", charlie);


// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("Average Grade:", avgGrade);


// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);


// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by Grade:", sortedByGrade);


// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Has Top Student:", hasTopStudent);


// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("All Passing:", allPassing);


// ============================
// Mini Project: Student Grade Tracker
// ============================

const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average grade
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const scores = Object.values(student.grades);
        const total = scores.reduce((sum, score) => sum + score, 0);

        return total / scores.length;
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        const scores = this.students
            .map(student => student.grades[subject])
            .filter(score => score !== undefined);

        const total = scores.reduce((sum, score) => sum + score, 0);

        return total / scores.length;
    },

    // Get top performer
    getTopStudent() {
        let topStudent = null;
        let highestAverage = 0;

        for (const student of this.students) {
            const scores = Object.values(student.grades);
            const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;

            if (avg > highestAverage) {
                highestAverage = avg;
                topStudent = student.name;
            }
        }

        return topStudent;
    },

    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => {
            const scores = Object.values(student.grades);
            const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
            return avg < 70;
        });
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        let report = `Report Card for ${student.name}\n`;

        for (const subject in student.grades) {
            const score = student.grades[subject];
            const letter = this.getLetterGrade(score);
            report += `${subject}: ${score} (${letter})\n`;
        }

        const avg = this.getStudentAverage(name);
        report += `Average: ${avg}`;

        return report;
    }
};


// Test implementation

gradeTracker.addStudent("Alice", { math: 95, english: 88 });
gradeTracker.addStudent("Bob", { math: 72, english: 85 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));
