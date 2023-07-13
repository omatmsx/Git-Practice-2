function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function displayFactorial() {
    var number = parseInt(prompt("Enter a number:"));

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    var result = factorial(number);
    console.log("The factorial of " + number + " is: " + result);
}