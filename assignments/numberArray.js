// Declaration of range function with start, end and an accumulator
const range = function(start, end, accumulator) {
    // Declaration of an array
    let array = [];
    // For loop loop that stores i as start arg, sets accumulator value if none is set. i is temp variable used to display values passed range args
    for (let i = start;
        // Conditional (Ternary) operator that assigns value to i based on whether it's <= or >= end if accumulator === undefined. variablename = (condition) ? value1:value2
        // Source: https://www.w3schools.com/js/js_comparisons.asp
         accumulator === undefined ? i <= end:i >= end;
         // Other ternary operator that assigns i to i + accumulator value then increments variable, returning new value
         // https://stackoverflow.com/questions/6867876/javascript-i-vs-i
         accumulator ? (i = i + accumulator):++i)
        // Push method is used for adding an element to the end of an array. array.push(i) will add i to the end of the array
        // Source: https://www.freecodecamp.org/news/javascript-array-insert-how-to-add-to-an-array-with-the-push-unshift-and-concat-functions/
        array.push(i);
    return array;
};

// Array type provides a method called reduce() that helps you to reduce an array into a single value
// Source: https://www.javascripttutorial.net/javascript-array-reduce/
let sum = function(array) {
    // Add up elements of array to the sum variable, return accumulator value (return value from reduce call)
    // + current (value of array element in current iteration)
    let reduce = array.reduce(function (accumulator, current) {
        return accumulator + current;
    }, 0);
    return reduce;
};

console.log(range(1, 10));
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// 55