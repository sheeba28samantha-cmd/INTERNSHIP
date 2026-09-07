// JavaScript ES6+ Basics
// Week 1 - Day 3

// 1. ES5 to ES6 Refactoring

// ES5
var studentName = "Sheeba";
var studentAge = 20;

// ES6
const name = "Sheeba";
const age = 20;

console.log(`Student Name: ${name}`);
console.log(`Student Age: ${age}`);


// 2. Arrow Function

const greetStudent = (student) => {
    return `Hello, ${student}! Welcome to JavaScript ES6+.`;
};

console.log(greetStudent(name));


// 3. Array of Objects

const students = [
    {
        name: "Sheeba",
        age: 20,
        course: "BCA",
        marks: 85
    },
    {
        name: "Anu",
        age: 21,
        course: "BCA",
        marks: 72
    },
    {
        name: "Rahul",
        age: 20,
        course: "BCA",
        marks: 90
    },
    {
        name: "Priya",
        age: 21,
        course: "BCA",
        marks: 65
    }
];


// 4. Object Destructuring

const firstStudent = students[0];

const { name: firstName, age: firstAge, course, marks } = firstStudent;

console.log(`First Student: ${firstName}`);
console.log(`Age: ${firstAge}`);
console.log(`Course: ${course}`);
console.log(`Marks: ${marks}`);


// 5. Array Destructuring

const [student1, student2, student3, student4] = students;

console.log("First Student:", student1.name);
console.log("Second Student:", student2.name);


// 6. filter()

const passedStudents = students.filter((student) => {
    return student.marks >= 70;
});

console.log("Students who passed:");
console.log(passedStudents);


// 7. map()

const studentNames = students.map((student) => {
    return student.name;
});

console.log("Student Names:");
console.log(studentNames);


// 8. reduce()

const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

console.log(`Total Marks: ${totalMarks}`);


// 9. Calculate Average

const averageMarks = totalMarks / students.length;

console.log(`Average Marks: ${averageMarks}`);


// 10. Interactive Component

const studentsContainer = document.getElementById("students");
const showButton = document.getElementById("showButton");

showButton.addEventListener("click", () => {

    studentsContainer.innerHTML = "";

    students.forEach((student) => {

        const studentCard = document.createElement("div");

        studentCard.innerHTML = `
            <h3>${student.name}</h3>
            <p>Age: ${student.age}</p>
            <p>Course: ${student.course}</p>
            <p>Marks: ${student.marks}</p>
        `;

        studentsContainer.appendChild(studentCard);
    });

});