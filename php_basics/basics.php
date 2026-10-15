<?php

// ==============================
// PHP FUNDAMENTALS
// ==============================

// Variables
$name = "Sheeba";
$age = 20;
$course = "BCom";

echo "<h1>PHP Fundamentals</h1>";

echo "<h2>Variables</h2>";

echo "Name: " . htmlspecialchars($name) . "<br>";
echo "Age: " . $age . "<br>";
echo "Course: " . htmlspecialchars($course) . "<br>";


// ==============================
// Conditional Statement
// ==============================

echo "<h2>Condition</h2>";

if ($age >= 18) {
    echo "You are an adult.<br>";
} else {
    echo "You are a minor.<br>";
}


// ==============================
// Array
// ==============================

$subjects = ["PHP", "JavaScript", "HTML", "CSS"];

echo "<h2>Subjects</h2>";

foreach ($subjects as $subject) {
    echo htmlspecialchars($subject) . "<br>";
}


// ==============================
// For Loop
// ==============================

echo "<h2>For Loop</h2>";

for ($i = 1; $i <= 5; $i++) {
    echo "Number: " . $i . "<br>";
}


// ==============================
// Function
// ==============================

function greetUser($name)
{
    return "Hello, " . htmlspecialchars($name) . "!";
}

echo "<h2>Function</h2>";
echo greetUser($name);

?>