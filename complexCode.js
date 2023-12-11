/* 
 * Filename: complexCode.js
 * Content: A complex JavaScript code
 * Description: This code performs multiple complex operations including data manipulation, recursion, and asynchronous tasks.
 */

// Declare a constant for pi
const PI = Math.PI;

/**
 * Calculates the area of a circle
 * @param {number} radius - The radius of the circle
 * @returns {number} The area of the circle
 */
function calculateCircleArea(radius) {
  return PI * radius * radius;
}

/**
 * Calculates the factorial of a positive integer
 * @param {number} num - The number to calculate the factorial
 * @returns {number} The factorial of the number
 */
function calculateFactorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}

/**
 * Asynchronously fetches user data
 * @param {number} userId - The ID of the user to fetch data for
 * @returns {Promise<Object>} A promise that resolves to the user data
 */
async function fetchUserData(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const userData = await response.json();
  return userData;
}

// Example usage of the functions

// Calculate the area of a circle with a radius of 5
const circleArea = calculateCircleArea(5);
console.log(`Area of the circle: ${circleArea}`);

// Calculate the factorial of 6
const factorial = calculateFactorial(6);
console.log(`Factorial of the number: ${factorial}`);

// Fetch user data for user with ID 123
fetchUserData(123)
  .then((userData) => {
    console.log(`User data:`, userData);
  })
  .catch((error) => {
    console.error(`Error fetching user data:`, error);
  });

// ... Additional complex operations and functions go here (over 200 lines) ...

// End of the complex JavaScript code