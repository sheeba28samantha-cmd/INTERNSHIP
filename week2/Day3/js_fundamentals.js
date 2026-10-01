// Week 2 - Day 3: JavaScript Fundamentals

// Function 1: Arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Function 2: Default parameter
const calculateTotal = (price, quantity = 1) => {
    return price * quantity;
};

// Function 3: Arrow function with two parameters
const addNumbers = (a, b) => {
    return a + b;
};

// Test the functions
console.log(greet("Sheeba"));
console.log(calculateTotal(100, 2));
console.log(addNumbers(10, 20));
// Function 4: Rest operator
const sumNumbers = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};

// Function 5: Spread operator
const combineArrays = (array1, array2) => {
    return [...array1, ...array2];
};

// Function 6: Array map
const doubleNumbers = (numbers) => {
    return numbers.map(number => number * 2);
};

// Test functions 4-6
console.log(sumNumbers(10, 20, 30, 40));
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(doubleNumbers([1, 2, 3, 4]));
// Function 7: Filter array
const getEvenNumbers = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
};

// Function 8: Find an item
const findStudent = (students, name) => {
    return students.find(student => student.name === name);
};

// Function 9: Object with default parameter
const createUser = (name, role = "Student") => {
    return {
        name: name,
        role: role
    };
};

// Function 10: Destructuring
const getUserDetails = (user) => {
    const { name, age } = user;
    return `${name} is ${age} years old.`;
};

// Test functions 7-10
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

const students = [
    { name: "Sheeba", age: 20 },
    { name: "Anu", age: 21 }
];

console.log(findStudent(students, "Sheeba"));
console.log(createUser("Sheeba"));
console.log(getUserDetails({ name: "Sheeba", age: 20 }));
// Promise example
const checkNumber = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve("The number is positive.");
        } else {
            reject("The number must be greater than zero.");
        }
    });
};

// Using .then() and .catch()
checkNumber(10)
    .then(result => console.log(result))
    .catch(error => console.error(error));


// Async/Await with fetch()
const fetchPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }

        const posts = await response.json();

        console.log("API Data:");
        console.log(posts.slice(0, 5));
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the async function
fetchPosts();