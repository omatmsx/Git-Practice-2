function calculateExponential(x, n) {
    var result = 1.0; // Initialize the result as 1
    var term = 1.0; // Initialize the first term as 1

    for (var i = 1; i <= n; i++) {
        term *= x / i; // Calculate the next term using the previous term
        result += term; // Add the next term to the result
    }

    return result;
}

var x = parseFloat(prompt("Enter the value of x:"));
var n = parseInt(prompt("Enter the number of terms (n):"));

if (isNaN(x) || isNaN(n) || n <= 0) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    var result = calculateExponential(x, n);
    console.log("The value of e^" + x + " using " + n + " terms is:");
    console.log(result);
}
