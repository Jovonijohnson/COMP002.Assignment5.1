// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {} // Defines a custom error class for multiplication failures
function primitiveMultiply(a, b) { // Attempts to multiply two numbers
  if (Math.random() < 0.2) { // Has a 20% chance to successfully perform multiplication
    return a * b; // Returns the product if successful
  } else {
    throw new MultiplicatorUnitFailure("Klunk"); // Throws a custom error in 80% of the cases
  }
}
function reliableMultiply(a, b) { // Function that keeps trying until multiplication succeeds
  while (true) { // Continues to loop until the multiplication succeeds
      try { // Starts a try block to attempt the multiplication
          return primitiveMultiply(a, b); // Tries to multiply the numbers
      } catch (error) { // Catches any errors thrown during the multiplication attempt
          if (!(error instanceof MultiplicatorUnitFailure)) { // Checks if the error is not an instance of MultiplicatorUnitFailure
              throw error; // Re-throws any unexpected errors
          } // If the error is an instance of MultiplicatorUnitFailure, the loop continues and retries
      }
  }
}
function handleException(error) { // Handles custom exceptions
  if (error instanceof MultiplicatorUnitFailure) { // Checks if the error is an instance of MultiplicatorUnitFailure
    console.warn('Multiplication failed, retrying...'); // Logs a warning message indicating a retry
  } else { // If the error is not an instance of MultiplicatorUnitFailure
    throw error; // Re-throws any other errors
  }
}
// Example usage
console.log(reliableMultiply(8, 8)); // Logs the result of reliableMultiply(8, 8), which should be 64 after retries