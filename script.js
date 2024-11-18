// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {} // Custom error class for multiplication failures

function primitiveMultiply(a, b) { // Function that attempts to multiply two numbers
  if (Math.random() < 0.2) { // 20% chance to successfully multiply the numbers
    return a * b; // Returns the product if successful
  } else {
    throw new MultiplicatorUnitFailure("Klunk"); // 80% chance to throw a custom error
  }
}
function reliableMultiply(a, b) { // Function that keeps trying until multiplication succeeds
//Your code here.
while (true) { // Continues to loop until multiplication succeeds
  try { // Starts a try block to attempt the multiplication
    return primitiveMultiply(a, b); // Tries to multiply the numbers
  } catch (error) { // Catches any errors thrown during multiplication attempt
    handleException(error); // Calls handleException to manage the error
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
