<?php

session_start();


// Check that the form was submitted using POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "Invalid request.";
    exit;
}


// Get form data
$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$age = trim($_POST["age"] ?? "");


// Validate the data
$errors = [];

if ($name === "") {
    $errors[] = "Name is required.";
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Please enter a valid email address.";
}

if (!filter_var($age, FILTER_VALIDATE_INT)) {
    $errors[] = "Please enter a valid age.";
}


// Display errors
if (!empty($errors)) {

    echo "<h1>Form Errors</h1>";

    foreach ($errors as $error) {
        echo "<p>" . htmlspecialchars($error) . "</p>";
    }

    echo '<a href="form.html">Go Back</a>';

    exit;
}


// Store the user's name in a session
$_SESSION["user_name"] = $name;


// Safely display the submitted information
$safeName = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
$safeEmail = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$safeAge = htmlspecialchars($age, ENT_QUOTES, "UTF-8");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Form Result</title>
</head>

<body>

    <h1>Form Submitted Successfully</h1>

    <p>
        <strong>Name:</strong>
        <?php echo $safeName; ?>
    </p>

    <p>
        <strong>Email:</strong>
        <?php echo $safeEmail; ?>
    </p>

    <p>
        <strong>Age:</strong>
        <?php echo $safeAge; ?>
    </p>

    <p>
        <strong>Session User:</strong>
        <?php echo htmlspecialchars($_SESSION["user_name"], ENT_QUOTES, "UTF-8"); ?>
    </p>

    <br>

    <a href="form.html">Submit Another Form</a>

</body>

</html>