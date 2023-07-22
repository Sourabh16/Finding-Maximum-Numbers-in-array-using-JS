function findMax(numbers) {
    // Check if the input is an array and if it's not empty
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return "Invalid input. Please provide a non-empty array of numbers.";
    }
  
    // Assume the first number in the array is the maximum
    let max = numbers[0];
  
    // Loop through the array to find the maximum number
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  