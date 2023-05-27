// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// My solution

function findAverage(array) {
    if (array.length !== 0 ) {
      let result = array.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
      let avg = result / array.length;
      return avg
    } else {
      return 0;
    }
  }