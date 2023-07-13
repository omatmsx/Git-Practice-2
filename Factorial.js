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

displayFactorial();

function calculateCatalan(n) {
    var catalan = []; // Array to store the Catalan numbers

    catalan[0] = 1;
    catalan[1] = 1;

    for (var i = 2; i <= n; i++) {
        catalan[i] = 0;
        for (var j = 0; j < i; j++) {
            catalan[i] += catalan[j] * catalan[i - j - 1];
        }
    }

    return catalan[n];
}
